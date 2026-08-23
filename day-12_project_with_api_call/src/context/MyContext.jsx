import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const [cartItems, setCartItems] = useState([]);



  let incrementQuantity = (productId) => {
    
    
    setCartItems((prevItems) => {
      
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  };

  let decrementQuantity = (productId) => {
    if (cartItems.find((item) => item.id === productId).quantity === 1) {
       
       return setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId),
      );
    }
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  };



  return (
    <MyContext.Provider
      value={{
        cartData,
        cartItems,
        setCartData,
        setCartItems,
        incrementQuantity,
        decrementQuantity,}}
    >
      {children}
    </MyContext.Provider>
  );
};
