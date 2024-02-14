import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { updateProduct } from '../firebase/productosApi'
import Swal from 'sweetalert2'


const EditProductForm = ({ product }) => {
  const navigate = useNavigate()
  const [name, setName] = useState(product.name)
  const [url, setUrl] = useState(product.url)
  const [stock, setStock] = useState(product.stock)
  const [description, setDescription] = useState(product.description)


  // const [productData, setProductData] = useState({
  //   name: product.name,
  //   url: product.url,
  //   stock: product.stock,
  //   description: product.description
  // })
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const handleStockChange = (e) => {
    setStock(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target
  //   setProductData({
  //     ...productData,
  //     [name]: value
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
  
    const updatedProduct = {
      name,
      url,
      stock,
      description
    }

    try{
      updateProduct(product.id, updateProduct)
      Swal.fire({
        icon: 'success',
        title: 'Producto editado',
        text: "Datos del producto editadas correctamente",
        showConfirmButton: false,
        timer: 1500
       })
       navigate('/')
      
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <Header />
      <h1 className='text-center font-bold text-3xl my-8'>Editar producto</h1>
      <div>
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <div className="mt-8">
                  <a href={url}  target='_blank' rel="noopener noreferrer" className="text-2xl font-bold text-pink-600"> {name} </a>

                  <p className="mt-2 not-italic">{description}</p>
                  <p><span>Stock:</span>{stock}</p>
                  <img src={url} alt="imagen del producto" />
                </div>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="sr-only" htmlFor="name">Nombre</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Nuevo nombre  del producto"
                      type="text"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="url">URL Producto</label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Nueva url del producto"
                        type="text"
                        id="url"
                        value={url}
                        onChange={handleUrlChange}
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="stock">Stock</label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Nuevo stock del producto"
                        type="number"
                        id="stock"
                        value={stock}
                        onChange={handleStockChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="description">Descripción</label>

                    <textarea
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Nueva descripción del producto"
                      rows="8"
                      id="description"
                      value={description}
                      onChange={handleDescriptionChange}
                    ></textarea>
                  </div>

                  <div className=" flex mt-4 gap-2">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Update
                    </button>

                  </div>
                </form>
                <button className=" mt-6 inline-block w-full rounded-lg bg-pink-500 px-5 py-3 font-medium text-white sm:w-auto" onClick={() => navigate(-1)}>Volver</button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default EditProductForm

