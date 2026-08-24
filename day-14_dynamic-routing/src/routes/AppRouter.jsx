import { Routes, Route } from "react-router"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ProductPage from "../pages/ProductPage"
import ProductDetails from "../pages/ProductDetails"
const AppRouter = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
     </Routes>   
    </div>
  )
}

export default AppRouter