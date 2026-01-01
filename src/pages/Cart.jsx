import React, { useContext } from "react";
import { GlobalContext } from "../context/Index";

const Cart = () => {
  const { cartDetails, handleCartDeleteItem, handleCartPay } =
    useContext(GlobalContext);
  const totalAmount = cartDetails.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <div className="flex flex-col gap-5 overflow-auto h-[500px]">
        {cartDetails.map((item, index) => {
          return (
            <div key={index} className="bg-blue-500/10 flex px-5 py-2 gap-5">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-[50px] w-[50px]"
              />
              <div>
                <div>
                  <p className="text-blue-400 font-semibold text-lg">
                    {item.title}
                  </p>
                  <p className="text-gray-400 font-semibold">${item.price}</p>
                </div>
                <div className="flex gap-5">
                  <button
                    onClick={() => handleCartDeleteItem(item)}
                    className="bg-blue-500 px-5 py-1 rounded-sm text-white font-semibold hover:scale-105 transition-all cursor-pointer"
                  >
                    Remove item
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1>Your total amount is:</h1>
        <p>${totalAmount}</p>
        <button
          onClick={handleCartPay}
          className="w-[150px] h-[45px] bg-blue-500 px-5 py-1 rounded-sm text-white font-semibold hover:scale-105 transition-all cursor-pointer"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Cart;
