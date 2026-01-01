import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/Index";

const Header = () => {
  const navigate = useNavigate();
  const { cartDetails } = useContext(GlobalContext);
  return (
    <div className="sticky top-0 flex justify-around items-center h-[70px] bg-blue-500/10">
      <div>
        <h1
          className="text-xl font-bold text-blue-700 cursor-pointer"
          onClick={() => navigate("/products")}
        >
          Bazar
        </h1>
      </div>
      <div>
        <button
          onClick={() => navigate("/cart")}
          className="bg-blue-600/50 text-white h-[45px] w-[150px] text-xl font-semibold rounded-md hover:scale-105 transition-all"
        >
          Cart {cartDetails.length > 0 ? cartDetails.length : null}
        </button>
      </div>
    </div>
  );
};

export default Header;
