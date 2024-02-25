import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
  return (
    <>
     <Navbar />
     <main className='max-w-7xl mx-auto'>
        <Outlet />
     </main>
     <Footer/>
    </>
  )
}

export default RootPage