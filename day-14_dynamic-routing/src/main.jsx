import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyProvider} from './context/MyContext.jsx'
import { BrowserRouter } from 'react-router'
createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <MyProvider>
      <App />
    </MyProvider>
    </BrowserRouter>

)
