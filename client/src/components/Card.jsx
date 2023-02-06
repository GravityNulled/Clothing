import React from "react";

const Card = ({ img, title }) => {
  return (
    <div className="relative h-[600px] text-white">
      <img src={img} className="w-full h-full object-cover" alt="" />
      <div className="absolute gap-7 top-[50%] right-[25%] z-10 flex flex-col items-center">
        <p className="uppercase text-center font-bold text-2xl">{title}</p>
        <button className="text-xl w-[150px]  bg-white text-black rounded">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Card;
