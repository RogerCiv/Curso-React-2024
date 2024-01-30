import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDataApi } from '../hooks/useDataApi';
import { Link } from 'react-router-dom';

const MoviesDetails = () => {
  const { movieId } = useParams()
  const navigate = useNavigate();
  const endPoint = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const endPointFindById = `${endPoint}${movieId}?language=es-ES&api_key=${apiKey}`

  const { data, loading, error } = useDataApi(endPointFindById);

  const handleClick = () => {
    navigate(-1);
  }
  return (
    <div className=' p-4 flex  flex-col justify-center items-center  mx-auto h-full '>
<button onClick={handleClick} type="button" class="text-white bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 shadow-lg shadow-sky-500/50 dark:shadow-lg dark:shadow-sky-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Volver</button>
      <div className='o md:max-w-7xl xl:max-w-[1500px] '>
        {
             
          data &&
          <div className='flex flex-col gap-4 sm:grid sm:grid-cols-2  bg-sky-800 p-6 rounded-md'>
            <div className='flex flex-col items-center gap-4'>
               <h1 className='text-3xl font-bold text-balance text-center'>{data.title}</h1>
              <img className='w-3/5 sm:w-5/6 rounded-3xl' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
            </div>
            <div className='flex flex-col justify-center gap-4'>
            <p className='text-pretty'> <span className='font-bold'>Sinopsis: </span>{data.overview}</p>
            <div className='md:grid md:grid-cols-2 xl:grid-cols-3 gap-2'>

            <p className='text-pretty'> <span className='font-bold'>Fecha de estreno: </span>{data.release_date}</p>
            <p className='text-pretty'> <span className='font-bold'>Rating: </span><span className={`${data.vote_average >= 5 ? 'text-green-500' : 'text-red-500'} font-semibold`}>{data.vote_average.toFixed(2)}</span></p>
            <p className='text-pretty'> <span className='font-bold'>Duracion: </span>{data.runtime}</p>
            <p className='text-pretty'> <span className='font-bold'>Genero: </span>{data.genres.map(genre => genre.name).join(',')}</p>
            <p className='text-pretty'><span className='font-bold'>Tagline:</span> {data.tagline ? data.tagline : <span className='text-gray-500'>Sin tagline</span>}</p>
        
            <p className='text-pretty'><span className='font-bold'>Ingresos: </span>{data.revenue.toLocaleString()}$</p>
            </div>
       
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default MoviesDetails

