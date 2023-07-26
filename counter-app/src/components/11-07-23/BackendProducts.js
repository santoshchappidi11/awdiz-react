import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "./BackendProducts.css";

const BackendProducts = () => {
  const [products, setProducts] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      // const result = await axios.get("https://fakestoreapi.com/products");
      // setProducts(result.data);
      // console.log(response.data);

      const data = await fetch("https://fakestoreapi.com/products");
      const result = await data.json();
      setProducts(result);
    }

    fetchProducts();
  }, []);

  function redirectToSingleProd(id) {
    navigateTo(`/backend-single-product/${id}`);
  }

  var Loading = (
    <div className="loading">
      <p>Loading...</p>
    </div>
  );

  return (
    <>
      {products.length > 0 ? (
        <div id="all-products">
          {products.map((singleProduct) => (
            <div
              key={singleProduct.id}
              className="product"
              onClick={() => redirectToSingleProd(singleProduct.id)}
            >
              <div className="product-img">
                <img src={singleProduct.image} alt="product" />
              </div>
              <h2>{singleProduct.title}</h2>
              <h3>${singleProduct.price}</h3>
              <div className="rating-count">
                <div className="rating">
                  <span>{singleProduct.rating.rate}</span>
                  <i
                    style={{ color: "orangered" }}
                    class="fa-solid fa-star"
                  ></i>
                </div>
                <p>({singleProduct.rating.count})</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        Loading
      )}
    </>
  );
};

export default BackendProducts;
