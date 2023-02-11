import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ item }) => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Product;
