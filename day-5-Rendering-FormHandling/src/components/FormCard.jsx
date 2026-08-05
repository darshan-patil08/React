import { useState } from "react";

const FormCard = () => {

  const [name, setName] = useState("");
  console.log(name);
  return (
    <div className="flex p-5 flex-col gap-4">
        <input onChange={(e)=>{
          setName(e.target.value);
        }} className="border text-white border-gray-300 p-2 rounded-md" type="text" placeholder="Enter Your Name" />
        <input className="border text-white border-gray-300 p-2 rounded-md" type="email" placeholder="Enter Your Email" />
        <input className="border text-white border-gray-300 p-2 rounded-md" type="password" placeholder="Enter Your Password" />
        <button className="bg-blue-500 text-black p-2 rounded-md" type="submit">Submit</button>
    </div>

  )
}

export default FormCard
