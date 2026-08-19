import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

const Form = ({ user, setUser, setToggle, updateUser }) => {
 const { register, handleSubmit,reset, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues: updateUser,
 })
 
 
 const onSubmit = (data) => {

if(updateUser){
 setUser(prev => prev.map(item => item.id === updateUser.id ? {...data} : item))
  localStorage.setItem('user', JSON.stringify(user.map(item => item.id === updateUser.id ? {...data} : item)))

}else{
  let arr = [...user, {...data, id: nanoid()}]
    setUser(arr)
   localStorage.setItem('user', JSON.stringify(arr))
}

  
    reset()
    setToggle(prev => !prev)
  }

  const inputClass =
    'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'

  return (
    <div className="flex min-h-[75vh] items-center justify-center px-4 py-10">
      <form className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-indigo-100/50" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Add New User</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input id="name" type="text"
            {...register('name', { required: 'Name is required', 
            minLength:{ 
                value: 8, 
                message: 'Minimum 8 characters required' 
                },
                pattern: {
                    value: /^\S*$/,
                    message: 'Name can only contain letters' 
                }
})} 
                placeholder="Enter your name" 
                className={inputClass} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message || 'Minimum 8 characters required'}</p>}
            
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
              Phone No
            </label>
            <input id="phone" type="tel" {...register('phone', { 
                required: 'Phone number is required', 
                minLength:{ value: 10, message: 'Minimum 10 digits required' }, 
                maxLength:{ value: 10, message: 'Maximum 10 digits required' } 
                })}
                 placeholder="Enter phone number" 
                 className={inputClass} />
            { 
            errors.phone && <p className="text-red-500 text-sm">{errors.phone.message || 'Maximum 10 digits required'}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input id="email" type="email" {...register('email', { required: 'Email is required', 
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
            message: 'Invalid email format' } })} 
            placeholder="Enter your email" 
            className={inputClass} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message || 'Invalid email format'}</p>}
          </div>

          <div>
            <label htmlFor="image" className="mb-2 block text-sm font-semibold text-gray-700">
              Image URL
            </label>
            <input
              id="image"
              type="url"
              {...register('image', { required: 'Image URL is required', 
              pattern: { value: /^https?:\/\//, message: 'Invalid URL format' } })}
              className={inputClass}
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image.message || 'Invalid URL format'}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
