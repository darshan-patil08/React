import Navbar from "./components/NavBar";
import ProductsCard from "./components/ProductsCard";
import { useState, useEffect } from "react";
import CartScreen from "./pages/CartScreen";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "./context/MyContext";

const App = () => {
  // State to hold cart data fetched from the API
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  let {cartData, setCartData, cartItems} = useContext(MyContext);
 
// Function to fetch cart data from the API
  const getCartData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setCartData(response.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };
  // Fetch cart data when the component mounts
  useEffect(() => {
     
    getCartData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className=" p-5 flex flex-col gap-2 min-h-screen bg-black">
      <Navbar setIsCartOpen={setIsCartOpen} />
      {isCartOpen ? (
        <CartScreen  />
      ) : (
        <div className="grid grid-cols-3 gap-4 p-3 ">
          {
          

          cartData.map((product) => {
            let isInCart = cartItems.find((item) => item.id === product.id);
            return( 
            <ProductsCard
              className="bg-yellow-400"
              key={product.id}
              product={product}
              isInCart={isInCart}
            />)
          })} 
        </div>
      )}
    </div>
  );
};

export default App;
