import { createBrowserRouter } from "react-router-dom"
import RootPageLayout from "./pages/RootPageLayout"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ContextProvider from "./components/context/ContextProvider"
import { RouterProvider } from "react-router-dom"
import PrecioLuz from "./pages/PrecioLuz"
function App() {

 const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPageLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'precioluz',
        element: <PrecioLuz/>
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
