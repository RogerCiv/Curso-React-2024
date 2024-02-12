import React from 'react'

const CardLuz = ({ value, date, backgroundColor }) => {
  return (
 
<div
  className={`block max-w-[18rem] rounded-lg text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ${backgroundColor}  `}>
  <div className="p-6">
    <h5
      className="mb-1 text-xl font-bold leading-tight text-center  ">
      {value}$
    </h5>
    <h6
      className="mb-2 text-base font-bold leading-tight ">
   {new Date(date).toLocaleString()}
    </h6>
  </div>
</div>
  )
}

export default CardLuz