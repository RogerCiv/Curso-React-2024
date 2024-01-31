import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa6";
import { useState } from 'react';
import { useDataApi } from '../hooks/useDataApi';
import { useEffect } from 'react';


const MovieCard = ({ movie }) => {
  const [isFav, setIsFav] = useState(false);
  const [favMovie, setFavMovie] = useState({});
  const navigate = useNavigate();

   const handleMoreDetails = (e) => {

     navigate(`/movies/${movie.id}`);

   }
  const handleClickFavs = (e) => {
    let arrayFavs = [];
    if(localStorage.getItem("favsMovies")){
      arrayFavs = JSON.parse(localStorage.getItem("favsMovies"));
    }
    const existMovie = arrayFavs.find((favMovie) => favMovie.id === movie.id);
    if(!existMovie){
      arrayFavs.push(movie);
      localStorage.setItem("favsMovies", JSON.stringify(arrayFavs));
      setIsFav(true);
    } else {
      const newFavs = arrayFavs.filter((favMovie) => favMovie.id !== movie.id);
      localStorage.setItem("favsMovies", JSON.stringify(newFavs));
      setIsFav(false);
    }
  };

  useEffect(() => {
    let arrayFavs = [];
    if(localStorage.getItem("favsMovies")){
      arrayFavs = JSON.parse(localStorage.getItem("favsMovies"));
    }
    const existMovie = arrayFavs.find((favMovie) => favMovie.id === movie.id);
    setIsFav(!!existMovie);
  }, []);


  return (
    <div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  ">
      
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-balance">{movie.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Año: {movie.release_date}</p>
        <div className='flex gap-4'>
        <button onClick={handleMoreDetails} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-24'>Detalles</button>
          <button onClick={handleClickFavs}>
          {
            isFav ? <FaRegStar  className='text-yellow-400 size-6 hover:text-yellow-800' /> : <FaRegStar className='text-gray-400 size-6 hover:text-gray-800' />
          }
          </button>
          {/* <button onClick={handleClickFavs} movie={movie}><FaRegStar className='text-yellow-400 size-6 hover:text-yellow-800' /></button> */}
        </div>
      </div>
    </div>
  );
}

export default MovieCard
