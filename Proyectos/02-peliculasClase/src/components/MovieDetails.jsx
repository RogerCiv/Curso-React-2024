import React from 'react'
import { useState } from 'react';
import { useDataApi } from '../hooks/useDataAPi';
import { Link } from 'react-router-dom';

const MovieDetails = ({movieId}) => {
    const endPoint = import.meta.env.VITE_API_URL_BY_ID
    const apiKey = import.meta.env.VITE_API_TOKEN;
    const url = `${endPoint}${movieId}?api_key=${apiKey}`

    const { data, loading, error } = useDataApi(url);

    const generos = data?.genres.map((genre) => genre.name).join(", ")
    const companys = data?.production_companies.map((company) => company.name).join(", ")
    const logoCompany = data?.production_companies.map((company) => company.logo_path)


  return (
  
        <div className='bg-slate-400 p-2 max-w-4xl mx-auto h-screen rounded-xl mb-40'>
            
            {loading && <p>Cargando...</p>}
            {error && <p>Se produjo un error</p>}
            { data && (
                <div className='flex flex-col w-3/6 items-center mx-auto h-screen'>
                    
                    <h2 className='text-white text-3xl font-bold uppercase text-balance text-center'>{data.title}</h2>
                    <div className='grid grid-cols-2'>
                    <img className='w-5/6 my-5' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
                    <img className='w-5/6 my-5' src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="" />
                    </div>
                    <p className='text-white text-pretty'> <span className='font-bold '>Sinopsis: </span>{data.overview}</p>
                    <p className='text-white'>Generos: {generos}</p>
                    <p className='text-white'>Rating: {data.vote_average}</p>
                    <p>Fecha de estreno: {data.release_date}</p>
                    <p>Duración: {data.runtime}</p>
                    <p>Idioma original: {data.original_language}</p>
                    <p>País: {data.production_countries[0].name}</p>
                    <p>Frase: {data.tagline}</p>
                    <div>
                        {logoCompany && logoCompany.map((logo) => <img className='w-1/6 my-5' src={`https://image.tmdb.org/t/p/w500${logo}`} alt="" />)}
                        <p className='text-white'>Compañías: {companys}</p>
                    </div>
                    <Link to=".."><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Volver</button></Link>
                </div>
                )}
                
        </div>
   
  )
}

export default MovieDetails