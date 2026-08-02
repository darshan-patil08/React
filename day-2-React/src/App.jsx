import React from 'react'
import About from './About.jsx'
const App = () => {

let div = React.createElement('div',{},[
  React.createElement('h1',null,'Hello, React!'),
  React.createElement('h2',null,'This is a 2 heading inside the React div.'),
  React.createElement('h3',null,'This is a 3 heading inside the React div.'),
]);

  return (
    <div>
      {div}
      <About name="darshan" age={25} isAdmin={true} hobbies={['reading', 'swimming']} onDelete={() => console.log('Delete clicked')}>
        <h4>this is tag under about component</h4>
      </About>
    </div>
  )
}

export default App