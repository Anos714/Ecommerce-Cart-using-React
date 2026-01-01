import React, { useContext } from "react";
import useFetch from "../custom hooks/useFetch";
import Header from "../components/Header";
import { GlobalContext } from "../context/Index";
import Loader from "../components/Loader";

const Product = () => {
  const { data, error, isLoading } = useFetch("https://dummyjson.com/products");
  if (isLoading) return <Loader />;
  if (error) return <h1>{error.message}</h1>;
  // console.log(data);

  const { handleCartFunctionality, showProductDetails } =
    useContext(GlobalContext);

  return (
    <div>
      <Header />
      <div className="my-8 flex flex-wrap gap-8 justify-center">
        {data?.products?.length > 0 &&
          data?.products?.map((product) => (
            <div
              className="bg-blue-500/20 text-center shadow-xl shadow-blue-500/20 rounded-md flex flex-col items-center gap-5 h-full w-[300px] py-5 px-5"
              key={product.id}
            >
              <div>
                <h1>{product.title}</h1>
              </div>

              <img
                src={product.thumbnail}
                alt="product"
                loading="lazy"
                className="h-[200px] w-[200px]"
              />
              <div>
                <h3>Price - {product.price}</h3>
              </div>
              <button
                onClick={() => handleCartFunctionality(product)}
                className="bg-blue-600/50 rounded-sm h-[45px] w-[150px] text-white font-semibold hover:scale-105 transition-all "
              >
                Add to cart
              </button>
              <button
                onClick={() => showProductDetails(product?.id)}
                className="bg-blue-600/50 rounded-sm h-[45px] w-[150px] text-white font-semibold hover:scale-105 transition-all "
              >
                Details
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
