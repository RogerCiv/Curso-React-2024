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
import GitHubUsersV2 from './components/UseEffect/GitHubUserCardApi/GitHubUsersV2'

//Declaración de variables globales



const App = () => {



 return (

   <>
   <main className='flex flex-col justify-center items-center'>

    {/* <ToDoList /> */}
    {/* <ComponenteProps /> */}
    {/* <UseEffectBasic/> */}
    {/* <ResizeListener/> */}
    {/* <GitHubUsers /> */}
    <GitHubUsersV2 />
   </main>
  </>
 )
}

export default App




