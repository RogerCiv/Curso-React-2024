import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function RootLayout() {
  return (
   <>
    <Header/>
 
    <main className='max-w-[1500px] mx-auto h-full'>
      <Outlet />
    </main>
    <Footer/>
   </>
  )
}

export default RootLayout