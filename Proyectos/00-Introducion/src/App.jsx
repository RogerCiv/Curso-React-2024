// IMPORTS
import { useEffect, useState } from 'react'
import './App.css'
import CardMovies from './components/UseEffect/CardMovies'
import Buscador from './components/UseState/Buscador'

// import Contador from './components/UseState/Contador'
// import ContadorDoble from './components/UseState/ContadorDoble'
// import ContadorDobleBest from './components/UseState/ContadorDobleBest'
// import DarkLightMode from './components/UseState/DarkLightMode'
// import Form from './components/UseState/RegistrarFormulario'
// import Prueba from './components/UseState/Prueba'
import RegistrarFormulario from './components/UseState/RegistrarFormulario'
import ToDoList from './components/UseState/ToDoList'

//Declaración de variables globales



const App = () => {
  const [searchResults, setSearchResults] = useState([])

  async function searchMovies(query){
    try{
      const resp = await fetch (`https://www.omdbapi.com/?apikey=10b3bd48&s=${query}`)
      const data = await resp.json()
      console.log(data);
      setSearchResults(data.Search)

    }catch(err){
      console.log("Error al buscar películas: ",err.message);
    }
  }


 return (

   <>
    {/* <ToDoList /> */}
    <Buscador onSearch={searchMovies} />
    <main className=' mx-auto max-w-screen-lg grid grid-cols-2 items-center justify-center  gap-2'>
      {
        searchResults.map(movie => (
          <CardMovies key={movie.imdbID} movie={movie} />
        ))
      }
    </main>
  </>
 )
}

export default App




