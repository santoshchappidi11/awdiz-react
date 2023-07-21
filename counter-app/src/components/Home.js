import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";

function Home() {
  const navigateTo = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  const { state, logout } = useContext(AuthContext);

  useEffect(() => {
    if (state.user?.email) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [state.user]);

  return (
    <div id="home">
      <h3>Home</h3>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => navigateTo("/backend-products")}
      >
        Fetch Products
      </button>
      {isUserLoggedIn && <button onClick={logout}>Logout</button>}
      {!isUserLoggedIn && (
        <button onClick={() => navigateTo("/login")}>Login</button>
      )}
    </div>
  );
}

export default Home;
