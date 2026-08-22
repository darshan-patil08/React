import { useEffect } from 'react'

const About = () => {
 

  let interval = setInterval(()=>{
    console.log("About component interval")
  },1000)

  useEffect(()=>{
    console.log("About component mounted")
    return () => {
      clearInterval(interval)
    }
  },[])
  return (
    <div>
        <h1>About Us</h1>
    </div>
  )
}

export default About
