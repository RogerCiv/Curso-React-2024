import { useState } from 'react'
import RootPageLayout from './pages/RootPageLayout'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { RouterProvider } from 'react-router-dom'
import ThemeProvider from './components/useContext/ThemeProvider'

function App() {


  
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPageLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]

    }
  ])
 
  return (
<ThemeProvider>
  <RouterProvider router={router} />
</ThemeProvider>
  )
}

export default App
