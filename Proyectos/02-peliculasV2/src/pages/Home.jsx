import React from 'react'
import Hero from '../components/Hero'
import PopularMovies from '../components/PopularMovies'
import FavoriteMovies from '../components/FavoriteMovies'
import Recomendation from '../components/Recomendation'

const Home = () => {
  return (
    <>
        <Hero/>
        <PopularMovies/>
        <FavoriteMovies/>
        <Recomendation/>
  
    </>
  )
}

export default Home