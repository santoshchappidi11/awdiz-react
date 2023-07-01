import React from "react";
import myData from "./../../data/myProducts.json";

const DeclarativeWay = () => {
  return (
    <div>
      {myData.map((product) => (
        <div key={product.p_id}>
          <h1>Name: {product.name}</h1>
          <h3>Description: {product.description}</h3>
          <h2>Price: {product.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default DeclarativeWay;
