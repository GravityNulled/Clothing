import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-auto md:w-5/6">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center gap-10 justify-between">
            <div className="flex">
              <div className="flex items-center gap-2">
                <p>ENG</p>
                <AiOutlineDown />
              </div>
            </div>
            <div className="relative">
              <input
                className="outline-none border px-2"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex">
            <h1 className="font-bold text-2xl">CLOTHING</h1>
          </div>
          <div className="flex gap-1 md:gap-5">
            <button className="font-bold p-3">REGISTER</button>
            <button className="font-bold p-3">LOGIN</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
