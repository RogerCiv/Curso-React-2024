import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import EditProductPage from "./pages/EditProductPage"
import Payment from "./pages/Payment"
import ErrorPage from "./pages/ErrorPage"
import ContextProvider from "./components/context/ContextProvider"
import ProtectedRoute from "./utils/ProtectedRoute"
import RootPage from "./pages/RootPage"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          element: <ProtectedRoute isActive={true} redirectPath="/login"/>,
          children:[
            {
              index: true,
              element: <Home/>
            },
            {
              path: "/productos/:idproduct",
              element: <EditProductPage/>
            },
            {
              path: "/payment",
              element: <Payment/>
            }
          ]
        },
        {
          path: "/login",
          element: <Login/>
        }
      ]
    }
  ])

  return (
    // <ContextProvider>
      <RouterProvider router={router} />
    // </ContextProvider>
  )
}

export default App
