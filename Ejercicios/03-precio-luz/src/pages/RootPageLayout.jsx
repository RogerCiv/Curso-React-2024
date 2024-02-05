import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'

const RootPageLayout = () => {
  return (
   <>
   <Header/>
   <main>
    <Outlet/>
   </main>
   </>
  )
}

export default RootPageLayout