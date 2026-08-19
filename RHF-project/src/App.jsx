import NavBar from "./components/NavBar.jsx";
import Form from "./components/Form.jsx";
import UserCard from "./components/UserCard.jsx";
import { useState } from "react";


const App = () => {
  const [toggle, setToggle] = useState(true);
  
  const deletedUser = (idx)=>{
    const updatedUser = user.filter((item, index) => index !== idx);
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
  }

const [updateUser, setUpdateUser] = useState(null)

  const [user, setUser] = useState(() => {
    {
      return JSON.parse(localStorage.getItem("user")) || [];
    }
  });

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <NavBar 
      updateUser={updateUser}
      setToggle={setToggle}
      setUpdateUser={setUpdateUser} />

      {toggle ? (
        <div className="flex flex-wrap min-h-[calc(100vh-72px)] items-start gap-6 justify-start p-6">
          {user.map((item) => (
            <UserCard  
            deletedUser={deletedUser} 
            setUpdateUser={setUpdateUser}
            setToggle={setToggle}
           
            toggle={toggle} key={item.id} user={item} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[calc(100vh-72px)] items-center justify-center p-6">
          <Form 
          user={user} 
          setUser={setUser} 
          setToggle={setToggle} 
          updateUser={updateUser}
          />
          
        </div>
      )}
    </div>
  );
};

export default App;
