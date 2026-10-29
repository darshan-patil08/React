import { useAuth } from "../hooks/authHook";
const Login = () => {

  const { navigate, register, handleSubmit, errors ,handleLogin } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-500">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit( handleLogin ) }  className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              {...register("email",
                 {
                   required: true,
                   pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                   message: "Please enter a valid email address",
                   maxLength: { value: 50, message: "Email must be at most 50 characters long" },
               })}
              type="email"
              autoComplete="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            {errors.email && 
              <span className="text-red-500 text-sm">
                {errors.email.message}
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
                  minLength: { value: 6, message: "Password must be at least 6 characters long" }, maxLength: { value: 12, message: "Password must be at most 12 characters long" }, pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
                  message: "Password must contain at least 6 characters, including uppercase, lowercase, and special characters" 
                })}
              type="password"
              id="password"
              name="password"
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
};

export default Login;