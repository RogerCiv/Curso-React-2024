import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ComponentContext } from './useContext/context/ComponentContext'

const ProductCard = ({product, removeFromCart}) => {
  const { id, title, price, description, category, image } = product
  const navigate = useNavigate()
  const { cart, setCart } = useContext(ComponentContext)

  const isInCart = cart.find(product => product.id === id)

  const handleClick = (id) => {
    navigate(`product/${id}`)
  
  }

  const handleAddCart = () => {
    if (!cart.find(item => item.id === id)) {
      setCart([...cart, product]); 
      //console.log(cart);
    } else {
      alert('El producto ya se encuentra en el carrito');
    }
  }
  return (
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
          {
            isInCart ? (
              <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800" onClick={() => removeFromCart(id)} >
          Eliminar Carrito
        </button>
            ) : (
              <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleAddCart}>
          Agregar Carrito
        </button>
            )
          }
        {/* <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleAddCart}>
          Agregar Carrito
        </button> */}
        <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg--700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800' onClick={()=> handleClick(id)}>Detalles Producto</button>
        </div>
      </div>
    </div>

  )
}

export default ProductCard