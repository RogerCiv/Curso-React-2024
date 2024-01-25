import React from 'react'
import { useDataApi } from '../hooks/useDataApi'
import MovieCard from './MovieCard';
import Spinner from './Spinner';
import InputSearchMovie from './router-dom/InputSearchMovie';
import { useState } from 'react';
import { useEffect } from 'react';

const Movie = () => {
 const [searchTerm, setSearchTerm] = useState('');
 const[ url , setUrl] = useState('');
 const [isClean , setIsClean] = useState(false);

 
 const apiToken = import.meta.env.VITE_API_TOKEN;
 const apiUrl = import.meta.env.VITE_API_URL_SEARCH;
 // url https://www.omdbapi.com/?s=star&apikey=
//  const url = `${apiUrl}?query=${searchTerm}&api_key=${apiToken}`
 
const handleCleanInput = (e) => {
  if (e.key === "Escape") {
    setSearchTerm('');
    setIsClean(true);
  }
}

   const handleSearchMovie = (e) => {
     setSearchTerm(e.target.value)
     //console.log(e.target.value);
     setIsClean(false)
   }

   const { data, loading, error } = useDataApi(url)

   useEffect(() => {
     if (searchTerm) {
       const apiUrlWithQuery = `${apiUrl}query=${searchTerm}&api_key=${apiToken}`;
      //  console.log("API URL:", apiUrlWithQuery);
       setUrl(apiUrlWithQuery);
      
     }
   },[searchTerm,apiUrl,apiToken])


  // if (loading) return <Spinner className={` flex text-center mx-auto h-screen justify-center items-center`}/>

    if (error) return <div>Error: {error.message}</div>

  return (
    <>
    <InputSearchMovie value={searchTerm} onChange={handleSearchMovie} onKeyDown={handleCleanInput} />
    <div className="mx-auto max-w-[1440px] h-full mb-40 ">

      <div className='grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4 py-4 '>

        {isClean ? '' : data && data.results.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
          
          ))}
      </div>
    </div>
    </>
  )
}

export default Movie