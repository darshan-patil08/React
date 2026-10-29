import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import { useState } from "react";
import {toast} from "@/components/ui/toast"
export const useAuth = () => {

    const [registerdUser, setRegisterdUser] = useState(JSON.parse(localStorage.getItem("registerdUser")) || []);

    const navigate = useNavigate();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
     const handleLogin = (data) => {
        let user = registerdUser.find((item) => item.email === data.email && item.password === data.password); 
        if(!user){
            toast.error("Invalid email or password");
            return;
        }
        reset();
     }
    const handleRegister = (data) => {
        let arr = [...registerdUser, data];
        setRegisterdUser(arr);
        localStorage.setItem("registerdUser", JSON.stringify(arr));
        reset();
    }
    return { navigate, register, handleSubmit, reset, errors, handleLogin, handleRegister };

 
}

  