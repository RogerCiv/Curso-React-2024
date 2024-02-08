import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ isActive, redirectPath }) => {
  if (!isActive) {
    return <Navigate to={redirectPath} />
  }
  return <Outlet />
}

export default ProtectedRoute