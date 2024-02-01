import React from 'react'
import { useParams } from 'react-router-dom'
import { useDataApi } from '../hooks/useDataApi'
import { useContext } from 'react'
import { ComponentContext } from './useContext/context/ComponentContext'


const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useDataApi(`https://fakestoreapi.com/products/${id}`);
  const { cart, setCart } = useContext(ComponentContext);

  if (loading) return <h1>Loading...</h1>

  const { title, price, description, category, image } = data
  
  const handleAddCart = () => {
    if (!cart.find(item => item.id === id)) {
      setCart([...cart, data]);  
    } else {
      alert('El producto ya se encuentra en el carrito');
    }
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center '>
        <h1>Detalles del producto : {id}</h1>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">

          <img className="rounded-t-lg w-1/2" src={image} alt="" />

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}.</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span className='font-bold'>Precio: </span>${price}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'> Categoría: </span>{category}</p>
            <div className='flex gap-2'>

              <button onClick={handleAddCart} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Agregar Carrito
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button >

            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default ProductDetails