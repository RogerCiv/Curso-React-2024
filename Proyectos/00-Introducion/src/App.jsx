// IMPORTS
import './App.css'

import Contador from './components/UseState/Contador'
import ContadorDoble from './components/UseState/ContadorDoble'
import ContadorDobleBest from './components/UseState/ContadorDobleBest'
import DarkLightMode from './components/UseState/DarkLightMode'

//Declaración de variables globales



const App = () => {
  /*
  //Hooks

  //Declaración variables locales
  const texto = "Hola que ases";
  const numero = 2;
  const array = ["Pera","Manzana","Uva","Fresa","Melocoton"];
  const objeto = {
    nombre: "Perico",
    edad: 20,
  }


  //Funciones de mi componente
  return (
    <div>
      <h1 className='text-6xl text-balance'>Ejemplo basico JSX</h1>
      <h2 className='text-4xl mt-2'>Variables en JSX y objetos</h2>
      <div className='flex flex-col gap-4'>
        <h3>La variable texto tiene: {texto}</h3>
        <h3>La variable numero tiene: {numero}</h3>
    
        <ul className='list-decimal'>
         {array.map((fruta,index) => (
          <li key={index} className='text-3xl'>{fruta}</li>   
        ))}
        </ul>
        <h3>La variable objeto es, nombre: <span className='font-bold'>{objeto.nombre}</span> , edad: <span className='font-bold'>{objeto.edad}</span></h3>
      </div>

    </div>
  )
  */
 return (

   <>
  <ContadorDoble />
   <Contador/>
   <ContadorDobleBest />
   <DarkLightMode />
  </>
 )
}

export default App




