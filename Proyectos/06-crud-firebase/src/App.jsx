import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import EditProductPage from "./pages/EditProductPage"
import Payment from "./pages/Payment"
import ErrorPage from "./pages/ErrorPage"
import ContextProvider from "./components/context/ContextProvider"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/productos/:idproduct",
      element: <EditProductPage/>
    },
    {
      path: "/payment",
      element: <Payment/>
    }
  ])

  return (
    // <ContextProvider>
      <RouterProvider router={router} />
    // </ContextProvider>
  )
}

export default App
