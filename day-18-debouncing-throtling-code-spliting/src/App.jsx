/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'
import API from '../config/axiosInstence'
import ProductCard from '../src/components/ProductCard'
const App = () => {

  
  const [searchTerm, setSearchTerm] = useState(null)

  const [ProductsData, setProductsData] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await API.get('/products')
      setProductsData(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

//--------------------------------------------------------------
  //handler for search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  }
//--------------------------------------------------------------



let filteredProducts = ()=>{
   let result = ProductsData.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm)
  });
  setProductsData(result);
}

//--------------------------------------------------------------

//debouncing effect for search input change
useEffect(() => {
  if(!searchTerm)return;

  const debounceTimeout = setTimeout(() => {
    filteredProducts();
  }, 700);

  return () => {
    clearTimeout(debounceTimeout);
  }
}, [searchTerm]);




//get all products from API
  useEffect(() => {
    fetchProducts();
  }, [])


  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold text-center">Debouncing and Throttling</h1>
      <div className="flex justify-center ">
    <input className='border border-gray-300 rounded-md p-2 w-96' type="text" placeholder="Search products..." onChange={handleSearch}  />
  </div>  
<div className="grid grid-cols-3 gap-4 " >
  
      {
        ProductsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
      </div>
    </div>
  )
}

export default App