import React from "react";
import { useQuery } from "react-query";
import { Products } from "../data";
import ProductCard from "./ProductCard";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
const ProductList = () => {
  const { data, isLoading, isError } = useQuery(["products"], async () => {
    const res = await axios.get("http://localhost:5000/api/products/");
    return res.data;
  });
  console.log(data);
  return (
    <section className="py-10">
      <div className="container mx-auto md:w-5/6">
        {isLoading && <PropagateLoader color="#36d7b7" loading size={19} />}
        {isError && <p>Error while Loading Data"</p>}

        <div className="grid gap-x-2 gap-y-3 xl:grid-cols-4 md:grid-cols-2">
          {data &&
            data.map((prod, index) => {
              return <ProductCard key={index} item={prod} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
