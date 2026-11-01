    import {RouterProvider, createBrowserRouter} from 'react-router-dom'
const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            
        },
    ])
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default AppRouter