import {createBrowserRouter, RouterProvider} from 'react-router';
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Services from '../pages/Services.jsx'
import MainLayout from '../layouts/MainLayout.jsx';
// import App from '../App.jsx'
const AppRouter = () => {

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />
      }
    ]
  },

])

  return <RouterProvider router={router} />;
}

export default AppRouter