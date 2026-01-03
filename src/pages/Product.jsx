import React, { useState } from "react";
import useFetch from "../custom hooks/useFetch";
import Loader from "../components/Loader";
import Header from "../components/Header";
import ProductTile from "../components/product/ProductTile";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const skip = (currentPage - 1) * itemsPerPage;
  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`
  );

  if (isLoading) return <Loader />;
  if (error) return <h1>{error.message}</h1>;

  const currentProducts = data?.products;
  const totalPages = Math.ceil((data?.total || 0) / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-green-100/20 flex flex-col gap-5 ">
      <Header />
      <div>
        <div className="flex justify-center gap-4 mt-8 mb-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
          >
            Prev
          </button>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
          >
            Next
          </button>
        </div>
        <ProductTile productItems={currentProducts} />
        <div className="flex justify-center gap-4 mt-8 mb-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
          >
            Prev
          </button>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
