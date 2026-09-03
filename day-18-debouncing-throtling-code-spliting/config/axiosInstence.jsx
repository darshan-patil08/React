import axios from 'axios'

 const API = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 10000
});

API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log('Error Interceptor:', error);
        return Promise.reject(error);
    }
);
export default API