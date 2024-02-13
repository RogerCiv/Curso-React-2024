import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getProductById, getProducts } from '../firebase/productosApi'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const EdtiProductPage = () => {
    const {idProduct } = useParams()
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductById()
                if(productData){
                    setProduct(productData)
                }else{
                    navigate('/')
                }
            } catch (err) {
                console.log("Error al cargar los productos", err);
            }
        }
        fetchProduct()
    }, [])

    if(product === null){
        return <div>Cargando...</div>
    }

  return (
    <div>
        <EditProductForm initialData={product} />
    </div>
  )
}

export default EdtiProductPage