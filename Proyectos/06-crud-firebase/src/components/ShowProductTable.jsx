import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { deleteProduct, getProducts } from '../firebase/productosApi'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const ShowProductTable = ({ add }) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [stockTotal, setStockTotal] = useState(0)
  const [orden, setOrden] = useState("asc")
  const navigate = useNavigate()


  // const getTotalStock = (products) => {
  // return products.reduce((acc, product) => acc += parseInt(product.stock), 0)
  // }

  const handleClickPayment = () => {
    // const totalStock = getTotalStock(products);
    navigate('/payment', { state: { stockTotal} });
  }

const handleClickSort = () => {
  if (orden === "asc") {
    setProducts([...products].sort((a, b) => a.stock - b.stock));
    setOrden("desc");
  } else {
    setProducts([...products].sort((a, b) => b.stock - a.stock));
    setOrden("asc");
  }
}
  const fechDataProducts = async () => {
    try {
      const data = await getProducts()
      setProducts(data)
      setStockTotal(data.reduce((acc, product) => acc += parseInt(product.stock), 0))
    } catch (err) {
      console.log("Error al cargar los productos", err);
    } finally {
      setLoading(false)
    }
  }
  const handleDeleteProduct = async (id) => {
    try {
      const response = await Swal.fire({
        icon: 'warning',
        title: '¿Estas seguro?',
        text: 'No podras revertir esto',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar',
        cancelButtonText: 'Cancelar',
      })
      if (response.isConfirmed) {
        await deleteProduct(id)
        setProducts(products.filter(product => product.id !== id))
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal',
      })
    }
  }

  // update product redirect to EditProductpage

  const handleUpdateProduct = (id) => {
    //console.log(id)
    navigate(`/productos/${id}`)
  }
  // useEffect para cargar los productos siempre que se haga un setProductos y 
  useEffect(() => {
    fechDataProducts()
  }, [setProducts, add])


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
                  <th className='py-2 px-4 border-b' > <button onClick={handleClickSort}>Stock</button></th>
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
                      <td className='py-2 px-4 border-b'><img src={product.url} alt={`imagen del producto ${product.name}`} /></td>
                      <td className='py-2 px-4 border-b'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2' onClick={() => handleUpdateProduct(product.id)}>Editar</button>
                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
            <div className='bg-gray-400 p-4 mt-4 flex justify-between items-center'>
              <span className='text-lg font-semibold'>Total Stock:</span>
              <span className='text-lg'>{stockTotal}</span>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={handleClickPayment}>Pagar</button>
            </div>

          </>
        )
      }
    </div>
  )
}

export default ShowProductTable