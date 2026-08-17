import NavBar from './components/NavBar.jsx'
import Form from './components/Form.jsx'
import UserCard from './components/UserCard.jsx'
import { useState } from 'react'



const App = () => {
  const [toggle, setToggle] = useState(false)
  const [selectedUser, setSelectedUser] = useState([])
  const [user, setUser] = useState([])
  
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <NavBar setToggle={setToggle} />

      {toggle ? (
        <div className="flex min-h-[calc(100vh-72px)] items-start gap-6 justify-start p-6">
          {user.map((item) => <UserCard  setToggle={setToggle} setSelectedUser={setSelectedUser} key={item.name} user={item} />)}
        </div>
      ) : (
        <div className="flex min-h-[calc(100vh-72px)] items-center justify-center p-6">
          <Form user={user} setUser={setUser} setToggle={setToggle} />
        </div>
      )}
    </div>
  )
}

export default App
