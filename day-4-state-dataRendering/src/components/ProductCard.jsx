
const ProductCard = ({product,del}) => {
  return (
    <div className='p-4 h-fit w-[30%] flex flex-col gap-3 border-3 rounded border-white border-solid  '>
      <div className='w-20 h-fit flex justify-center items-center'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='flex flex-col gap-1'>
        <h5 className='text-wrap text-xl text-red-500 font-bold'>{product.title.substring(0,10)}</h5>
        <p className='text-white text-sm'>{product.category}</p>
        <p className=' text-green-600 font-bold'>${product.price.toFixed(2)}</p>
      </div>
      <button onClick={
        ()=>{
          del(product.id)
        }
      } className=' bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
    </div>
  )
}

export default ProductCard
