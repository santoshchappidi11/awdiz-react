import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("current-user"));

    if (currentUser) {
      setIsUserLoggedIn(true);
      for (let i = 0; i < usersData.length; i++) {
        if (currentUser.email == usersData[i].email) {
          setProducts(usersData[i]);
        }
      }
    }
  }, []);

  useEffect(() => {});

  function removeProd(prodIndex) {
    // alert(prodIndex);
    // Remove cart items using splice method---------------------------------------------->
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    if (currentUser) {
      for (let i = 0; i < usersData.length; i++) {
        if (currentUser.email == usersData[i].email) {
          // console.log(usersData[i]);
          usersData[i].cart.splice(prodIndex, 1);
          setProducts(usersData[i]);
          localStorage.setItem("users", JSON.stringify(usersData));
          break;
        }
      }
    }

    // Remove cart items using filter method--------------------------------------------->
    //   if (currentUser) {
    //     for (let i = 0; i < usersData.length; i++) {
    //       if (currentUser.email == usersData[i].email) {
    //         usersData[i].cart.filter((item) => item.id != prodId);
    //         // console.log(usersData[i].cart);
    //         setProducts(usersData[i]);
    //         localStorage.setItem("users", JSON.stringify(usersData));
    //         break;
    //       }
    //     }
    //   }
  }

  return (
    <>
      {isUserLoggedIn ? (
        <div id="cart-products">
          {products.cart.length ? (
            products.cart.map((singleCartItem, index) => (
              <div key={index} className="cart-product">
                <div className="cart-prod-img">
                  <img src={singleCartItem.image} alt="product" />
                </div>
                <div className="cart-prod-details">
                  <h2>{singleCartItem.title}</h2>
                  <span>₹{singleCartItem.price}</span>
                  <button onClick={() => removeProd(index)}>Remove</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <h2>No products in the cart!</h2>
            </div>
          )}
        </div>
      ) : (
        <div className="no-products">
          <h2>Please Register/Login to view the products :)</h2>
        </div>
      )}
      {/* {!isUserLoggedIn && (
        <h1 style={{ marginTop: "150px" }}>
          Please Login first to add the product!
        </h1>
      )} */}
    </>
  );
};

export default Cart;
