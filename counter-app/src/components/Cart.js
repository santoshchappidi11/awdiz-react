import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("current-user"));

    if (currentUser) {
      for (let i = 0; i < usersData.length; i++) {
        if (currentUser.email == usersData[i].email) {
          setProducts(usersData[i]);
        }
      }
    }
  }, []);

  function removeProd(prodId) {
    // console.log(prodId);
    // alert(prodId);
    // const usersData = JSON.parse(localStorage.getItem("users")) || [];
    // const currentUser = JSON.parse(localStorage.getItem("current-user"));
    // if (currentUser) {
    //   usersData.filter(
    //     (user) => user.email == currentUser.email && user.cart.id !== prodId
    //   );
    //   localStorage.setItem("users", JSON.stringify(usersData));
    // }
  }

  return (
    <div id="cart-products">
      {products.cart &&
        products.cart.map((singleCartItem, index) => (
          <div key={index} className="cart-product">
            <div className="cart-prod-img">
              <img src={singleCartItem.image} alt="product" />
            </div>
            <div className="cart-prod-details">
              <h2>{singleCartItem.title}</h2>
              <span>₹{singleCartItem.price}</span>
              <button onClick={() => removeProd(singleCartItem.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
