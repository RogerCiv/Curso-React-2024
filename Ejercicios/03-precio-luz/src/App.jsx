import { createBrowserRouter } from "react-router-dom"
import RootPageLayout from "./pages/RootPageLayout"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ContextProvider from "./components/context/ContextProvider"
import { RouterProvider } from "react-router-dom"
import PrecioLuz from "./pages/PrecioLuz"
import ProtectedRoute from "./utils/ProtectedRoute"
import { useContext } from "react"

import Context from "./components/context/Context"
import { Navigate } from "react-router-dom"

function App() {
const { isActive } = useContext(Context) 
// console.log(isActive);

 const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPageLayout/>,
    errorElement: <ErrorPage/>,
    children: [
     {
      element: <ProtectedRoute isActive={true} redirectPath="/login"/>,
      children: [
        {
          index:true,
          element: <Navigate to="/precioluz" replace	/>
        },
        {
          path: "/precioluz",
          element: <PrecioLuz/>
        }
      ]
     }
    ]
  },
  {
    path: 'login',
    element: <Login/>,
  }
 ])
  return (
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  )
}

export default App
