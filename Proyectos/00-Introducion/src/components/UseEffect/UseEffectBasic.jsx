import React, { useEffect, useState } from 'react'

function UseEffectBasic() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }
  function handleClick2(){
    setCount2(count2 + 1)
  }
  // useEffect
  //Variantes
  //Primera variante
  // useEffect(() => {
  //   //Se ejecuta cuando se pinta el componente  y cuando se modifica cualquier estado.
  //   //Esta variante es muy peligrosa y se recomienda no usarla
  //   console.log("Estoy dentro de la primera variante del useEffect");
  // })

    //Segunda variante
    //Solo se ejecuta una sola vez, cuando se monta el componente, porque el array de dependencias esta vacio
    // useEffect(() => {
    //   console.log("Estoy dentro de la segunda variante del useEffect");
    // }, [])

  // Tercera variante
  //Se ejecuta cuando se monta el componente y si en el array de dependencias coloco aquel estado que quiero
  //que cuando se modifique se ejecute el useEffect

    // useEffect(() => {
    //   console.log("Ejercuto la tercera variante del useEffect");
    // }, [count])
    //Cuarta variante
    // useEffect(() => {
    //   return (

    //   )
    // }, [])
  return (
    <div className='flex flex-col gap-6 justify-center items-center bg-cyan-300/50 h-screen'>
      <h1 className='font-bold text-2xl'>COntador1: {count}</h1>
      <h1 className='font-bold text-2xl'>COntador2: {count2}</h1>
      <button onClick={handleClick} type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Contador1</button>
      <button onClick={handleClick2} type="button" className="text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Contador 2</button>
    </div>
  )
}

export default UseEffectBasic