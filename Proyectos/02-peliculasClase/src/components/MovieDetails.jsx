import React from 'react'
import { useState } from 'react';
import { useDataApi } from '../hooks/useDataAPi';

const MovieDetails = ({movieId}) => {
    const endPoint = import.meta.env.VITE_API_URL_BY_ID
    const apiKey = import.meta.env.VITE_API_TOKEN;
    const url = `${endPoint}${movieId}?api_key=${apiKey}`

    const { data, loading, error } = useDataApi(url);

    const generos = data?.genres.map((genre) => genre.name).join(", ")


  return (
    <div>MovieDetails id pelicula: {movieId}
        <p>Generos: {generos}</p>
     </div>
  )
}

export default MovieDetails