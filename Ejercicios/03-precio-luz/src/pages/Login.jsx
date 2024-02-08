import React from 'react'
import { useContext } from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ComponentContext from '../components/context/ComponentContext'

const Login = () => {

const { users , setUsers, setIsActive, isActive } = useContext(ComponentContext)
const [ username , setUsername ] = useState('')
const [ password , setPassword ] = useState('')
const navigate = useNavigate()


const handleSubmit = (e) => {
  e.preventDefault()
  console.log("Entrando a handlesubmit");
  const user = users.find( user => user.login.username === username && user.login.password === password )
  console.log(user);

  if(user){
  console.log("TODO OK");
    setUsername('')
    setPassword('')
    setIsActive(true)
    // console.log(isActive);
    navigate('/precioluz')
    console.log(isActive)
  }else{
    alert('Credenciales incorrectas')
  }
}

  return (
    <>
      {
        users.length > 0 ? (
          <form  className="max-w-sm mx-auto flex flex-col justify-center h-screen">
          <div className="mb-5">
            <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="mb-5">
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password' required value={password} onChange={e => setPassword(e.target.value)} />
          </div>
  
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
        ):(
          <h1>Cargando...</h1>
        )
      }
 

    </>
  )
}

export default Login