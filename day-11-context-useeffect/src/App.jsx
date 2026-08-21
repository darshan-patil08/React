// import Home from './components/Home'
// import About from './components/About'
import Contact from './components/Contact'
import { useState, useEffect } from 'react'
const App = () => {
 
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("App component rendered")
  },[])


  return (

    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      Counter: {count}
      <button onClick={()=>setCount(count+1)} className="bg-blue-500 px-4 py-2 rounded-md mt-4">Increment</button>
      <button onClick={()=>setCount(count-1)} className="bg-red-500 px-4 py-2 rounded-md mt-4">Decrement</button>
      {/* <Home />
      <About /> */}
      <Contact />
    </div>
  )
}

export default App
