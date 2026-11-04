import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUserAction } from '../state/authActions';

export  const useAuth = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
         const registerForm = (data) => {
            console.log("Login data", data)
         }
        const loginForm = async(data) => {
           try{
           dispatch(loginUserAction(data));
           toast.success("Login Successful");
            navigate("/main");
            reset();
            return data;
           }catch(err){           
             console.log("Error in loginForm", err.message);
             toast.error(err.response?.data?.message ?? err.message);
           }
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