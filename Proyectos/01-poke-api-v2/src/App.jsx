import { createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import RootPage from "./pages/RootPage"
import ErrorPage from "./pages/ErrorPage"
import { RouterProvider } from "react-router-dom"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        }
      ]
    },
   
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
