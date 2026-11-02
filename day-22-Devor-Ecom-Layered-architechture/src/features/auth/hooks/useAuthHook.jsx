import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router'

export  const useAuth = () => {

    const navigate = useNavigate();

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
         const registerForm = (data) => {
            console.log("Login data", data)
         }
        const loginForm = (data) => {
            console.log("Register data", data)
        }
    return {
        navigate,
        register, 
        handleSubmit,
        reset,
        errors,
        registerForm,
        loginForm
    };
}