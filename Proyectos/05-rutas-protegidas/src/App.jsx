import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import ProtectedRoute from './utils/ProtectedRoute'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import RootPageLayout from './pages/RootPageLayout'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPageLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          element: <ProtectedRoute  isActive={false} redirectPath="login"/>,
          children: [
            {
              index: true,
              element: <Home/>
            },
            {
              path: "about",
              element: <About/>
            }
          ]
        },
        {
          path: "login",
          element: <Login/>
        }
      ]
    }
  ])
  

  return <RouterProvider router={router} />
}

export default App
