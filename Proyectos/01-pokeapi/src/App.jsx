import { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import CardPokemon from './components/CardPokemon';
import Footer from './components/Footer';
import InputComp from './components/InputComp';
import Nav2 from './components/Nav2';
import Spinner from './components/Spinner';
import ModalPokemon from './components/ModalPokemon';
import ModalPokemon2 from './components/ModalPokemon2';
import Home from './Home';
import About from './About';
import { createBrowserRouter } from 'react-router-dom';


function App() {
 
  const router = createBrowserRouter([
    {},
    {}
  ])
  return (
    <>
      <Router>

        {/* <Nav onClick={handleToggleNav} isOpen={isOpen} /> */}
        <Nav2 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
