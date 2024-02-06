import React from 'react'
import { useState } from 'react'
import { addProduct } from '../firebase/productosApi'
import Swal from 'sweetalert2'

const AddProductForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [stock, setStock] = useState(0)
    const [url, setUrl] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
           const newProduct = await addProduct({
               name,
               description,
               stock,
               url
           })
           console.log("Producto anadido con id:", newProduct);

           // ventana indicando si todo ok
           Swal.fire({
            icon: 'success',
            title: 'Producto añadido',
            text: "Datos del producto insertados correctamente",
            showConfirmButton: false,
            timer: 1500
           })

           setName('')
           setDescription('')
           setStock(0)
           setUrl('')
        }catch(err){
            console.error("Error al anadir el producto", err)
        }
    }

  return (
<div className='max-w-xl mx-auto'>

<form onSubmit={handleSubmit} className="w-96 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  hover:shadow-black">
    <h2 className='font-3xl font-semibold mb-4 text-balance text-center'>Añadir nuevo Producto</h2>
  <div className="mb-5">
    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del producto" required value={name} onChange={(e) => setName(e.target.value)}/>
  </div>
  <div className="mb-5">
    <input type="number" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='Stock' value={stock} onChange={(e) => setStock(e.target.value)}/>
  </div>

  <div className="mb-5">
    <input type="text" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='Url imagen producto' value={url} onChange={(e) => setUrl(e.target.value)}/>
  </div>
  <div className="mb-5">
    <textarea type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='Descripción producto' value={description} onChange={(e) => setDescription(e.target.value)}/>
  </div>
 
 <div className='flex items-center justify-end'>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>

 </div>
</form>

</div>
  )
}

export default AddProductForm