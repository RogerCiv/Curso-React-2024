import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/router-dom-ejemplos/Home';
import Products from './components/router-dom-ejemplos/Products';
import RootLayout from './components/router-dom-ejemplos/RootLayout';
import ErrorPage from './components/router-dom-ejemplos/ErrorPage';
import ProductDetails from './components/router-dom-ejemplos/ProductDetails';




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element: (
            <Home />
          ),
        },
        {
          path: "/products",
          element: (
            <Products />
          ),
        },
        {
          path: "/products/:productId",
          element: (
            <ProductDetails />
          ),
        }
      ]
    },
    
  ])

  return <RouterProvider router={router} />
}

export default App
