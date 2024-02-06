import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { deleteProduct, getProducts } from '../firebase/productosApi'

const ShowProductTable = ({add}) => {
  const [loading, setLoading] = useState(true)

  const [products, setProducts] = useState([])

  const fechDataProducts = async () => {
    try{
      const data = await getProducts()
      setProducts(data)
    }catch(err){
      console.log("Error al cargar los productos",err);
    }finally{
      setLoading(false)
    }
  }
  const handleDeleteProduct = async (id) => {
    console.log(id)
    try{
      await deleteProduct(id)
      setProducts(products.filter(product => product.id !== id))
    }catch(err){

    }
  }

  useEffect(() => {
    fechDataProducts()
  },[setProducts,add])
  return (
    <div>
      <h2>Lista de productos</h2>
      {
        loading ? <p>Cargando...</p> : (
          <>
            <table className="w-[100px]    bg-white border" >
              <thead className=' w-[900px] bg-gray-500 text-white'>
                <tr>
                  <th className='py-2 px-4 border-b'>ID</th>
                  <th className='py-2 px-4 border-b'>Nombre</th>
                  <th className='py-2 px-4 border-b'>Stock</th>
                  <th className='py-2 px-4 border-b'>Descripcion</th>
                  <th className='py-2 px-4 border-b'>URL</th>
                  <th className='py-2 px-4 border-b'>Acciones</th>
                </tr>
              </thead>
              <tbody>
               {
                  products.map((product) => (
                    <tr key={product.id}>
                      <td className='py-2 px-4 border-b'>{product.id}</td>
                      <td className='py-2 px-4 border-b'>{product.name}</td>
                      <td className='py-2 px-4 border-b'>{product.stock}</td>
                      <td className='py-2 px-4 border-b'>{product.description}</td>
                      <td className='py-2 px-4 border-b'>{product.url}</td>
                      <td className='py-2 px-4 border-b'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Editar</button>
                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                      </td>
                    </tr>
                  ))
               }
           
              </tbody>
            </table>

          </>
        )
      }
    </div>
  )
}

export default ShowProductTable