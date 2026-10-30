import { useSelector } from "react-redux";
import {NavLink} from "react-router"
const NavBar = () => {
     const { user } = useSelector((state) => state.auth);
  return (

   

    <div className="flex justify-between items-center p-4 ">
        <div className="text-2xl font-bold text-blue-500">
            Skydart
        </div>
        <div className="flex items-center gap-4">
            <NavLink className={({isActive}) => isActive ? "text-blue-500" : ""} to="/main" end>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-blue-500" : ""} to="/main/shop">Shop</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-blue-500" : ""} to="/main/about">About</NavLink>
            
        </div>
        <div className="flex items-center gap-4">
            <h1>hey, <strong className="text-emerald-500 uppercase">{user?.fullName}</strong></h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Cart</button>
        </div>
    </div>
  )
}

export default NavBar