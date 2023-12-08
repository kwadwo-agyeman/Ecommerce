// CartContext.js

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (cardInfo) => {
    // Check if the item is already in the cart
    const existingCartItem = cartItems.find((item) => item.id === cardInfo.id);

    if (existingCartItem) {
      // If the item is already in the cart, update its quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === cardInfo.id-1 ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems((prevItems) => [...prevItems, { ...cardInfo, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
