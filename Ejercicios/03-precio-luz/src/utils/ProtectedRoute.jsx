import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isActive, redirectPath}) => {

    if(isActive){
      return <Outlet/>
    }else{
      return <Navigate to={redirectPath}/>
    }

}

export default ProtectedRoute