import React, { useContext } from "react";
import { GlobalContext } from "../../context/Index";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { totalAmount,handleCheckOut } = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <div className="h-[200px] w-[400px] px-5 py-5 bg-green-700/20 my-5 flex flex-col items-center gap-5 rounded-sm">
      <div className="w-full">
        <h1 className="text-green-500 text-xl font-bold text-center">
          Order summary
        </h1>
        <hr />
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-gray-500">
          <span className="text-black font-semibold">Total Amount:</span> $
          {totalAmount().toFixed(2)}
        </p>
        <div className="flex gap-2">
          <button
            className="h-[45px] w-[150px] border-1 hover:bg-green-400 hover:text-white hover:border-black hover:scale-105 transition-all"
            onClick={handleCheckOut}
          >
            Checkout
          </button>
          <button
            className="h-[45px] w-[150px] bg-green-400 text-white hover:bg-transparent transition-all hover:border-1 hover:border-black hover:text-black hover:scale-105"
            onClick={() => navigate("/products")}
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
