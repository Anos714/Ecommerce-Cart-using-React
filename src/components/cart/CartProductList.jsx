import React, { useContext } from "react";
import { GlobalContext } from "../../context/Index";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const CartProductList = () => {
  const {
    cartItems,
    handleCartProductPlus,
    handleCartProductMinus,
    handleRemoveFromCart,
  } = useContext(GlobalContext);
  return cartItems.length > 0 ? (
    <div className="flex flex-col py-5 gap-2 overflow-auto max-h-[600px]">
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="lg:w-[900px] sm:max-md:w-[400px] flex gap-5 bg-green-400/10 px-5 py-2 relative"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h[100px] w-[100px]"
            />
            <div className="flex  gap-3">
              <FaPlus
                className="cursor-pointer text-lg"
                onClick={() => handleCartProductPlus(item)}
              />

              <FaMinus
                className="cursor-pointer text-lg"
                onClick={() => handleCartProductMinus(item)}
              />
            </div>
          </div>
          <div className="flex flex-col justify-around">
            <div>
              <h1 className="sm:max-md:w-[170px] text-lg text-green-700/60 font-semibold">
                {item.title}
              </h1>
              <p className="text-gray-500">${item.price}</p>
              <p className="text-xs">Quantity: {item.quantity}</p>
            </div>
            <div>
              <button
                className="bg-green-300/20 h-[40px] w-[150px] hover:bg-transparent hover:border-1 hover:border-green-700/20 hover:scale-105 transition-all cursor-pointer"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center absolute right-2 top-10">
            <p className="text-gray-500">
              ${(item.quantity * item.price).toFixed(2)}
            </p>
            <h1 className="text-green-700/50 font-semibold">Total Amount</h1>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <h1 className="text-5xl ">No Products in the cart</h1>
  );
};

export default CartProductList;
