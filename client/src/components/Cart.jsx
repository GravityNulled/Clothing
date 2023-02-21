import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "../Redux/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const totalCost = cart.reduce((total, item) => {
    return total + item.cartAmount * item.price;
  }, 0);
  console.log(totalCost);
  return (
    <section className="py-10 w-full">
      <div className="container mx-auto md:w-5/6">
        <h1 className="text-2xl py-3">Your Shopping Cart</h1>
        {/* card */}
        <div className="grid gap-7 md:grid-cols-2">
          {/* cart Card */}
          {cart.map((item, index) => {
            return (
              <div key={index} className="border gap-4 items-center flex">
                <img
                  src={item.img}
                  className="max-w-[150px]  max-h-[150px]"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="mb-3">{item.title}</p>
                  <div className="flex items-center gap-3">
                    <button
                      disabled={item.cartAmount < 2}
                      className="px-6 py-1 border-black border-2"
                      onClick={() => dispatch(decrement(item))}
                    >
                      -
                    </button>
                    <p>{item.cartAmount}</p>
                    <button
                      className="px-6 py-1 border-black border-2" 
                      onClick={() => dispatch(increment(item))}
                    >
                      +
                    </button>
                  </div>
                  <p className="py-1 font-semibold">
                    Ksh {item.price * item.cartAmount}
                  </p>
                  <button
                    onClick={() => dispatch(remove(item))}
                    className="px-2 py-1 border"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })}

          {/* Check Out Card */}
          <div className="flex flex-col">
            <p className="py-2 font-semibold text-2xl ">Cart Summary</p>
            {/* Cart Items */}
            {cart.map((item) => {
              return (
                <div className="flex gap-3">
                  <p className="font-semibold">{item.title}</p>
                  <p className="font-semibold">Amount {item.cartAmount}</p>
                </div>
              );
            })}
            <p className="my-3 text-md font-bold">Total Ksh {totalCost}</p>
            <div className="flex gap-2 md:gap-4 items-center justify-center">
              <button className="px-2 border py-1 outline-none border-black md:text-xl">
                Continue Shopping
              </button>
              <button className="px-2 border py-1 outline-none  border-black md:text-xl">
                Proceed To Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
