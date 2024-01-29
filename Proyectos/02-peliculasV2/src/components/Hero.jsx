import React from 'react'
import FormSearchMovie from './FormSearchMovie'


const Hero = () => {
  return (
    //Hero section aqui
    <section className="w-full bg-cover bg-center py-40" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
    <div className="container mx-auto text-center text-white">
      <h1 className="text-5xl font-medium mb-6">Movies Api</h1>
      <p className="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,
        gravida pellentesque urna varius vitae.</p>
        <FormSearchMovie />
    </div>
  </section>
  )
}

export default Hero