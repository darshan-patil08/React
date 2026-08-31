import { Outlet } from "react-router"
import NavBar from "../components/NavBar"

const MainLayout = () => {
  return (
    <div className='bg-[#f5f5f5] flex grid grid-cols-[1fr_6fr] min-h-screen'>
      <NavBar />

  <div className="p-4 h-screen overflow-auto">
      <Outlet />
       </div>              

    </div>
  )
}

export default MainLayout