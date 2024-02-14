import React from 'react'
import { useAuthProduct } from '../context/authContextProduct'
import { useNavigate } from 'react-router-dom'
import { signOutWhitGoogle } from '../firebase/productosApi'

const SignOutButton = () => {
    const { signOutFirebase } = useAuthProduct()
   

    const handleSignOut = async () => {
        try{
           const cerradoCorrectamente = await signOutWhitGoogle();
           if(cerradoCorrectamente){
            signOutFirebase();
            }

        }catch(err){
            console.log("Error al cerrar sesion",err)
        }
    }
  return (
    <div>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleSignOut}>Cerrar Sesión</button>
    </div>
  )
}

export default SignOutButton