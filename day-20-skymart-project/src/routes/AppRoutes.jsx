import {createBrowserRouter, RouterProvider} from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import Registration from "../pages/Registration";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
const AppRoutes = () => {
  const router = createBrowserRouter([
    // Define your routes here
    {
        path: '/',
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
    },
    {
        path: "home",
        element : <MainLayout/>,
        children : [{
            path : '',
            element : <HomePage/>
        }]
    }
  ]);


  return <RouterProvider router={router}/>
}

export default AppRoutes