import React from 'react'
import MovieCard from './MovieCard'
import { useState } from 'react'
import { useEffect } from 'react'

const FavoriteMovies = () => {
// cargar las peliculas favoritas del localstorage y printear en pantalla cada pelicula con el movieCard

const [favMovies, setFavMovies] = useState([])

 useEffect(() => {
     
    setFavMovies(JSON.parse(localStorage.getItem("favsMovies")) || [])

 },[])






  return (
    <div className='flex flex-col gap-4 items-center mt-10'>
        <h2 className='text-3xl font-bold'>Peliculas Favoritas</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 justify-center'>

        {
            favMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
                ))
            }
        </div>

    </div>
  )
}

export default FavoriteMovies