import { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigateTo = useNavigate();

  return (
    <div id="home">
      <h3>Home</h3>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => navigateTo("/backend-products")}
      >
        Fetch Products
      </button>
    </div>
  );
}

export default Home;
