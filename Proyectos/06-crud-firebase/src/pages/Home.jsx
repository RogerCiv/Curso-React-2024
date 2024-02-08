import React from 'react'
import AddProductForm from '../components/AddProductForm'
import ShowProductTable from '../components/ShowProductTable'
import { useState } from 'react'
import Header from '../components/Header'

const Home = () => {
  const [add , setAdd ] = useState(false)
  return (
    <>
    <Header/>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold my-8 text-balance'> Crud de productos con firebase</h1>
        <div>

          <AddProductForm setAdd={setAdd} />
          <ShowProductTable add={add} />
        </div>
      </div>
    </>
  )
}

export default Home