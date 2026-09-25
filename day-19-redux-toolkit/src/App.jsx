import { useSelector , useDispatch } from 'react-redux';
import { decrement, increment, reset } from './features/counterSlice';

const App = () => {

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>  
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App