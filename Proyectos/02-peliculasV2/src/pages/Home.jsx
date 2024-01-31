import React from 'react'
import Hero from '../components/Hero'
import PopularMovies from '../components/PopularMovies'
import FavoriteMovies from '../components/FavoriteMovies'

const Home = () => {
  return (
    <>
        <Hero/>
        <PopularMovies/>
        <FavoriteMovies/>
  
    </>
  )
}

export default Home