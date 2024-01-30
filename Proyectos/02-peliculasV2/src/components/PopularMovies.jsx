import React from 'react'
import { useDataApi } from '../hooks/useDataApi'
import MovieCard from './MovieCard'


const PopularMovies = () => {
const apiKey = import.meta.env.VITE_API_KEY
const { data , loading, error} = useDataApi(`https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1&api_key=${apiKey}`)


  return (
   <div className='flex flex-col '>
     <h1 className='text-3xl font-bold text-center'>PopularMovies</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 justify-center'>
    {
       data && data?.results?.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
        ))
    }
     </div>
   </div>
  )
}

export default PopularMovies