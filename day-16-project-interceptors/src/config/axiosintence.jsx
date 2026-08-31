import axios from "axios";

export const API = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
});

API.interceptors.response.use(
    (response)=> {
        console.log('Response Interceptor:', response);
        return response;
    },
    (error)=> {
        console.log('Error Interceptor:', error);
        return Promise.reject(error)
    }
)
