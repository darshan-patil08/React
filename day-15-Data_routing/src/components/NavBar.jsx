import { NavLink } from "react-router"

const NavBar = () => {
  return (
    <div className="flex gap-4 justify-center p-4 bg-red-500 text-white " >

        <NavLink className="text-white text-2xl font-bold" activeClassName="text-green-500" exact to="/">Home</NavLink>
        <NavLink className="text-white text-2xl font-bold" activeClassName="text-green-500" to="/about">About</NavLink>
        <NavLink className="text-white text-2xl font-bold" activeClassName="text-green-500" to="/services">Services</NavLink>
    </div>
  )
}

export default NavBar