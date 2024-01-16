import React, { useState } from 'react'

function Titulo (props){
    return (
        <h2 className='text-2xl font-semibold'>{props.children}</h2>
    )
}

function Card({title,description,bgColor, children, setCount,count}) {
    //Componente Hijo
    
  return (
    <div className={`p-4 rounded-lg ${bgColor}`}>
        <h2 className='text-2xl font-bold'> {title}</h2>
        <p className='mt-2'>{description}</p>
        <p className='mt-2'>
            <Titulo count={count}>Soy el titulo y el count del padre es: {count}</Titulo>
        </p>

    </div>
  )
}
function ComponenteProps() {
    //Componente Padre
    const [count, setCount] = useState(0)
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-400 gap-2'>
        <h1 className='text-xl font-bold'>{count}</h1>
        <Card title="Tarjeta 1" description="Contenido de la Tarjeta 1" bgColor="bg-red-500" setCount={setCount} count={count}>
            
        </Card>
        <Card title="Tarjeta 2" description="Contenido de la Tarjeta 2" bgColor="bg-blue-500"/>
    </div>
  )
}

export default ComponenteProps





