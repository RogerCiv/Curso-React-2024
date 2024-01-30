import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import MoviesDetailsPage from './pages/MoviesDetailsPage'
import { RouterProvider } from 'react-router-dom'
import About from './pages/About'


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage/>,
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path: "movies/:movieId",
          element: <MoviesDetailsPage/>,
        },
      ]
    },
    {
      path: "acerca_de",
      element: <About/>
    }
  ])
  return <RouterProvider router={router} />
}

export default App
