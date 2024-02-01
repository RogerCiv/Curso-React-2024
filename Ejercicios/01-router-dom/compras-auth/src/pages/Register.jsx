import React from 'react'
import { useContext } from 'react'
import { ComponentContext } from '../components/useContext/context/ComponentContext'

const Register = () => {
  const { users , setUsers} = useContext(ComponentContext)

  const handleRegister = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    setUsers([...users, {name: username, password: password}])
  }
  return (

<form onSubmit={handleRegister} className="max-w-sm mx-auto">
  <div className="mb-5">

    <input type="text" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="username" required/>
  </div>
  <div className="mb-5">
   <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='password' required/>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>

  )
}

export default Register