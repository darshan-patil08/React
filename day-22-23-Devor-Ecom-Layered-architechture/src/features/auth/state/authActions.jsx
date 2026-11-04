import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axiosInstance";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try{
    const res = await axiosInstance.post("/auth/login", credentials);
        localStorage.setItem("accessToken", res.data.accessToken);
    return res.data;
    }catch(err){
       return thunkApi.rejectWithValue(" Login Failed", err.message);
    }}
);
