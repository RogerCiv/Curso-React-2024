import React from 'react';

function ModalPokemon({ isOpen, pokemon, closeModal }) {
  const { name, image, abilities, types } = pokemon || {};
  const typeColors ={
    normal: 'bg-gray-400',
    fighting: 'bg-slate-500',
    flying: 'bg-sky-400',
    poison: 'bg-violet-500',
    ground: 'bg-yellow-500',
    rock: 'bg-gray-500',
    bug: 'bg-green-500',
    ghost: 'bg-purple-500',
    steel: 'bg-slate-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    grass: 'bg-green-400',
    electric: 'bg-yellow-400',
    psychic: 'bg-pink-500',
    ice: 'bg-cyan-500',
    dragon: 'bg-indigo-500',
    dark: 'bg-black',
    fairy: 'bg-pink-400',
    unknown: 'bg-gray-400',
    shadow: 'bg-gray-400',
  }
  const getTypeColorClass = (type) => typeColors[type] 

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center z-50 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity ease-in-out duration-500`}>
      <div className="fixed inset-0 bg-black opacity-50 " ></div>
      <div className='z-10  bg-gradient-to-r
    from-yellow-500
    via-red-500
    to-yellow-500
    background-animate p-10  rounded-xl max-w-[280px] md:max-w-xs flex flex-col items-center justify-center gap-2'>
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
                <li key={index}><button className={`${getTypeColorClass(types[index])} text-black uppercase font-bold w-20 rounded-md`}>{type}</button></li>
              ))}
            </ul>
          </div>

        </div>
        <button className="mt-4 text-white hover:bg-slate-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-slate-800 focus:outline-none" onClick={closeModal}>Cerrar</button>

      </div>
    </div>
  );
}

export default ModalPokemon;
