import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../custom hooks/useFetch";
import ProductItem from "../components/product-details/ProductItem";
import Header from "../components/Header";
import Loader from "../components/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );
  console.log(data);
  if (isLoading) return <Loader />;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="bg-green-100/20">
      <Header />
      <div className="mx-5 mt-2">
        <ProductItem singleProductItem={data} />
      </div>
    </div>
  );
};

export default ProductDetails;
