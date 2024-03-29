import React, { useState, useContext } from 'react';
import { useDataApi } from '../hooks/useDataApi';
import { useNavigate } from 'react-router-dom';
import SearchResultsContext from  '../hooks/SearchResultsContext';
import { useAuthMovie } from '../context/authContextMovie';


const FormSearchMovie = () => {
  const {movieCategories, updateMovieCategories} = useAuthMovie();
  const [searchTerm, setSearchTerm] = useState('');
  const { setSearchResults } = useContext(SearchResultsContext);
  const { theme } = useAuthMovie();
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_API_TOKEN;
  const apiUrl = import.meta.env.VITE_API_URL_SEARCH;
 // const url = `${apiUrl}?query=${searchTerm}&api_key=${apiKey}`;
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=8947f3323155f475efaa896a54e20a13`

  const { data, loading, error } = useDataApi(url);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchValue = searchTerm.toLowerCase();
    if (searchValue.trim() !== '') {
      const filteredResults = data?.results.filter(movie => movie.title.toLowerCase().includes(searchValue));
      console.log(filteredResults.map(movie => movie.genre_ids));
      updateMovieCategories(filteredResults.map(movie => movie.genre_ids));
      setSearchResults(filteredResults || []);
      navigate('/results');
     
    }
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleDelete = () => {
    setSearchTerm("");
  }
  
  // const saveGenreLocalStorage = (genre) => {
  //   let arrayLS = []
  //   if(localStorage.getItem('genre')){
  //     arrayLS = JSON.parse(localStorage.getItem('genre'));
  //   }
  //   localStorage.setItem('genre', JSON.stringify(arrayLS.concat(genre)));

  // }

  return (
    <>
 <div className='flex flex-col items-center justify-center my-4'>
        <form className={`w-1/2 ${theme === 'light' ? "bg-yellow-300" : "bg-gray-800" }  rounded-lg flex  items-center p-4'`} onSubmit={handleSearch}>
          <input className={`w-full py-2 px-4 ${theme === 'light' ? "bg-yellow-300" : "bg-gray-800" }  rounded-md text-white focus:outline-none`} type="text" placeholder='Star wars, Godfather, Star Trek...' value={searchTerm} onChange={handleInputChange} />
          <button type='submit' className='ml-2 bg-sky-800 text-white px-4 py-2 rounded hover:opacity-80 focus:outline-none'>Buscar</button>
          {
            searchTerm && <button className='ml-2 bg-red-500 text-white px-4 py-2 rounded hover:opacity-80 focus:outline-none' onClick={handleDelete}>Limpiar</button>
          }
        </form>
      </div>
     
    </>
  )
}

export default FormSearchMovie