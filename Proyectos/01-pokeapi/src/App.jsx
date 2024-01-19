import { useEffect } from 'react'
import { useState } from 'react'
import Nav from './components/Nav'
import CardPokemon from './components/CardPokemon';


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
        //  console.log(data.results)
        const pokemonDataPromises = await Promise.all(
          data.results.map(async (pokemon) => {
            //console.log(pokemon);
            const resp = await fetch(pokemon.url)
            const pokemonDetails = await resp.json()
            // console.log(pokemonDetails);
            return {
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              image: pokemonDetails.sprites.other.dream_world.front_default || '',
              stats: pokemonDetails.stats.reduce((total, stat) => total + stat.base_stat, 0) / pokemonDetails.stats.length,
            }

          })
        )
        setPokemons(pokemonDataPromises);

      } catch (err) {
        console.log(err)
      }
      //ejecuto la función

    }

    fechData()
  }, []);


  return (
    <>
      <Nav />
      <main className='max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold text-center m-10'>PokeApi</h1>
        <div className='mx-auto grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 m-8'>

          {
            pokemons.map((pokemon) => (
              <CardPokemon key={pokemon.id} name={pokemon.name} image={pokemon.image} stats={pokemon.stats} />
            ))
          }
        </div>
      </main>
    </>
  )
}

export default App
