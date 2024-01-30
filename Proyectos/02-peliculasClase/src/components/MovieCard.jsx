import React from 'react'
import { useNavigate } from 'react-router-dom'


const MovieCard = ({movie}) => {
  const navigate = useNavigate()
  const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  
  function handleClickDetails(){
    navigate(`movies/${movie.id}`)
  }
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={urlImage} alt="" />

    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Año: {movie.release_date} </p>
      <button onClick={handleClickDetails} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Detalles</button>
    </div>
  </div>
  )
}

export default MovieCard