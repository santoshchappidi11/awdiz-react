import React from "react";
import { useNavigate } from "react-router-dom";

const Params = () => {
  const router = useNavigate();

  function goto() {
    router("/single-product/123");
  }

  return (
    <div>
      <button onClick={goto}>Click to go to Product ID</button>
    </div>
  );
};

export default Params;
