import CartCard from "../components/CartCard";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";



const CartScreen = () => {
  const {cartItems} = useContext(MyContext);
  
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl p-2 font-bold text-center text-white">
        This is Cart Screen
      </h1>
      {cartItems.map((item, index) => (
        <CartCard key={index} cartItems={item} />
      ))}
    </div>
  );
};

export default CartScreen;
