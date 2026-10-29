import {createBrowserRouter, RouterProvider} from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import Registration from "../pages/Registration";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import { useEffect } from "react";
import PublicProtected from "./Protected/PublicProtected";
import MainProtected from "./Protected/MainProtected";
const AppRoutes = () => {
    const dispatch = useDispatch();
const hydrateUser = () =>{   
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
 
    if(!loggedInUser){
        toast.error("YOU ARE UNAUTHORIZED TO ACCESS THIS PAGE. PLEASE LOGIN FIRST.");
        return null;
    }
    dispatch(addUser(loggedInUser));
}   
   

useEffect(() => {
    hydrateUser();
    }, []);   

  const router = createBrowserRouter([
    
    {
        path: '/',
        element : <PublicProtected/>,
        children : [{
            path: '',
            element: <AuthLayout />,
             children: [
            {
                path: '',
                element : <LoginPage/>
            },
            {
                path : '/register',
                element : <Registration/>
            }
        ]
    }
    ]
    },
    {
        path: '/main',
        element : <MainProtected/>,
        children : [{
            path : '',
            element : <MainLayout/>,
            children : [{
                path : '',
                element : <HomePage/>
            }]
        }]
    }
  ]);


  return <RouterProvider router={router}/>
}

export default AppRoutes