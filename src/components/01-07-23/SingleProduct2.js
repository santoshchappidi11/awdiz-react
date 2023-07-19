import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct2 = () => {
  const data = useParams();

  return <div>{data.id && data.id}</div>;
};

export default SingleProduct2;
