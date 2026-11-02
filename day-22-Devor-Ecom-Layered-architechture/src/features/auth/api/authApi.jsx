import { axiosInstance } from "../../../config/axiosInstance";

export const loginUserApi = async ()=>{
    try{
        const res = await axiosInstance.post("/auth/login",credentials)
            console.log("user credentials", res)
        
    }catch(err){
        console.log("Error in loginUserApi", err);
    }
}