import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootPageLayout = () => {
  return (
    <>
      <Header/>
      <main className='mx-auto max-w-6xl'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default RootPageLayout