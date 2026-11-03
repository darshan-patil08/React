import { useAuth } from '../../../auth/hooks/useAuthHook';

const LoginPage = () => {

  const { navigate, loginForm ,errors,handleSubmit,register} = useAuth();


 return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-500">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit( loginForm ) }  className="space-y-5">
          {/* User Name */}
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              User Name
            </label>

       <input className='w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100' 
       {...register("username",
       { 
         required: true,
         message: "Please enter a valid user name",
         maxLength: { value: 50, message: "User must be at most 50 characters long" },
       })}
       type="text"
        id="username"
        placeholder='Enter Your Username ' />
            {errors.username &&
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            }
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>  

            <input
              {...register("password", 
                { 
                  required: true, 
               
                  message: "Password must contain at least 6 characters, including uppercase, lowercase, and special characters" 
                })}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              autoComplete="current-password"
            />
            {errors.password && 
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            }
          </div>

          {/* Login Button */}
          <button 
            
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button  

            onClick={() =>{ navigate("/register")
              
            }}
            className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage
