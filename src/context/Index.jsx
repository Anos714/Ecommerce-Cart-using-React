import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  

  const handleAddToCart = (getProduct) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === getProduct.id);
      console.log(existingItem);
      if (existingItem) {
        return prev.map((item) =>
          item.id === getProduct.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        return [...prev, { ...getProduct, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems) || []);
  }, [cartItems]);

  const handleCartProductPlus = (getProduct) => {
    const cpyExistingCartItems = [...cartItems];
    const currentCartItem = cpyExistingCartItems.findIndex(
      (item) => item.id === getProduct.id
    );
    console.log(currentCartItem);
    if (cpyExistingCartItems[currentCartItem].quantity >= 1) {
      console.log(cpyExistingCartItems[currentCartItem]);
      cpyExistingCartItems[currentCartItem].quantity = getProduct.quantity + 1;
      setCartItems([...cpyExistingCartItems]);
    }
  };
  const handleCartProductMinus = (getProduct) => {
    const cpyExistingCartItems = [...cartItems];
    const currentCartItem = cpyExistingCartItems.findIndex(
      (item) => item.id === getProduct.id
    );
    console.log(currentCartItem);
    if (cpyExistingCartItems[currentCartItem].quantity > 1) {
      console.log(cpyExistingCartItems[currentCartItem]);
      cpyExistingCartItems[currentCartItem].quantity = getProduct.quantity - 1;
      setCartItems([...cpyExistingCartItems]);
    }
  };

  const handleRemoveFromCart = (getProduct) => {
    const cpyExistingCartItems = [...cartItems];
    const filteredItems = cpyExistingCartItems.filter(
      (item) => item.id !== getProduct.id
    );

    setCartItems(filteredItems);
  };

  const totalAmount = () => {
    const total = cartItems?.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    return total;
  };

  const handleCheckOut = () => {
    alert("Thank You for shopping from Bazar");
    navigate("/products");
    setCartItems([]);
  };

  return (
    <GlobalContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductPlus,
        handleCartProductMinus,
        totalAmount,
        handleCheckOut,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
