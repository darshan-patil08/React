import {useForm} from "react-hook-form"
const RHF = () => {

 
  let {register, handleSubmit ,reset, formState:{errors}} = useForm();
  const formSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <div className="">
       <h1 className="text-black text-2xl font-bold">REACT FORM HOOK</h1>
       <form onSubmit={handleSubmit(formSubmit)} 
       
       action="" className="flex flex-col gap-4 w-[400px] bg-gray-800 p-8 rounded-md" >
        <h1  className="text-white text-2xl font-bold">Add Product</h1>
      <input {...register("productName")}  className="border text-white border-gray-300 p-2 rounded-md"  type="text" placeholder="Product Name" />
      <input {...register("productPrice")}  className="border text-white border-gray-300 p-2 rounded-md"  type="text" placeholder="Product Price" />
      <span className="text-white">Select Category:</span>
      <input {...register("category")} className="border text-white border-gray-300 p-2 rounded-md" type="text" name="category" id="" />
      <input {...register("image")}  className="border text-white border-gray-300 p-2 rounded-md"  type="text" placeholder="image" />
      <button type="submit" className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </div>
  )
}

export default RHF
