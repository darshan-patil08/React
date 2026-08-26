
import { createBrowserRouter, RouterProvider } from 'react-router';
// import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../components/Login';
import Register from '../components/Register';


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
    ])

  return <RouterProvider router={router} />;
}

export default AppRouter