import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/Index";

const ProductTile = ({ productItems }) => {
  const navigate = useNavigate();
  const { handleAddToCart } = useContext(GlobalContext);
  

  return (
    <div className="flex flex-wrap justify-center gap-5 mt-5 mb-5 m-auto">
      {productItems?.length > 0 &&
        productItems?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 w-[350px] h-[420px] px-5 py-5 bg-green-200/20 border-1 border-green-200/20 shadow-lg shadow-green-300/20 rounded-sm hover:scale-105 transition-all"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
              className="h-[200px] w-[200px]"
            />
            <div className="flex flex-col items-center gap-2">
              <p className="text-center text-lg text-green-600 w-[90%]">
                {item.title}
              </p>
              <p className="text-center text-gray-400">${item.price}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="h-[40px] bg-black text-white px-5 rounded-sm hover:scale-105 transition-all cursor-pointer"
                onClick={() => handleAddToCart(item)}
              >
                Add to cart
              </button>
              <button
                className="h-[40px] bg-black text-white px-5 rounded-sm hover:scale-105 transition-all cursor-pointer"
                onClick={() => navigate(`/product-details/${item?.id}`)}
              >
                View details
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductTile;
