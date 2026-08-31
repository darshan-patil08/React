import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { API } from "../config/axiosintence"

const ProductsPage = () => {


  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    try {
      const response = await API.get('/products')
      setProducts(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getProducts();
  }, [])

  if(loading){
    return (
        <div className='flex justify-center items-center h-screen'>
          <h1 className='text-2xl font-bold'>Loading...</h1>
        </div>
    )
  }

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductsPage