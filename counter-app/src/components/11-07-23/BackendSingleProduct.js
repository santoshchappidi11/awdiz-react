import React, { useContext, useEffect, useState } from "react";
import "./BackendSingleProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/Auth.context";

const BackendSingleProduct = () => {
  const [isUserLoggeIn, setIsUserLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState();
  const [products, setProducts] = useState([]);
  const [singleProd, setSingleProd] = useState({});
  const { id } = useParams();
  const navigateTo = useNavigate();
  const { productAdded } = useContext(AuthContext);

  useEffect(() => {
    async function fetchProducts() {
      const data = await fetch("https://fakestoreapi.com/products");
      const result = await data.json();
      setProducts(result);
    }
    fetchProducts();

    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    if (products.length && id) {
      const result = products.find((prod) => prod.id == id);
      setSingleProd(result);
    }
  }, [id, products]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    if (currentUser) {
      setIsUserLoggedIn(true);
      setCurrentUserEmail(currentUser.email);
    }
  }, []);

  function addToCart() {
    const allUsers = JSON.parse(localStorage.getItem("users"));

    if (isUserLoggeIn) {
      for (let i = 0; i <= allUsers.length; i++) {
        if (allUsers[i].email == currentUserEmail) {
          allUsers[i].cart?.push(singleProd);
          productAdded(allUsers[i]);
          localStorage.setItem("users", JSON.stringify(allUsers));
          break;
        }
      }
      alert("Product added to your cart! ");
    } else {
      alert("Please Login To add the product!");
      navigateTo("/login");
    }
  }

  return (
    <div id="single-product">
      {singleProd && (
        <>
          <div className="left">
            <div className="img">
              <img src={singleProd.image} alt="product" />
            </div>
          </div>

          <div className="right">
            <h3>{singleProd.title}</h3>
            <h4>${singleProd.price}</h4>
            {singleProd.rating && (
              <div className="rating-count">
                <div className="rating">
                  <span>{singleProd.rating.rate}</span>
                  <i
                    style={{ color: "orangered" }}
                    class="fa-solid fa-star"
                  ></i>
                </div>
                <p>({singleProd.rating.count})</p>
              </div>
            )}
            <p>{singleProd.description}</p>
            <h2>
              Category : <span>{singleProd.category}</span>
            </h2>
            <div className="cart-button">
              <button onClick={addToCart}>Add to cart</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BackendSingleProduct;
