import React from 'react'


const Home = () => {
    console.log("Home Component Rendered");
  return (
    <div>
        <h1>Home Component</h1>
    </div>
  )
}


export default React.memo(Home, (prevProps, nextProps) => {
    return prevProps.user.age === nextProps.user.age
})
