import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootPageLayout from './pages/RootPageLayout'
import ErrorPage from './pages/ErrorPage'
import PostViewPage from './pages/PostViewPage'
function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPageLayout/>,
    errorelrElement: <ErrorPage />,
    children: [

      {
        index: true,
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <PostViewPage />
      }
    ]
  }
])
  return <RouterProvider router={router} />
}

export default App
