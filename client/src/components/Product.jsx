import { useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../data";
import { useSelector, useDispatch } from "react-redux";
import { add, decrement, increment } from "../Redux/cartSlice";
import { useQuery } from "react-query";
import axios from "axios";
const Product = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState(1);
  const {
    data: item,
    isLoading,
    isError,
  } = useQuery(["singleProduct"], async () => {
    const product = await axios.get(
      `http://localhost:5000/api/products/get/${id}`
    );
    return product.data;
  });
  item && item.amount == amount;
  const dispatch = useDispatch();
  return (
    <div className="pt-10 md:pt-12 pb-10 w-full ">
      <div className="container mx-auto md:w-5/6">
        {isLoading && (
          <div>
            <p>Loading Data</p>
          </div>
        )}
        {isError && (
          <div>
            <p>Error while Loading Data</p>
          </div>
        )}
        {item && (
          <div className="grid md:grid-cols-2 items-center">
            <img
              src={item.img}
              className="w-full md:h-[400px] md:max-w-xs"
              alt=""
            />
            <div className="desc flex flex-col items-center md:block">
              <p className="py-2 text-2xl font-semibold text-amber-400">
                {item.name}
              </p>
              <p className="py-2">{item.desc}</p>
              <div className="flex gap-3">
                <div
                  className={`w-[25px] h-[25px] rounded-full border  border-black bg-[${item.color}]`}
                ></div>
                <p>Size</p>
                <select name="size" id="size" disabled="">
                  <option className="p-2" value={item.size}>
                    {item.size}
                  </option>
                </select>
              </div>
              <p className="text-xl font-semibold py-2">Ksh {item.price}</p>
              <div className="flex flex-col gap-7">
                <div className="flex items-center">
                  <button
                    disabled={amount < 2}
                    onClick={() => setAmount((prev) => prev - 1)}
                    className="px-6 py-1 border-black border-2"
                  >
                    -
                  </button>
                  <span className="px-2">{amount}</span>
                  <button
                    className="px-6 py-1 border-black border-2"
                    onClick={() => setAmount((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    dispatch(add(item));
                  }}
                  className="px-6 bg-amber-400 py-1 border md:w-[200px]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
