import React from "react";
import { Products } from "../data";
import ProductCard from "./ProductCard";
const ProductList = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto md:w-5/6">
        <div className="grid gap-x-2 gap-y-3 xl:grid-cols-4 md:grid-cols-2">
          {Products.map((prod, index) => {
            return <ProductCard key={index} item={prod} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
