import { useAuth } from '../hooks/useAuth';

const Login = () => {
    console.log('Login: Rendering Login');


    const {register, handleSubmit, navigate, errors, loginFormSubmit, } = useAuth()
    

  return (
    <div className="min-h-screen bg-[#0c0d0c] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Login to your account to continue
          </p>
        </div>~

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit(loginFormSubmit)}>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[#292b29] bg-[#121412] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition focus:border-[#12d329eb]"
              {...register('email', {required: 'Email is required', pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address',
                trim: true,
                lowercase: true,
                required: true
              }})}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300"
              >
                Password
              </label>

              <button
                type="button"
                className="text-sm text-[#12d329eb] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#292b29] bg-[#121412] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition focus:border-[#12d329eb]"
              {...register('password', {
                required: 'Password is required', 
                minLength: {value: 6, 
                message: 'Password must be at least 6 characters'},
                pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be at least 8 characters long'},
              })}
              
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#12d329eb] py-3 text-sm font-semibold text-[#0c0d0c] transition hover:bg-[#12d329] active:scale-[0.99]"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <button
            type="button"
            className="font-medium text-[#12d329eb] hover:underline"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </p>

      </div>
    </div>
  )
}

export default Login