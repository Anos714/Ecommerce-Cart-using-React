import React from "react";
import CartProductList from "../components/cart/CartProductList";
import Checkout from "../components/cart/Checkout";

const Cart = () => {
  return (
    <div className="flex gap-5 lg:justify-around bg-green-500/10 h-screen w-screen sm:max-md:flex-col sm:max-md:items-center min-[400px]:max-sm:flex-col min-[400px]:max-sm:items-center min-[300px]:max-sm:flex-col">
      <CartProductList />
      <Checkout />
    </div>
  );
};

export default Cart;
