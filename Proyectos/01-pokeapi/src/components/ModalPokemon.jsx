import React from 'react'

function ModalPokemon() {
  return (
    <div className={`flex flex-col justify-center items-center  w-[240px] bg-[#ddd7d7] rounded-lg shadow-xl border ${stats < 34 ? 'border-red-500 shadow-red-600/20' : stats < 67 ? 'border-yellow-500 shadow-yellow-600/20' : 'border-green-500 shadow-green-600/20'} hover:transform hover:scale-105 hover:shadow-2xl`}>
    <div className='flex flex-col w-full items-center bg-slate-300 rounded-t-lg p-2'>
      <h2 className='text-2xl font-bold uppercase'>{name}</h2>
      <img src={image} className='size-24' alt="" />
    </div>
    <div className='flex flex-col items-center justify-center text-center p-2'>
      <h3 className='font-bold text-xl'>Stats</h3>
      <p className='font-bold'>Media : <span className={stats < 34 ? 'text-red-700' : stats < 67 ? 'text-yellow-700' : 'text-green-700'	} > {stats.toFixed(2)}</span></p>
    </div>
  </div>
  )
}

export default ModalPokemon