import { createBrowserRouter, RouterProvider } from 'react-router'
import App from '../App'
import MainLayout from '../layouts/MainLayout'
import { lazy, Suspense } from 'react'
import { userFetchForContact } from '../apis/userFetchForContect'
let AboutPage = lazy(() => import('../pages/AboutPage'))
let ContactPage = lazy(() => import('../pages/ContactPage'))

const AppRouter = () => {


    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <App />
                },
                {
                    path: "/about",
                    element: 
                    <Suspense fallback={<div className="flex justify-center items-center"><p className="text-2xl font-bold">Loading About Page...</p></div>}>
                        <AboutPage />
                    </Suspense>
                },
                {
                    path: "/contact",
                    loader: userFetchForContact,
                    hydrateFallbackElement: <div className="flex justify-center items-center"><p className="text-2xl font-bold">Loading Contact Page...</p></div>,
                    element: 
                    <Suspense fallback={<div className="flex justify-center items-center"><p className="text-2xl font-bold">Loading Contact 
                    Page...</p></div>}>
                        <ContactPage />
                    </Suspense>
                }
            ]
        }
    ])

  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter