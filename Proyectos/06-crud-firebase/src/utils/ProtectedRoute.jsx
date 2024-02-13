import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useAuthProduct } from '../context/authContextProduct'

const ProtectedRoute = ({  redirectPath }) => {
  const { userFirebase } = useAuthProduct()
  const isActive = !!userFirebase;
  if (!isActive) {
    return <Navigate to={redirectPath} />
  }
  return <Outlet />
}

export default ProtectedRoute