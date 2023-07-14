import React, { useEffect, useState } from "react";
import "./BackendSingleProduct.css";
import { useParams } from "react-router-dom";

const BackendSingleProduct = () => {
  const [products, setProducts] = useState([]);
  const [singleProd, setSingleProd] = useState({});
  const { id } = useParams();

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
      console.log(result);
      setSingleProd(result);
    }
  }, [id, products]);

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
            <h4>₹{singleProd.price}</h4>
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
          </div>
        </>
      )}
    </div>
  );
};

export default BackendSingleProduct;
