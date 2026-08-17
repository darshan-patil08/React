const NavBar = ({  setToggle }) => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
          alt="Profile"
          className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-200"
        />
      </div>

      <div className="flex items-center gap-8 text-sm font-medium text-slate-700">
        <a href="#" className="transition hover:text-indigo-600">HOME</a>
        <a href="#" className="transition hover:text-indigo-600">ABOUT</a>
        <a href="#" className="transition hover:text-indigo-600">CONTACT</a>
      </div>

      <button onClick={() => setToggle(prev => !prev) } className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-500">
        ADD USER
      </button>
    </nav>
  )
}

export default NavBar
