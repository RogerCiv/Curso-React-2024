import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import RootPageLayout from "./pages/RootPageLayout"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import ProtectedRoute from "./utils/ProtectedRoute"
import ProductDetails from "./components/ProductDetails"
import ComponentProvider from "./components/useContext/context/ComponentProvider"
import { useContext } from "react"
import { ComponentContext } from "./components/useContext/context/ComponentContext"


function App() {
  const { isActive } = useContext(ComponentContext)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPageLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          element: <ProtectedRoute isActive={isActive} redirectPath="/login"/>,
          children: [
            {
              index: true,
              element: <Home/>
            },
            {
              path: "cart",
              element: <Cart/>
            },
            {
              path: "/product/:id",
              element: <ProductDetails/>
            }
          ]
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "register",
          element: <Register/>
        },
  
      ]
    }
  ])

  return (
    <ComponentProvider>
      <RouterProvider router={router} />
    </ComponentProvider>
  )
}

export default App
