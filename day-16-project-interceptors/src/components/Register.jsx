import {useNavigate} from 'react-router'
import {useForm} from 'react-hook-form'
import {Auth} from '../context/AuthContext'
import {useContext} from 'react'
import { toast } from 'react-toastify';

const Register = () => {
    
    const {registeredUser, setRegisteredUser} = useContext(Auth)

    const {register, handleSubmit, reset,formState: {errors}} = useForm()
    
    const navigate = useNavigate()

    const onSubmit = (data) => {
      let arr = [...registeredUser, data]
      setRegisteredUser(arr)
      localStorage.setItem('registeredUser', JSON.stringify(arr))
      navigate('/')
        toast.success('Registration successful! Please login to continue.')
        reset()
    }


  return (
    <div className="min-h-screen bg-[#0c0d0c] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white">
            Create an account
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Register to get started
          </p>
        </div>

        {/* Register Form */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>

            <input
              {...register('fullName', {required: 'Full Name is required', trim: true, minLength: {value: 2, message: 'Full Name must be at least 2 characters'}, maxLength: {value: 20, message: 'Full Name must be at most 20 characters'} ,pattern: {value: /^[a-zA-Z]+$/, message: 'Full Name must contain only letters'}})}
              id="fullName"
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-[#292b29] bg-[#121412] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition focus:border-[#12d329eb]"
           
            />
             {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Email
            </label>

            <input
            {...register('email', {required: 'Email is required', pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address',
                trim: true,
                lowercase: true,
                required: true
              }})}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[#292b29] bg-[#121412] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition focus:border-[#12d329eb]"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-300"

            >
              Password
            </label>

            <input
            {...register('password', {required: 'Password is required', trim: true, minLength: {value: 8, message: 'Password must be at least 8 characters'}, 
              maxLength: {value: 20, message: 'Password must be at most 20 characters'}, 
              pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
                message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'}})}
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-[#292b29] bg-[#121412] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition focus:border-[#12d329eb]"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#12d329eb] py-3 text-sm font-semibold text-[#0c0d0c] transition hover:bg-[#12d329] active:scale-[0.99]"
          >
            Register
          </button>
        </form>

        {/* Login */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <button
            type="button"
            className="font-medium text-[#12d329eb] hover:underline"
            onClick={() => navigate('/')}
          >
            Login
          </button>
        </p>

      </div>
    </div>
  )
}

export default Register