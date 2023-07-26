import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { AuthContext } from "../context/Auth.context";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isTotalPrice, setIsTotalPrice] = useState(0);
  const { state, productRemoved, cartCleared } = useContext(AuthContext);

  // console.log(isTotalPrice);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    // const currentUser = JSON.parse(localStorage.getItem("current-user"));

    if (state.user) {
      for (let i = 0; i < usersData.length; i++) {
        if (state.user.email == usersData[i].email) {
          setProducts(usersData[i]);
          setIsUserLoggedIn(true);
        }
      }
    } else {
      setProducts([]);
      setIsUserLoggedIn(false);
    }
  }, [state.user, state.prodRemoved]);

  useEffect(() => {
    if (products?.cart?.length) {
      let totalPrice = 0;

      // products.cart.reduce((item, acc) => acc = acc+item.price,0 )

      for (let i = 0; i < products.cart.length; i++) {
        totalPrice = totalPrice + products.cart[i].price;
      }
      setIsTotalPrice(totalPrice);
    } else {
      setIsTotalPrice(0);
    }
  }, [products.cart]);

  function removeProd(prodIndex) {
    // Remove cart items using splice method---------------------------------------------->
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    if (currentUser) {
      for (let i = 0; i < usersData.length; i++) {
        if (currentUser.email == usersData[i].email) {
          usersData[i].cart.splice(prodIndex, 1);
          productRemoved(usersData[i]);
          localStorage.setItem("users", JSON.stringify(usersData));
          break;
        }
      }
    }

    // Remove cart items using filter method--------------------------------------------->
    // if (currentUser) {
    //   for (let i = 0; i < usersData.length; i++) {
    //     if (currentUser.email == usersData[i].email) {
    //       const array = usersData[i].cart.filter((item) => item.id !== prodId);
    //       usersData[i].cart = array;
    //       // console.log(usersData[i].cart);
    //       setProducts(usersData[i].cart);
    //       localStorage.setItem("users", JSON.stringify(usersData));
    //       break;
    //     }
    //   }
    // }
  }

  function removeCartProds() {
    if (state.user) {
      const usersData = JSON.parse(localStorage.getItem("users")) || [];

      for (let i = 0; i < usersData.length; i++) {
        if (
          usersData[i].email == state.user.email &&
          usersData[i].password == state.user.password
        ) {
          usersData[i].cart = [];
          cartCleared(usersData[i]);
        }
      }
      localStorage.setItem("users", JSON.stringify(usersData));
    }
    setProducts([]);
    alert("Thank You for shopping! Your Product will deliver soon...");
  }

  return (
    <div id="cart-screen">
      {isUserLoggedIn ? (
        <div id="cart-products">
          {products.cart?.length ? (
            products.cart.map((singleCartItem, index) => (
              <div key={index} className="cart-product">
                <div className="cart-prod-img">
                  <img src={singleCartItem.image} alt="product" />
                </div>
                <div className="cart-prod-details">
                  <h2>{singleCartItem.title}</h2>
                  <span>${singleCartItem.price}</span>
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
        <div className="login-to-products">
          <h2>Please Register/Login to view the products :)</h2>
        </div>
      )}
      {isUserLoggedIn && (
        <div id="cart-products-total">
          <h2>Total</h2>
          <div className="total-price">
            <p>Total Price:</p>
            <span>{Math.round(isTotalPrice)} $</span>
          </div>
          <div className="total-price">
            <p>Discount (50%):</p>
            <span>- {Math.round(isTotalPrice) / 2} $</span>
          </div>
          <div className="total-price">
            <p>Total Price (after discount):</p>
            <span>{Math.round(isTotalPrice) / 2} $</span>
          </div>
          <div className="buy">
            <h2>
              Total <span>{Math.round(isTotalPrice) / 2} $</span>
            </h2>
            <button onClick={removeCartProds}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
