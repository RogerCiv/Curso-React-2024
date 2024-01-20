import React from 'react';

function ModalPokemon2({ isOpen, pokemon, closeModal }) {
  const { name, image, abilities, types } = pokemon || {};
  const typeColors = {
    normal: { main: 'bg-gray-400', gradient: 'from-gray-400 via-gray-500 to-gray-400' },
    fighting: { main: 'bg-slate-500', gradient: 'from-slate-500 via-slate-600 to-slate-500' },
    flying: { main: 'bg-sky-400', gradient: 'from-sky-400 via-sky-500 to-sky-400' },
    poison: { main: 'bg-violet-500', gradient: 'from-violet-500 via-violet-600 to-violet-500' },
    ground: { main: 'bg-yellow-500', gradient: 'from-yellow-500 via-yellow-600 to-yellow-500' },
    rock: { main: 'bg-gray-500', gradient: 'from-gray-500 via-gray-600 to-gray-500' },
    bug: { main: 'bg-green-500', gradient: 'from-green-500 via-green-600 to-green-500' },
    ghost: { main: 'bg-purple-500', gradient: 'from-purple-500 via-purple-600 to-purple-500' },
    steel: { main: 'bg-slate-400', gradient: 'from-slate-400 via-slate-500 to-slate-400' },
    fire: { main: 'bg-red-500', gradient: 'from-red-500 via-red-600 to-red-500' },
    water: { main: 'bg-blue-500', gradient: 'from-blue-500 via-blue-600 to-blue-500' },
    grass: { main: 'bg-green-400', gradient: 'from-green-400 via-green-500 to-green-400' },
    electric: { main: 'bg-yellow-400', gradient: 'from-yellow-400 via-yellow-500 to-yellow-400' },
    psychic: { main: 'bg-pink-500', gradient: 'from-pink-500 via-pink-600 to-pink-500' },
    ice: { main: 'bg-cyan-500', gradient: 'from-cyan-500 via-cyan-600 to-cyan-500' },
    dragon: { main: 'bg-indigo-500', gradient: 'from-indigo-500 via-indigo-600 to-indigo-500' },
    dark: { main: 'bg-black', gradient: 'from-black via-gray-800 to-black' },
    fairy: { main: 'bg-pink-400', gradient: 'from-pink-400 via-pink-500 to-pink-400' },
    unknown: { main: 'bg-gray-400', gradient: 'from-gray-400 via-gray-500 to-gray-400' },
    shadow: { main: 'bg-gray-400', gradient: 'from-gray-400 via-gray-500 to-gray-400' },
  };

  const mainTypeColor = types && types.length > 0 ? typeColors[types[0]].main : '';
  const gradientColorClass = types && types.length > 0 ? typeColors[types[0]].gradient : '';

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center z-50 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity ease-in-out duration-500`}>
      <div className="fixed inset-0 bg-black opacity-50 "></div>
      <div className={`z-10  bg-gradient-to-r ${gradientColorClass} background-animate p-10 rounded-xl max-w-[280px] md:max-w-xs flex flex-col items-center justify-center gap-2`}>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h2 className='font-bold uppercase text-3xl'>{name}</h2>
          <img className="object-cover size-46 rounded-xl" src={image} alt="Avatar usuario" />
        </div>
        <div className='grid grid-cols-6 gap-8 items-center justify-center'>
          <div className={`col-span-3 flex flex-col justify-center items-center text-center gap-2  `}>
            <h3 className='font-bold'>Abilities</h3>
            <ul>
              {abilities && abilities.length > 0 && abilities.map((ability, index) => (
                <li className='capitalize font-semibold' key={index}><span >{ability}</span></li>
              ))}
            </ul>
          </div>
          <div className='col-span-3 flex flex-col justify-center items-center text-center gap-2'>
            <h3 className='font-bold'>Types</h3>
            <ul className='flex flex-col gap-2'>
              {types && types.length > 0 && types.map((type, index) => (
                <li key={index}><button className={`${mainTypeColor} text-black uppercase font-bold w-20 rounded-md`}>{type}</button></li>
              ))}
            </ul>
          </div>
        </div>
        <button className="mt-4 text-white hover:bg-slate-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-slate-800 focus:outline-none" onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
}

export default ModalPokemon2;
