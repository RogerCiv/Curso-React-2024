import React from 'react'
import MovieSearchForm from '../components/MovieSearchForm'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import MovieDetails from '../components/MovieDetails'

const MoviesDetailsPage = ({movie}) => {

  const { movieId } = useParams()
  
  return (
    <>
     <div>
      <BackButton />
    
      <MovieDetails movieId={movieId}/>
     </div>
    </>
  )
}

export default MoviesDetailsPage