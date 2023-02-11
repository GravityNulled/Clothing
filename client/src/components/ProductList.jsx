import React from "react";
import Product from "./Product";
import { Products } from "../data";
const ProductList = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto md:w-5/6">
        <div className="grid">
          {Products.map((prod, index) => {
            return <Product key={index} item={prod} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
