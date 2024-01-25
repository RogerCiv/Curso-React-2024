import React from 'react'
import MovieCard from './MovieCard'

const PopularMovies = ( {data}) => {
  return (
    <>
    <div className='mx-auto max-w-full  py-2 m-10'>

      <div className='grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4 mb-40 '>

        {data && data.results.map(movie => (
        //   <MovieCard key={movie.id} title={movie.title} year={movie.release_date} type={movie.Type} poster={movie.poster_path} />
          <MovieCard key={movie.id} movie={movie}/>
          ))}
      </div>
    </div>
    </>
  )
}

export default PopularMovies