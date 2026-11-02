import {RouterProvider, createBrowserRouter} from 'react-router'
import PublicProtected from './protected/PublicProtected'
import AuthLayout from '../app/layout/AuthLayout'
import LoginPage from '../features/auth/ui/pages/LoginPage'
import RegisterPage from '../features/auth/ui/pages/RegisterPage'
import MainProtected from './protected/MainProtected'
import MainLayout from '../app/layout/MainLayout'
import HomePage from '../shared/ui/pages/HomePage'
import CartPage from '../features/cart/ui/pages/CartPage'
import ProductPage from '../features/products/ui/pages/ProductPage'
import OrderPage from '../features/orders/ui/pages/OrderPage'

const AppRouter = () => {
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