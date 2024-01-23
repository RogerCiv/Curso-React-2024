import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams();
  return (
    <>
    <div>Estoy en product details</div>
    <p>Producto: {params.productId}</p>
  
    <Link to="/">Volver a home</Link>
    </>
  )
}

export default ProductDetails