// IMPORTS
import { useEffect, useState } from 'react'
import './App.css'
import Buscador from './components/UseState/Buscador'

// import Contador from './components/UseState/Contador'
// import ContadorDoble from './components/UseState/ContadorDoble'
// import ContadorDobleBest from './components/UseState/ContadorDobleBest'
// import DarkLightMode from './components/UseState/DarkLightMode'
// import Form from './components/UseState/RegistrarFormulario'
// import Prueba from './components/UseState/Prueba'
import RegistrarFormulario from './components/UseState/RegistrarFormulario'
import ToDoList from './components/UseState/ToDoList'
import ComponenteProps from './components/Props/ComponenteProps'
import UseEffectBasic from './components/UseEffect/UseEffectBasic'
import ResizeListener from './components/UseEffect/ResizeListener'
import GitHubUsers from './components/UseEffect/GitHubUserCardApi/GitHubUsers'

//Declaración de variables globales



const App = () => {



 return (

   <>
   <main className='flex flex-col justify-center items-center bg-slate-400'>

    {/* <ToDoList /> */}
    {/* <ComponenteProps /> */}
    {/* <UseEffectBasic/> */}
    {/* <ResizeListener/> */}
    <GitHubUsers />
   </main>
  </>
 )
}

export default App




