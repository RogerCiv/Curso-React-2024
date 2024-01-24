import React from 'react'

const MovieCardDetails = (movieInfo) => {
  return (
    <div className='flex flex-col max-w-md bg-gray-600 p-4 rounded-lg shadow-4 gap-4'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-4xl font-bold text-balance '>{movieInfo.movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${movieInfo.movie.poster_path}`} className="object-cover  rounded-t-lg h-96" alt="" />
      </div>
      <div className='flex flex-col max-w-sm justify-center items-center mx-auto'>
        
        <p className='text-pretty text-gray-300 '><span className='font-bold text-black'>Sinopsis: </span>{movieInfo.movie.overview}</p>
        <p>Año: {movieInfo.movie.release_date}</p>
        <p>Rating: {movieInfo.movie.vote_average}</p>
        <p>Votos: {movieInfo.movie.vote_count}</p>
        <p>Popularidad: {movieInfo.movie.popularity}</p>
        <p>Generos: {movieInfo.movie.genres.map((genre) => genre.name)}</p>
        <p>Idiomas: {movieInfo.movie.spoken_languages.map((language) => language.english_name)}</p>
        <p>Plataformas: {movieInfo.movie.production_companies.map((company) => company.name)}</p>
        <p>Estudios: {movieInfo.movie.production_countries.map((country) => country.name)}</p>
        <p>Idioma original: {movieInfo.movie.original_language}</p>
        <p>Idioma original: {movieInfo.movie.tagline}</p>

      </div>
    </div>
  )
}

export default MovieCardDetails