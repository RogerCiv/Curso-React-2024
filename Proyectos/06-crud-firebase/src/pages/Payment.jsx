import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'

const Payment = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { state } = location
  const totalStock = state?state.stockTotal:0
  const IVA = 1.21
  const precioBase = 3.75
  const totalPagar = totalStock * IVA * precioBase
  const handleClickBack = () => {
    navigate(-1)
  }
  const handleClickPay = () => {
    console.log(object);
    Swal.fire({
      icon: 'success',
      title: `El total a pagar es : ${totalPagar.toFixed(2)}€`,
      showConfirmButton: true,
    })

  }

  return (
    <>
      <Header/>
    <div className='flex flex-col justify-center items-center'>
      <div className='bg-white p-4 rounded shadow-xl max-w-md w-full'>
          <h2 className='text2xl font-bold text-balance mb-4'>Resumen del pago</h2>
          <div className='mb-4'>
            <span>Total del Stock: </span>
            <span>{totalStock}</span>
          </div>
          <div className='mb-4'>
            <span>Total a pagar: </span><span>€{totalPagar.toFixed(2)}</span>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <button className='bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded' onClick={handleClickPay} type='button'>Pagar</button>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClickBack} type='button'>Volver</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default Payment