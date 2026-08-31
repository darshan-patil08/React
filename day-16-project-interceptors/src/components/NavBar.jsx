import { useContext } from 'react';
import {  NavLink } from 'react-router';
import { Auth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const NavBar = () => {

  const {setLoginUser} = useContext(Auth);

  const handleLogout = () => {
    localStorage.removeItem('loginUser');
    toast.warn('Logged out successfully', { position: 'top-right' });
    setLoginUser(null);
  }
        
  return (
    <div className='bg-[#f5f5f5] flex grid grid-cols-[1fr_6fr]  h-screen overflow-auto'>
              <nav  className='bg-amber-500 p-4 flex flex-col border border-r-black border-2 h-full  justify-between gap-4'>
        <div className='flex flex-col gap-10'>
          <h1 className="text-3xl  font-semibold text-white">E-Commerce</h1>
            <div className='flex items-center pl-5 flex-col gap-6'>
        <NavLink className={({ isActive }) => isActive ? 'text-xl w-full border-b-2 border-white  font-bold text-black' : 'text-white w-full border-b-2 border-black '} to='/main/' end>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-xl w-full border-b-2 border-white  font-bold text-black' : 'text-white w-full border-b-2 border-black '} to='/main/products'>Products</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-xl w-full border-b-2 border-white  font-bold text-black' : 'text-white w-full border-b-2 border-black '} to='/main/users'>User</NavLink>
      </div>
        </div>
      
      <div>
        <button className="bg-[#d31212eb] text-white px-4 py-2 rounded-lg hover:bg-[#12d329eb]/90 transition" onClick={handleLogout}>Logout</button>
      </div>
      </nav>
    </div>
  )
}

export default NavBar


