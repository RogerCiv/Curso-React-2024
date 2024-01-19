import { useEffect } from 'react'
import { useState } from 'react'
import Nav from './components/Nav'


function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    //Acceso a la api de pokeapi.com
    // creo la función o la importo de un helper
    const fechData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        if (!response.ok) throw new Error("Error Al hacer fetch")
        const data = await response.json()
        console.log(data.results)
        console.log("haha");
   
      } catch (err) {
        console.log(err)
      }
      //ejecuto la función
   
  
    }
  }, []);

  return (
    <>
      <Nav />
      <main className='mx-auto'>
        <h1 className='text-3xl font-bold text-center'>PokeApi</h1>
        {pokemons.map(pokemon => <p>{pokemon.name}</p>)}
      </main>
    </>
  )
}

export default App
