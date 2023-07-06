import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./../../data/myProducts.json";

const AllProducts2 = () => {
  const router = useNavigate();

  return (
    <div>
      {data.map((item) => (
        <div key={item.p_id}>
          <h2>{item.name}</h2>
          <span>{item.description}</span>
          <button onClick={() => router(`/single-product2/${item.p_id}`)}>
            Go to Single Product-2
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllProducts2;
