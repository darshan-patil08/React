import { Outlet } from "react-router"
import NavBar from "../components/NavBar"
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar/>
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout 