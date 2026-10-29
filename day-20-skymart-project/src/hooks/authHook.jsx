import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import { useState } from "react";
import {toast} from "react-toastify"
import {useDispatch} from "react-redux";
import { addUser } from "../features/authSlice";

export const useAuth = () => {

    const [registerdUser, setRegisterdUser] = useState(JSON.parse(localStorage.getItem("registerdUser")) || []);

    const navigate = useNavigate();
    let dispatch = useDispatch();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
     const handleLogin = (data) => {
        let user = registerdUser.find((item) => item.email === data.email && item.password === data.password); 
        if(!user){
            toast.error("Invalid email or password");
            return;
        }
        dispatch(addUser(user));
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        toast.success("Login successful");
        navigate("/home");
        reset();
     }
    const handleRegister = (data) => {
        let arr = [...registerdUser, data];
        setRegisterdUser(arr);
        localStorage.setItem("registerdUser", JSON.stringify(arr));
        toast.success("Registration successful");
        navigate("/");
        reset();
    }
    
    return { navigate, register, handleSubmit, reset, errors, handleLogin, handleRegister };

 
}

  