import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import MoviesDetails from "./pages/MoviesDetails"
import About from "./pages/About"
import ResultsPage from "./pages/ResultsPage"
import SearchResultsContext from "./hooks/SearchResultsContext"
import { useState } from "react"
import { AuthProviderMovie } from "./context/authContextMovie"


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path: "movies/:movieId",
          element: <MoviesDetails/>,
        },
        {
          path: "results",
          element: <ResultsPage/>
        }
      ]
    },
    {
      path: "acerca_de",
      element: <About/>
    }
  ])

  return (
    <AuthProviderMovie>
    <SearchResultsContext.Provider value={{ searchResults, setSearchResults }}>
      <RouterProvider router={router} />
    </SearchResultsContext.Provider>
    </AuthProviderMovie>
    )
}

export default App
