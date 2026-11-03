import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router'
import { loginUserApi } from '../api/authApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../state/authSlice';
import { toast } from 'react-toastify';

export  const useAuth = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
         const registerForm = (data) => {
            console.log("Login data", data)
         }
        const loginForm = async(data) => {
           try{
            let res  = await loginUserApi(data)
            
            dispatch(addUser(res));
            toast.success("Login successful");
            navigate("/main");
            reset();
            return res;
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