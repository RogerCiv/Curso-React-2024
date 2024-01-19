import { useEffect } from 'react'
import { useState } from 'react'
import Nav from './components/Nav'


function App2() {
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
        const pokemonDataPromises = await Promise.all(
          results.map(async (pokemon) => {
          
            const resp = await fetch(pokemon.url)
            const pokemonDetails = await resp.json()
            return {
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              image: pokemonDetails.sprites.other.dream_world.front_default || "",
              //Media aritmetica
              stats: pokemonDetails.stats.reduce((total, stat) => total + stat.base_stat, 0) / pokemonDetails.stats.length,
              // (0-33 -> 1, 34-66 -> 2, 67-100 -> 3) Diferentes colores para 1 , 2 y 3.
            }
          })
        )
        setPokemons(pokemonDataPromises);
   
      } catch (err) {
        console.log(err)
      }
      //ejecuto la función
      fechData()
  
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

export default App2
