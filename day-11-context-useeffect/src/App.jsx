// import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
 
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [products, setProducts] = useState(null)
  useEffect(()=>{
    console.log("App component rendered")
  },[])

  const fetchData = async()=>{
    const res = await axios.get("https://fakestoreapi.com/products")
    setProducts(res.data)
    console.log(res.data)
  }

  useEffect(()=>{
    fetchData()
  },[])
 
  return (

    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      Counter: {count}
      <button onClick={()=>setCount(count+1)} className="bg-blue-500 px-4 py-2 rounded-md mt-4">Increment</button>
      <button onClick={()=>setCount(count-1)} className="bg-red-500 px-4 py-2 rounded-md mt-4">Decrement</button>

     <button onClick={()=>setToggle(prev=>!prev)} className="bg-green-500 px-4 py-2 rounded-md mt-4">Toggle</button>

      {toggle? <About /> : <Contact />}

    </div>
  )
}

export default App
