import { useState } from "react";

const FormCard = () => {

const [FormData, setFormData] = useState({});

let handleChange = (e)=>{
  const { name, value } = e.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: value
  }));
};


  console.log(FormData)
  return (
    <div className="flex p-5 flex-col gap-4">
        <input name="name" onChange={handleChange} className="border text-white border-gray-300 p-2 rounded-md" type="text" placeholder="Enter Your Name" />
        <input name="email" onChange={handleChange} className="border text-white border-gray-300 p-2 rounded-md" type="email" placeholder="Enter Your Email" />
        <input name="password" onChange={handleChange} className="border text-white border-gray-300 p-2 rounded-md" type="password" placeholder="Enter Your Password" />
        <button className="bg-blue-500 text-black p-2 rounded-md" type="submit">Submit</button>
          
        <h1 className="text-2xl font-bold text-white">this is the value of name text box - {FormData.name}</h1>
        <h1 className="text-2xl font-bold text-white">this is the value of email text box - {FormData.email}</h1>
        <h1 className="text-2xl font-bold text-white">this is the value of password text box - {FormData.password}</h1>
    </div>

  )
};

export default FormCard
