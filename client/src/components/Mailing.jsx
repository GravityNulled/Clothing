import React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
export const Mailing = () => {
  return (
    <section className="py-10 w-full ">
      <div className="container mx-auto md:w-5/6">
        <div>
          <h1 className="text-center font-semi-bold uppercase text-xl md:text-2xl pb-4">
            Subscribe To our Mailing List
          </h1>

          <form
            className="flex flex-col justify-center items-center gap-3"
            action=""
            target="_blank"
          >
            <div className="flex gap-1 items-center">
              <input
                type="text"
                name="email"
                className="w-[100%] h-[30px] border border-black"
              />
              <BsArrowRightSquareFill size={35} className="text-teal-500" />
            </div>
            <button className="border px-5 py-2 border-black hover:bg-teal-500 hover:text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
