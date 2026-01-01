import React, { useContext, useEffect } from "react";

import { GlobalContext } from "../context/Index";
import Header from "../components/Header";
import useFetch from "../custom hooks/useFetch";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(
    `https://dummyjson.com/products/${id}`
  );
  const { handleCartFunctionality } = useContext(GlobalContext);
  if (isLoading) return <Loader />;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <div className="bg-blue-500/20 text-center shadow-xl shadow-blue-500/20 rounded-md flex lg:flex-row items-center lg:gap-5 lg:h-[600px] lg:w-[800px] py-5 px-5 my-10 mx-10 sm:h-[500px] sm:w-[400px] sm:flex-col sm:gap-5 md:flex-row md:h-[400px] md:w-[600px] max-[475px]:flex-col max-[475px]:gap-5">
          <div>
            <img
              src={data?.thumbnail}
              alt="product"
              loading="lazy"
              className="lg:h-[500px] lg:w-[500px] sm:w-[200px] sm:h-[200px]"
            />

            <button
              onClick={() => handleCartFunctionality(data)}
              className="bg-blue-600/50 rounded-sm h-[45px] w-[150px] text-white font-semibold hover:scale-105 transition-all "
            >
              Add to cart
            </button>
          </div>

          <div>
            <div>
              <h1>{data?.title}</h1>
              <p>Brand - {data?.brand}</p>
              <p>Category - {data?.category}</p>
            </div>

            <div>
              <h3>Price - {data?.price}</h3>
              <h3>Stock - {data?.stock} units</h3>
              <h3>Rating - {data?.rating} star</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
