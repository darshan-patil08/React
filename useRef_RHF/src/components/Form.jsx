import {useState, useRef } from "react"
const Form = () => {

  const formRef = useRef({})  
const [products, setProducts] = useState({})
console.log("app rendering.......")
  const handleSubmit = (e) => {
    e.preventDefault()
  console.log(formRef.current.productName.value);
   console.log(formRef.current.productPrice.value);
    console.log(formRef.current.category.value);
     console.log(formRef.current.image.value);
     
      let object = {
    productName: formRef.current.productName.value,
    productPrice: formRef.current.productPrice.value,
    category: formRef.current.category.value,
    image: formRef.current.image.value
  }
  setProducts(object)
  }
  

 
  return (
    <div className="">
       
       <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4 w-[400px] bg-gray-800 p-8 rounded-md" >
        <h1 className="text-white text-2xl font-bold">Add Product</h1>
      <input ref={(e) => formRef.current.productName = e} className="border text-white border-gray-300 p-2 rounded-md"  type="text" placeholder="Product Name" />
      <input ref={(e) => formRef.current.productPrice = e} className="border text-white border-gray-300 p-2 rounded-md"  type="text" placeholder="Product Price" />
      <span className="text-white">Select Category:</span>
      <select ref={(e) => formRef.current.category = e} className="bg-gray-800 border border-white border-solid text-white p-2 rounded-md">
        <option  value="MENS">MENS</option>
        <option value="WOMEN">WOMEN</option>
        <option value="KIDS">KIDS</option>
      </select>
      <input ref={(e) => formRef.current.image = e} className="border text-white border-gray-300 p-2 rounded-md"  type="text" placeholder="image" />
      <button type="submit" className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md">Submit</button>
      </form>

      <h1>{products.productName}</h1>
      <h1>{products.productPrice}</h1>
      <h1>{products.category}</h1>
      <h1>{products.image}</h1>
    </div>
  )
}

export default Form
