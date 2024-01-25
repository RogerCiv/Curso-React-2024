import React from 'react'
import { Link } from 'react-router-dom'
import { useDataApi } from '../hooks/useDataApi';
import Spinner from './Spinner';
import PopularMovies from './PopularMovies';
const Home = () => {
  const apiToken = import.meta.env.VITE_API_TOKEN;
  const apiUrl = import.meta.env.VITE_API_URL;

  const url = `${apiUrl}/popular?api_key=${apiToken}`;
  const { data, loading, error } = useDataApi(url)


  if (error) return <div>Error: {error.message}</div>

  return (
    <main className=''>
      <div className="h-full bg-gray-50 flex items-center">
        <section className="w-full bg-cover bg-center py-40" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
          <div className="container mx-auto text-center text-white">
            <h1 className="text-5xl font-medium mb-6">Movies Api</h1>
            <p className="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
              gravida pellentesque urna varius vitae.</p>
            <Link to="searchMovies" className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Movies</Link>
          </div>
        </section>
      </div>
      <div className=' h-screen'>
        <h2 className='text-center text-3xl m-4'>Peliculas populares</h2>
        {/* {data && data.results.map(movie => (
	// <div key={movie.id} className="mx-4">
	// 	<Link to={`/movies/${movie.id}`}>
	// 		<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
	// 	</Link>
	// </div>
	
  ))} */}
  
        {/* {loading && <Spinner className={` flex text-center mx-auto justify-center items-center`} />} */}
        { error ? <div>Error: {error.message}</div> : data && <PopularMovies data={data} />}
      </div>
    </main>
  )
}

export default Home