import { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const navigateTo = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    if (currentUser) {
      setIsUserLoggedIn(true);
    }
  });

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("current-user"));

    if (currentUser) {
      for (let i = 0; i < allUsers.length; i++) {
        if (currentUser.email == allUsers[i].email) {
          setUser(allUsers[i]);
        }
      }
    }
  });

  function logout() {
    setIsUserLoggedIn(false);
    localStorage.removeItem("current-user");
    alert("You are logged out successfully!");
    navigateTo("/login");
  }

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
              <h3>Profile</h3>
            </div>
            <div id="nav-cart" onClick={() => navigateTo("/cart")}>
              <h3>Cart</h3>
              <span>{user.cart.length}</span>
            </div>
            <div id="user-name">
              <h4>Hi {user.name.toUpperCase()}</h4>
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
