import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { addUser } from "../features/authSlice";

// Lazy imports - Layouts
const AuthLayout = lazy(() => import("../layouts/AuthLayout"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));

// Lazy imports - Pages
const LoginPage = lazy(() => import("../pages/LoginPage"));
const Registration = lazy(() => import("../pages/Registration"));
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ShopPage = lazy(() => import("../pages/ShopPage"));

// Normal imports - Protected Routes
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);   

    const withSuspense = (element) => {
        return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
    }
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
                element : withSuspense(<HomePage/>)
            },
            {
                path : 'about',
                element : withSuspense(<AboutPage/>)
            },
            {
                path : 'shop',
                element : withSuspense(<ShopPage/>)
            }

          ]
        }]
    }
  ]);


  return <RouterProvider router={router}/>
}

export default AppRoutes