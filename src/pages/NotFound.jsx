import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const NotFound = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-2">
      <h1 className="text-4xl font-bold ">Page not found</h1>
      <Link className="text-blue-600 underline cursor-pointer" to="/products">
        Go to products page
      </Link>
    </div>
  );
};

export default NotFound;
