import React from 'react'
import { useDataApi } from '../hooks/useDataApi'
import MovieCard from './MovieCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useAuthMovie } from '../context/authContextMovie'

const PopularMovies = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  const { data, loading, error } = useDataApi(`https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1&api_key=8947f3323155f475efaa896a54e20a13`)
const { theme } = useAuthMovie();
  const settings = {
    infinite: true,
    autoplay: true,
    dots: true,
    speed: 1500,
    slidesToShow: 4, 
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className={`flex flex-col max-w-[1500px] mx-auto gap-4 ${theme === 'light' ? "bg-yellow-300" : "bg-gray-800" }  bg-gray-400 p-2 bg-gradient-to-b from-gray-600 to-transparent   top-0 left-0 z-0`}>
      <h1 className='text-3xl font-bold text-center'>PopularMovies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Slider {...settings} >
     

          {data?.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
            ))}
 
      
        </Slider>
      )}
    </div>
  );
};

export default PopularMovies



// return (
//   <div className='flex flex-col '>
//     <h1 className='text-3xl font-bold text-center'>PopularMovies</h1>
//     <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 justify-center'>
//    {
//       data && data?.results?.map(movie => (
//        <MovieCard key={movie.id} movie={movie} />
//        ))
//    }
//     </div>
//   </div>
//  )