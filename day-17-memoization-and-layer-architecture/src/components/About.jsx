import React from 'react'
const About = () => {
    console.log('About component rendered');
  return (
    <div>
        <h1>About Component</h1>
    </div>
  )
}

export default React.memo(About)