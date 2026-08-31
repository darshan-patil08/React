import { useContext } from "react"
import { Auth } from "../context/AuthContext"
import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

export const useAuth = () => {

  const navigate = useNavigate()

  const {registeredUser, setLoginUser,setRegisteredUser} = useContext(Auth)
    
    const {
      register, 
      handleSubmit,
       reset,
       formState: {errors}
    } = useForm()
     
    // login logic
    const loginFormSubmit = (data) => {
        const user = registeredUser.find(user => user.email === data.email && user.password === data.password);
        if (!user) {
            toast.error('Invalid email or password. Please try again.');
            reset()
            return;
        }
        setLoginUser(user)
        localStorage.setItem('loginUser', JSON.stringify(user))
        toast.success('Login successful! Welcome back.')
        navigate('/main')
        reset()
    }

    // register logic
       const registerFormSubmit = (data) => {
      let arr = [...registeredUser, data]
      setRegisteredUser(arr)
      localStorage.setItem('registeredUser', JSON.stringify(arr))
      navigate('/')
        toast.success('Registration successful! Please login to continue.')
        reset()
    }
    return {register, handleSubmit, reset, errors, loginFormSubmit, navigate, registerFormSubmit, registeredUser, setLoginUser}
}