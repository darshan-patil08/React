const UserCard = ({ idx, deletedUser,setUpdateUser,  setToggle, user }) => {
  const { name, email, phone, image } = {
    name: user.name,
    email: user.email,
    phone: user.phone,
    image: user.image,
  }

  

  return (
    <aside className="w-72 rounded-3xl border  border-gray-200 bg-white p-5 shadow-xl shadow-indigo-100/70">
      <div  className="flex flex-col  items-center">
        <img
          src={image}
          alt={name}
          className="h-28 w-28 rounded-full object-cover ring-4 ring-indigo-100"
        />

        <h3 className="mt-4 text-2xl font-bold text-gray-800">{name}</h3>
        <p className="mt-2 text-base font-semibold text-gray-700">{email}</p>
        <p className="mt-1 text-base font-medium text-gray-600">{phone}</p>

        <div className="flex justify-between gap-2">
          <button className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-md"
           onClick={() =>{
            setToggle(prev => !prev)
            setUpdateUser(user)
            
          }}>Update</button>

          <button className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md" 
          onClick={() =>{
            deletedUser(idx)
          }}>Delete</button>

        </div>
      </div>
    </aside>
  )
}

export default UserCard
