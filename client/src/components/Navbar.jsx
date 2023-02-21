import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import Advert from "./Advert";

const Navbar = () => {
  return (
    <header className="shadow-sm">
      <Advert />
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
            <Link to={"/"}>
              <h1 className="font-bold text-xl md:text-2xl">CLOTHING</h1>
            </Link>
          </div>
          <div className="flex items-center gap-1 md:gap-5">
            <Link to={"/cart"}>
              <div className="relative">
                <FiShoppingBag size={20} />
                <span className="absolute top-0 right-0 text-red-500">0</span>
              </div>
            </Link>
            <Link to={"/register"}>
              <button className="font-bold py-3 px-2">REGISTER</button>
            </Link>
            <Link to={"/login"}>
              <button className="font-bold py-3 px-2">LOGIN</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
