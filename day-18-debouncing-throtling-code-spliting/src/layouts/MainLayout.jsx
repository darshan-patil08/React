import { Outlet, NavLink } from "react-router"

const MainLayout = () => {
  return (
    <div>
        <nav className="flex gap-4 text-black p-4 bg-slate-400 p-4">

                <NavLink to="/">App </NavLink>
                <NavLink to="/about">About </NavLink>
                <NavLink to="/contact">Contact </NavLink>
        </nav>
            <Outlet />
        
    </div>
  )
}

export default MainLayout