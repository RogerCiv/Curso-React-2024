import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CardPokemon from './components/CardPokemon'
import Spinner from './components/Spinner'
import ModalPokemon from './components/ModalPokemon'
import InputComp from './components/InputComp'
import ModalPokemon2 from './components/ModalPokemon2'
// importar url desde .env
const URL = import.meta.env.VITE_URL_POKEAPI
function Home() {
    const [pokemons, setPokemons] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectPokemon, setSelectPokemon] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
  
    const handleSearchPokemons = (e) => {
      setSearchTerm(e.target.value)
    }
    function handleOpenModal(pokemon) {
      setSelectPokemon(pokemon)
    }
  
    function handleCloseModal() {
      setSelectPokemon(null)
    }
  
  
    useEffect(() => {
      //Acceso a la api de pokeapi.com
      // creo la función o la importo de un helper
      const fechData = async () => {
        try {
          const response = await fetch(URL)
          if (!response.ok) throw new Error("Error Al hacer fetch")
          const data = await response.json()
          //  console.log(data.results)
          const pokemonDataPromises = await Promise.all(
            data.results.map(async (pokemon) => {
              const resp = await fetch(pokemon.url)
              const pokemonDetails = await resp.json()
              // console.log(pokemonDetails);
              return {
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                image: pokemonDetails.sprites.other.dream_world.front_default || '',
                stats: pokemonDetails.stats.reduce((total, stat) => total + stat.base_stat, 0) / pokemonDetails.stats.length,
                abilities: pokemonDetails.abilities.map(ability => ability.ability.name),
                types: pokemonDetails.types.map(type => type.type.name),
              }
            })
          )
          const resultPokemons = !searchTerm ? pokemonDataPromises : pokemonDataPromises.filter(pokemon => pokemon.name.includes(searchTerm.toLowerCase()))
          setTimeout(() => {
            setIsLoading(false)
          }, 3000)
          setPokemons(resultPokemons);
  
        } catch (err) {
          console.log(err)
          setIsLoading(true)
        }
      }
      //ejecuto la función
      fechData()
    }, [searchTerm]);
  
  
  return (
    <main className='md:max-w-4xl mx-auto lg:max-w-6xl '>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold text-center m-10'>PokeApi</h1>
          <InputComp value={searchTerm} onChange={handleSearchPokemons} />
        </div>
        <div className='mb-56 md:grid md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 m-8
         flex flex-col place-items-center'>

          {
            isLoading ? <Spinner/> :
            pokemons.map((pokemon) => (
              <CardPokemon key={pokemon.id} name={pokemon.name} image={pokemon.image} stats={pokemon.stats}  openModal={() => handleOpenModal(pokemon)} />   
            ))
          }

          <ModalPokemon isOpen={!!selectPokemon} pokemon={selectPokemon} closeModal={handleCloseModal} />
        </div>
      </main>
  )
}

export default Home