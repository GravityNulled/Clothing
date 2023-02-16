import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className=" flex flex-col w-full">
        <img
          src={item.img}
          className="w-full h-[300px] object-cover md:w-full hover:scale-105 duration-300 transition-all"
          alt=""
        />
        <p className="mt-2 text-slate-500">{item.name}</p>
        <p className="font-semi-bold">Ksh {item.price}.00</p>
      </div>
    </Link>
  );
};

export default ProductCard;
