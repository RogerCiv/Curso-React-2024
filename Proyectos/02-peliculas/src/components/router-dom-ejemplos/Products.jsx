import React from 'react'
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'

function Products() {
  return (
    <>
    <div>Products</div>
    <ul>
        <li> <Link to={"/products/1"}>Producto 1</Link></li>
        <li><Link to={"/products/2"}>Producto 2</Link></li>
        <li><Link to={"/products/3"}>Producto 3</Link></li>
    </ul>
    <Link className='text-blue-500 py-2 bg-red-500' to="/">Volver a home</Link>
    </>
  )
}

export default Products