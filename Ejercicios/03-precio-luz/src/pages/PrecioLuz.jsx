import React from 'react'

import CardLuz from '../components/CardLuz';
import { useContext } from 'react';
import { useAuthContext } from '../context/authContext';


const PrecioLuz = () => {

  const { precioLuz } = useAuthContext();
  const highPrice = [...precioLuz].sort((a, b) => b.value - a.value).slice(0, 6);
  const lowPrice = [...precioLuz].sort((a, b) => a.value - b.value).slice(0,6);

  const backgroundColor = (precio) => {
    if (highPrice.includes(precio)) {
      return "bg-red-500";
    }else if (lowPrice.includes(precio)) {
      return "bg-green-500";
    }else{
      return "bg-orange-500";
    }
  }

  return (
    <>
     <h1 className='text-3xl text-center font-bold m-10'>PrecioLuz</h1>
     <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 place-items-center'>
     {precioLuz.map((item) => (
          <CardLuz
            key={item.datetime}
            value={item.value}
            date={item.datetime}
            backgroundColor={backgroundColor(item)}
          />
        ))}
         
     </div>
    </>
  )
}

export default PrecioLuz