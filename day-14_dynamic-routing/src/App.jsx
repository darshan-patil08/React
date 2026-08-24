import AppRouter from './routes/AppRouter'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <div>
      <NavBar/>
      
      <AppRouter/>
    </div>
  )
}

export default App