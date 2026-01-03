import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/Index";

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(GlobalContext);
  return (
    <div className="h-[70px] bg-green-300/10 border-b-1 border-green-300/30 flex justify-around items-center">
      <div>
        <img
          src={logo}
          alt="logo"
          className="w-[120px] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div
        className="relative cursor-pointer"
        onClick={() => navigate("/cart")}
      >
        <IoCartOutline className="text-[2.5rem]" />
        <p className="absolute -top-3 right-0">{cartItems.length}</p>
      </div>
    </div>
  );
};

export default Header;
