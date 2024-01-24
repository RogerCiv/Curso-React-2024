import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDataApi } from '../hooks/useDataApi';
import { useEffect } from 'react';
import Spinner from './Spinner';
import MovieCard from './MovieCard';
import MovieCardDetails from './MovieCardDetails';

const MovieInfo = () => {
  const params = useParams();

  const [movieInfo, setMovieInfo] = useState(null);
  const apiToken = import.meta.env.VITE_API_TOKEN;
  const apiUrl = import.meta.env.VITE_API_URL;

  const url = `${apiUrl}${params.movieId}?api_key=${apiToken}`;
  console.log(url);
  const { data, loading, error } = useDataApi(url);

  useEffect(() => {
    if (data) setMovieInfo(data)
  }, [data])

  return (
    <div className='mx-auto max-w-[1440px] flex items-center justify-center py-4'>
      {
         error ? <div>Error: {error.message}</div> : movieInfo && <MovieCardDetails movie={movieInfo} />
      }
    </div>
  )
}

export default MovieInfo