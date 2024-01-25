import React from 'react'
import { useDataApi } from '../hooks/useDataAPi';
import { useState } from 'react';
import MoviesDetails from '../pages/MoviesDetails';
import MovieCard from './MovieCard';

const MovieSearchForm = () => {
    const apiEndPoint = import.meta.env.VITE_API_URL
    const apiKey = import.meta.env.VITE_API_TOKEN;
    const url = `${apiEndPoint}/popular?api_key=${apiKey}`;

    const {data, loading, error } = useDataApi(url);

    const [query, setQuery] = useState("")
    const [filteredMovie, setFilteredMovie] = useState([])

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const searchTerm = e.target.value.toLowerCase();
        setQuery(searchTerm);
        if (searchTerm.trim() === "") {
          setFilteredMovie([]);
        } else {
          const filteredResults = data?.results.filter(movie => movie.title.toLowerCase().includes(searchTerm));
          setFilteredMovie(filteredResults || []);
        }
      }

      const handleDelete = () =>{
        setQuery("")
        setFilteredMovie([])
      }


    //console.log(data);
  return (
    <>
      <div className='flex flex-col items-center justify-center my-4'>
      <form onSubmit={handleSearch} className='w-1/2 bg-gray-800 rounded-lg flex  items-center p-4' action="">
      <input className='w-full py-2 px-4 bg-gray-700 rounded-md text-white focus:outline-none' type="text" placeholder='Star wars, Godfather, Star Trek...' value={query} onChange={handleSearch} />
      <button type='submit' className='ml-2 bg-sky-800 text-white px-4 py-2 rounded hover:opacity-80 focus:outline-none'>Buscar</button>
      {
        query &&<button type='button' className='ml-2 bg-red-800 text-white px-4 py-2 rounded hover:opacity-80 focus:outline-none' onClick={handleDelete}>Limpiar</button>
      }
      </form>

    </div>
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 [repeat(auto-fill,minmax(300px,1fr))]'>
 
        {
            filteredMovie && filteredMovie.map(movie => <MovieCard key={movie.id} movie={movie} />)
        }
    </div>
  </>
  )

}

export default MovieSearchForm