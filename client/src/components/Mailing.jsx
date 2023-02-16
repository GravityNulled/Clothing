import React from "react";

export const Mailing = () => {
  return (
    <section className="py-10 w-full ">
      <div className="container mx-auto md:w-5/6">
        <div>
          <h1 className="text-center font-semi-bold text-xl md:text-2xl pb-4">
            Subscribe To our Mailing List
          </h1>
          <form
            className="flex flex-col justify-center items-center gap-3"
            action=""
            target="_blank"
          >
            <input
              type="text"
              name="email"
              className="w-[70%] h-[30px] border border-black"
            />
            <button className="border px-8 py-2 border-black">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};
