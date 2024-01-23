import React from 'react'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
    <div>Nav</div>
      <Outlet />
      <div>Footer</div>
    </>
  )
}

export default RootLayout