
import { createBrowserRouter, RouterProvider } from 'react-router';
// import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../components/Login';
import Register from '../components/Register';
import MainLayout from '../layouts/MainLayout';
import Home from '../components/Home';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {

    const router = createBrowserRouter([
      {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '',
                element: <Login />
            },
            {
                    path: '/register',
                    element: <Register />
            }
        ]
      },
      {
        path: '/main',
        element: <ProtectedRoute />,
        children: [
            {
                path: '',
                element: <MainLayout />
            },
            {
                path: '/main/home',
                element: <Home />
            },
        ]
      }
    ])

  return <RouterProvider router={router} />;
}

export default AppRouter