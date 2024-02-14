import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
// import EditProductPage from "./pages/EditProductPage2.jsx"
import Payment from "./pages/Payment"
import ErrorPage from "./pages/ErrorPage"

import ProtectedRoute from "./utils/ProtectedRoute"
import RootPage from "./pages/RootPage"
import { AuthProvider } from "./context/authContextProduct"
import EdtiProductPage from "./pages/EditProductPage"


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          element: <ProtectedRoute redirectPath="/login"/>,
          children:[
            {
              index: true,
              element: <Home/>
            },
            {
              path: "/productos/:idProduct",
              element: <EdtiProductPage/>
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
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  )
}

export default App
