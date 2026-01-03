import React, { useContext, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { GlobalContext } from "../../context/Index";

const ProductItem = ({ singleProductItem }) => {
  const [showOtherInfo, setShowOtherInfo] = useState(false);
  const { handleAddToCart } = useContext(GlobalContext);
  return (
    <div className="flex gap-5 mx-20 sm:max-md:flex-col md:max-lg:flex-col sm:max-md:items-start md:max-lg:items-start min-[300px]:max-sm:flex-col min-[300px]:max-sm:mb-10">
      <div className="flex flex-col gap-5">
        <div>
          <img
            src={singleProductItem?.thumbnail}
            alt={singleProductItem?.title}
            loading="lazy"
            className="bg-green-300/10 lg:h-[500px] lg:w-[500px] sm:max-md:h-[400px] sm:max-md:w-[400px] min-[300px]:max-sm:h-[300px] min-[300px]:max-sm:w-[300px]"
          />
        </div>
        <div className="flex gap-5">
          {singleProductItem?.images?.map((item) => (
            <>
              <img
                src={item}
                alt="image"
                loading="lazy"
                className="h-[100px] w-[100px] bg-green-400/10 shadow-sm shadow-green-900/50 rounded-sm"
              />
            </>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:ml-50 lg:mt-35 sm:max-md:mb-10 md:max-lg:mb-10">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-lg text-green-500 font-semibold">
              {singleProductItem?.title}
            </p>
            <p className="text-gray-400">${singleProductItem?.price}</p>
          </div>
          <button
            className="border-1 h-[45px] w-[150px] hover:bg-green-600/20
          hover:scale-105 transition-all"
            onClick={() => handleAddToCart(singleProductItem)}
          >
            Add to cart
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <p
            className="flex gap-1 items-center text-lg font-semibold cursor-pointer"
            onClick={() => setShowOtherInfo((prev) => !prev)}
          >
            Other info <FaArrowDown className="text-sm" />
          </p>
          {showOtherInfo ? (
            <>
              <div>
                <p className="text-green-500 font-semibold">Description</p>
                <p className="text-gray-400 text-sm w-[250px]">
                  {singleProductItem?.description}
                </p>
              </div>
              <div>
                <p className="text-green-500 font-semibold">Category</p>
                <p className="text-gray-400 text-sm">
                  {singleProductItem?.category}
                </p>
              </div>
              <div>
                <p className="text-green-500 font-semibold">Warrenty</p>
                <p className="text-gray-400 text-sm">
                  {singleProductItem?.warrantyInformation}
                </p>
              </div>
              <div>
                <p className="text-green-500 font-semibold">Rating</p>
                <p className="flex gap-1 items-center text-gray-400 text-sm">
                  {singleProductItem?.rating} <FaStar />
                </p>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
