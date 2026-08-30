import { createBrowserRouter, RouterProvider } from "react-router";
// import MainLayout from '../layouts/MainLayout';
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import MainLayout from "../layouts/MainLayout";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import UserPage from "../pages/UserPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "Products",
              element: <ProductsPage />,
            },
            {
              path: "Users",
              element: <UserPage />,
            }
          ]
        },

      
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
