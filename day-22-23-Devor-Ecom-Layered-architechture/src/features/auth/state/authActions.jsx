import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axiosInstance";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try{
    const res = await axiosInstance.post("/auth/login", credentials);
        localStorage.setItem("accessToken", res.data.accessToken);
           toast.success("Login Successful");

    return res.data;
    }catch(err){
      toast.error(err.response?.data?.message ?? err.message);
       return thunkApi.rejectWithValue(" Login Failed", err.message);
    }}
);

export const hydrateUser = createAsyncThunk("auth/hydrate",async (_,thunkApi)=>{
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
    toast.error(err.response?.data?.message ?? err.message);
   return thunkApi.rejectWithValue(" Hydrate Failed", err.message);
  }
})