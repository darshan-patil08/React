import { useCallback, useMemo, useState } from "react"
import About from "./components/About"
import Home from "./components/Home"

const App = () => {
console.log("App Component Rendered");
    const [count, setCount] = useState(0)

    const calculation = useMemo(() => {
      console.log("Calculation function called");

      let sum = 0;
      for (let i = 0; i < 1000000000; i++) {
        sum += i;
      }
      return sum;
    }, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const greet = useCallback(()=>(`Hello, ${user.name}!`), [])
    const [user, setUser] = useState({name: 'John Doe', age: 30})

  return (
    <div>
      <h1>App Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <p>User: {user.name}, {user.age}</p>
      <button onClick={() => setUser({...user, name: 'Jane Doe'})}>Change User</button>

      <h1>Calculation Result: {calculation}</h1>
      <Home user={user} greet={greet} />
      <About/>
    </div>
  )
}

export default App