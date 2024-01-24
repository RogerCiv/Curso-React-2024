import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// import Home from './components/router-dom-ejemplos/Home';
// import Products from './components/router-dom-ejemplos/Products';
// import RootLayout from './components/router-dom-ejemplos/RootLayout';
// import ErrorPage from './components/router-dom-ejemplos/ErrorPage';
// import ProductDetails from './components/router-dom-ejemplos/ProductDetails';




// function App() {

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       errorElement: <ErrorPage />,
//       children:[
//         {
//           path: "/",
//           element: (
//             <Home />
//           ),
//         },
//         {
//           path: "/products",
//           element: (
//             <Products />
//           ),
//         },
//         {
//           path: "/products/:productId",
//           element: (
//             <ProductDetails />
//           ),
//         }
//       ]
//     },
    
//   ])

//   return <RouterProvider router={router} />
// }

// export default App

import React from 'react'
import RootLayout from './components/router-dom/RootLayout';
import Home from './components/Home';
import Movie from './components/Movie';
import MovieInfo from './components/MovieInfo';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children:[
        {
          path: "",
          element: <Home/>
        },
        {
          path: "searchMovies",
          element: <Movie/>
        },
        {
          path: "movies",
          
          children: [
            {
              path: ":movieId",
              element: <MovieInfo />
            }
          ]
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
