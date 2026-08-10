import { useState } from 'react'

const Register = ({setToggle,setUsers,users}) => {
  const [formdata, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    avatar: ''
  })
 
console.log(users)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formdata)
    setUsers(prev=> [...prev, formdata])
    setFormData({       
        fullname: '',
        email: '',
        password: '',
        avatar: ''
    })
    
  }

  return (
   <form onSubmit={handleSubmit}  className="bg-gray-500 p-4 rounded-2xl gap-4 shadow-md w-full max-w-sm">
    <h2 className="text-2xl font-bold text-white mb-4">Register</h2>
    <div id="userInputs" className="flex flex-col gap-4 ">
{/* full name input */} 
    <div id="full-name-input" className="mb-4">
        <label className="block text-white">Full Name</label>
        <input value={formdata.fullname}
         required 
         name="fullname" 
         onChange={handleChange} 
         className="w-full p-2 border placeholder-gray-300 text-white border-white rounded-md" 
         type="text" 
         placeholder="Enter your full name" />
    </div>
{/* email input */}
    <div id="email-input" className="mb-4">
        <label className="block text-white">Email</label>
        <input value={formdata.email}
         required 
         name="email" 
         onChange={handleChange} 
         className="w-full p-2 border placeholder-gray-300 text-white border-white rounded-md" 
         type="email" 
         placeholder="Enter your email" />
    </div>
{/* password input */}
    <div id="password-input" className="mb-4">
        <label className="block text-white">Password</label>
        <input value={formdata.password} required name="password" onChange={handleChange} className="w-full p-2 border placeholder-gray-300 text-white border-white rounded-md" type="password" placeholder="Enter your password" />
    </div>
     <div id="img-input" className="mb-4">
        <label className="block text-white">Avatar</label>
        <input value={formdata.avatar}
         required 
         name="avatar" 
         onChange={handleChange} 
         className="w-full p-2 border placeholder-gray-300 text-white border-white rounded-md" 
         type="url" 
         placeholder="Enter your avatar url" />
    </div>
    {/* bottom section */}
    <div id="bottom-section" className="flex flex-col gap-4">
    <button id="register-button" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">Register</button>
    </div>
    <a href="" className="text-white text-center">already have an account? <span className="text-blue-200 hover:underline" onClick={() =>
        {
        event.preventDefault();
        setToggle(prev => !prev)}
        }>Sign in</span></a>
   </div>
   </form>
  )
}

export default Register
