import React from 'react'
import SearchBar from '../components/SearchBar'
import PokemonCard from '../components/PokemonCard'
import { useEffect } from 'react'
import { pokeApi } from '../api/pokeApi'
import { useState } from 'react'
import PokemonModal from '../components/PokemonModal'
import Pagination from '../components/Pagination'

const Home = () => {
  const [ pokemons , setPokemons ] = useState([])
  const [ searchInput , setSearchInput ] = useState('')
  const [ selectPokemon, setSelectPokemon ] = useState(null)
 const [ currentPage, setCurrentPage ] = useState(1)
 const [totalPages, setTotalPages] = useState(1);
  const handleSearchPokemons = (e) => {
    setSearchInput(e.target.value)
  }

  const handleOpenModal = (pokemon) => {
    setSelectPokemon(pokemon)
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await pokeApi(currentPage)
      setTotalPages(Math.ceil(data.count / 20));
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const resp = await fetch(pokemon.url)
          const pokemonDetails = await resp.json()
          return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            image: pokemonDetails.sprites.other.dream_world.front_default,
            abilities: pokemonDetails.abilities.map(ability => ability.ability.name),
            types: pokemonDetails.types.map(type => type.type.name),
            weight: pokemonDetails.weight,
            stats: pokemonDetails.stats.reduce((total, stat) => total + stat.base_stat, 0) / pokemonDetails.stats.length
          }
        })
      )
      const resultSearch = !searchInput ? pokemonData : pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))
      setPokemons(resultSearch)
    }
    fetchData()
  },[searchInput,currentPage])

  // console.log(pokemons);
  return (
    <>
   

      <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold text-center m-10'>PokeApi</h1>
        <SearchBar value={searchInput} onChange={handleSearchPokemons} />
        </div>
        <div className=' md:grid md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 m-8
         flex flex-col place-items-center'>

        {
          pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} openModal={() => handleOpenModal(pokemon)}/>
            ))
          }

          {
            <PokemonModal isOpen={!!selectPokemon} pokemon={selectPokemon} closeModal={() => setSelectPokemon(null)} />
          }
          
        </div>
        <div className='flex justify-center items-center sm:mb-40 mb-60'>

        <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages} />
        </div>

   
       
    </>
  )
}

export default Home