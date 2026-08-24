import { NavLink } from 'react-router'
const NavBar = () => {
  return (
    <div>
         <nav className='flex justify-between gap-4 bg-gray-200 p-4'>
        <div className='font-bold text-xl'>
          My App
          </div>
          <div className='flex gap-4'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
        <div>
          <button className='hover:bg-blue-600 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md'>Login </button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar