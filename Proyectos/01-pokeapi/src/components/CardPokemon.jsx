import React from 'react'

function CardPokemon({ name, image, stats }) {
  //si la media aritmetica es de 1 a 33 (0), si es de 34 a 66 (1), si es de 67 a 100 (2) cada nivel (0,1 y 2) seria un color de borde de la card distinto
  return (
    <div className={`flex flex-col justify-center items-center  w-[240px] bg-[#ddd7d7] rounded-lg shadow-xl border ${stats < 34 ? 'border-red-500 shadow-red-600/20' : stats < 67 ? 'border-yellow-500 shadow-yellow-600/20' : 'border-green-500 shadow-green-600/20'} hover:transform hover:scale-105 hover:shadow-2xl`}>
      <div className='flex flex-col w-full items-center bg-slate-300 rounded-t-lg p-2'>
        <h2 className='text-2xl font-bold uppercase'>{name}</h2>
        <img src={image} className='size-24' alt="" />
      </div>
      <div className='flex flex-col items-center justify-center text-center p-2'>
        <h3 className='font-bold text-xl'>Stats</h3>
        <p className='font-bold'>Media : <span className={stats < 34 ? 'text-red-700' : stats < 67 ? 'text-yellow-700' : 'text-green-700'} > {stats.toFixed(2)}</span></p>
      </div>
      <button className="bg-slate-800 px-3 py-2 rounded-md mb-2 hover:opacity-80 ">
        <span className=' text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr from-red-400 via-yellow-400 to-pink-600 text-md'>INFO</span>
      </button>
    </div>
  )
}

export default CardPokemon