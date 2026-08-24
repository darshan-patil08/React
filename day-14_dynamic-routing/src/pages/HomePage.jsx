import axios from 'axios'
import { useContext, useEffect } from 'react'
import { MyContext } from '../context/MyContext.jsx'
import ProductCard from '../components/ProductCard.jsx'


const HomePage = () => {
  const { productsData, setProductsData } = useContext(MyContext)
let getProducts = async () => {
    try{
        let response = await axios.get('https://fakestoreapi.com/products')
        setProductsData(response.data)
      
    }catch(error){
        console.log(error)
    }
  
}
  useEffect(() => {
        getProducts()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

       
  return (
    <div className='flex flex-wrap gap-6 justify-start p-4'>
            {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default HomePage