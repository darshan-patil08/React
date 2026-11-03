import { axiosInstance } from "../../../config/axiosInstance";

export const loginUserApi = async (credentials) => {
    try{
    const res = await axiosInstance.post("/auth/login", credentials);
    console.log("response from login Api", res) ;   

    localStorage.setItem("accessToken", res.data.accessToken);
    return res.data;
    }catch(err){
        console.log("Error in login Api", err);
    }
    
}

export const hydrateUser = async () => {

    let accessToken = localStorage.getItem("accessToken");

  try{
let res = await axiosInstance.get("/auth/me",{
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});
console.log("response from hydrateUser Api", res) ;
return res.data;
  }catch(err){
    console.log("Error in hydrateUser Api", err);
  }
}