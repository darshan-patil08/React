import {RouterProvider, createBrowserRouter} from 'react-router'
import PublicProtected from './protected/PublicProtected'
import AuthLayout from '../app/layout/AuthLayout'
import LoginPage from '../features/auth/ui/pages/loginPage'
import RegisterPage from '../features/auth/ui/pages/RegisterPage'
import MainProtected from './protected/MainProtected'
import MainLayout from '../app/layout/MainLayout'
import HomePage from '../shared/ui/pages/HomePage'
import CartPage from '../features/cart/ui/pages/CartPage'
import ProductPage from '../features/products/ui/pages/ProductPage'
import OrderPage from '../features/orders/ui/pages/OrderPage'
import { useEffect } from 'react'
import { hydrateUser } from '../features/auth/api/authApi'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/auth/state/authSlice'

const AppRouter = () => {

let dispatch = useDispatch();

// useEffect(() => {
// (async()=>{
//     try{
//         const userData = await hydrateUser();
//         dispatch(addUser(userData));
//         return userData;

//     }catch(err){
//         console.log("Error in AppRouter", err);
//     }
// })()
// }, [])

    const router = createBrowserRouter([
        {
            path: '/',
            element: <PublicProtected />,
            children: [{
                path: '',
                element: <AuthLayout />,
                children: [{
                    path: '',
                    element: <LoginPage/>
                },
                {
                    path: '/register',
                    element: <RegisterPage/>
                }]
            }]
        },
        {
            path: '/main',
            element: <MainProtected />,
            children: [{
                path: '',
                element: <MainLayout />,
                children: [{
                    path: '',
                    element: <HomePage/>

                },
                {
                    path: 'product',
                    element: <ProductPage/>
                },
                {
                    path: 'cart',
                    element: <CartPage/>
                },
                {
                    path: 'orders',
                    element: <OrderPage/>
                },
            
            
            ]
            }]
        }
    ])
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default AppRouter