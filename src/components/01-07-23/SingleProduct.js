import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const data = useParams();
  console.log(data, "-data here");

  return <div>{data && data.santosh}</div>;
};

export default SingleProduct;
