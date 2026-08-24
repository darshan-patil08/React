import { Outlet, NavLink } from "react-router"

const Home = () => {
  return (
    <div className='p-4'>
      <h1>Home</h1>
     <button><NavLink to="/details">Details</NavLink></button>
      <Outlet/>
    </div>
  )
}

export default Home
