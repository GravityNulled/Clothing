import React from "react";

const HomeSlider = ({ img, heading, para }) => {
  return (
    <div className="relative w-full h-[600px]">
      <img src={img} className="w-full object-cover h-[100%]" alt="brownhat" />
      <div className="absolute top-[40%] md:top-[40%] md:left-[60%]  text-white flex flex-col  px-8 py-3">
        <h1 className="font-bold uppercase md:text-3xl">{heading}</h1>
        <p>{para}</p>
        <button className="px-2 w-[150px] border-black border-[1px] outline-none mt-10 bg-white text-black">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
