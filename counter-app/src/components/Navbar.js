import { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";

function Navbar() {
  const { logout, state } = useContext(AuthContext);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const navigateTo = useNavigate();

  useEffect(() => {
    // const currentUser = JSON.parse(localStorage.getItem("current-user"));
    // if (currentUser) {
    //   setIsUserLoggedIn(true);
    // }

    if (state.user?.email) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [state.user]);

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    // const currentUser = JSON.parse(localStorage.getItem("current-user"));

    if (state.user) {
      for (let i = 0; i < allUsers.length; i++) {
        if (state.user.email == allUsers[i].email) {
          setUser(allUsers[i]);
        }
      }
    }
  }, [state.user, state.prodAdded, state.prodRemoved, state.cartCleared]);

  // function logout() {
  //   setIsUserLoggedIn(false);
  //   localStorage.removeItem("current-user");
  //   alert("You are logged out successfully!");
  //   navigateTo("/login");
  // }

  return (
    <div id="navbar">
      <div id="left">
        <h1 onClick={() => navigateTo("/home")} style={{ cursor: "pointer" }}>
          LOGO
        </h1>
      </div>
      <div id="right">
        {isUserLoggedIn && (
          <>
            <div id="profile">
              <h3 onClick={() => navigateTo("/profile")}>Profile</h3>
            </div>
            <div id="nav-cart" onClick={() => navigateTo("/cart")}>
              <h3>Cart</h3>
              <span>{user.cart && user.cart.length}</span>
            </div>
            <div id="user-name">
              <h4>Hi {user.name && user.name.toUpperCase()}</h4>
            </div>
          </>
        )}
        {isUserLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={() => navigateTo("/login")}>Login</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
