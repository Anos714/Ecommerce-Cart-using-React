import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const GlobalContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [cartDetails, setCartDetails] = useState(() => {
    const savedCart = localStorage.getItem("cartDetails");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const navigate = useNavigate();

  const showProductDetails = (getProductId) => {
    navigate(`/product-details/${getProductId}`);
  };

  const handleCartFunctionality = (getProduct) => {
    console.log(getProduct);
    const updatedCart = [...cartDetails, getProduct];
    setCartDetails(updatedCart);
  };

  useEffect(() => {
    localStorage.setItem("cartDetails", JSON.stringify(cartDetails));
  }, [cartDetails]);

  const handleCartDeleteItem = (getProduct) => {
    const copyCartDetails = [...cartDetails];
    const findIndexOfItem = copyCartDetails.findIndex(
      (item) => item.id === getProduct.id
    );
    if (findIndexOfItem !== -1) {
      copyCartDetails.splice(findIndexOfItem, 1);
      setCartDetails(copyCartDetails);
    }
  };

  const handleCartPay = () => {
    if (cartDetails.length > 0) {
      alert("Thanks for purchasing from Bazar");
      setCartDetails([]);
      navigate("/products");
    } else {
      alert("Add some products in the cart first!");
      navigate("/products");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        cartDetails,
        handleCartPay,
        handleCartFunctionality,
        showProductDetails,
        handleCartDeleteItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
