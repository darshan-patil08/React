
const Login = ({ setToggle, handleChange }) => {
  return (
   <form className="bg-gray-500 p-4 rounded-2xl gap-4 shadow-md w-full max-w-sm">
    <h2 className="text-2xl font-bold text-white mb-4">Login</h2>
    <div id="userInputs" className="flex flex-col gap-4 ">
{/* username input */}
    <div id="username-input" className="mb-4">
        <label className="block text-white">Username</label>
        <input onChange={handleChange} className="w-full p-2 border placeholder-gray-300 text-white border-white rounded-md" type="text" placeholder="Enter your username" />
    </div>
{/* password input */}
    <div id="password-input" className="mb-4">
        <label className="block text-white">Password</label>
        <input onChange={handleChange} className="w-full p-2 border placeholder-gray-300 text-white border-white rounded-md" type="password" placeholder="Enter your password" />
    </div>
    {/* bottom section */}
    <div id="bottom-section" className="flex flex-col gap-4">
    <button id="login-button" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">Login</button>
    </div>
    <a href="" className="text-white text-center">don't have an account? <span className="text-blue-200 hover:underline" onClick={() =>{ 
        event.preventDefault()
        setToggle(prev=> !prev)

    }}>Sign up</span></a>
   </div>
   </form>
  )
}

export default Login
