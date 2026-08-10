
import Register from './components/Register.jsx'
import { useState } from 'react'
import UserCard from './components/UserCard.jsx'
const App = () => {
 const [users, setUsers] = useState([])


  // const [toggle, setToggle] = useState(false)

  return (
    <div className="bg-black h-screen p-4 flex flex-col gap-4 ">
    
       <Register users={users} setUsers={setUsers}  />
      <div className="flex flex-wrap gap-4">
          {users.map(user => (
            
        <UserCard className=""  key={user.id} user={user} />
       ))}
 </div>
    </div>
  )
}

export default App
