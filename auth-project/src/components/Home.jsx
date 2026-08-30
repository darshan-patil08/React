import { NavLink, useNavigate } from "react-router"

const Home = () => {
  const navigate = useNavigate();
  console.log('User logged out');

  const handleLogout = () => {
    localStorage.removeItem('loginUser');
    navigate('/');
    
  }

  return (
    <div>
      <nav  className='bg-amber-500 p-4 flex items-center justify-between gap-4'>
        <div>
          <h1 className="text-3xl font-semibold text-white">Logo</h1>
        </div>
        <div className='flex gap-4'>
        <NavLink to='/main/home'>Home</NavLink>
        <NavLink to='/main/about'>About</NavLink>
        <NavLink to='/main/contact'>Contact</NavLink>
      </div>
      <div>
        <button className="bg-[#d31212eb] text-white px-4 py-2 rounded-lg hover:bg-[#12d329eb]/90 transition" onClick={handleLogout}>Logout</button>
      </div>
      </nav>
    </div>
  )
}

export default Home