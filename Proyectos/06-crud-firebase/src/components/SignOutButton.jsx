import React from 'react'
import { useAuthProduct } from '../context/authContextProduct'
import { useNavigate } from 'react-router-dom'
import { signOutWhitGoogle } from '../firebase/productosApi'

const SignOutButton = () => {
    const { signOutFirebase } = useAuthProduct()
    const navigate = useNavigate()

    const handleSignOut = async () => {
        try{
           const cerradoCorrectamente = await signOutWhitGoogle();
           if(cerradoCorrectamente){
            signOutFirebase();
            //    navigate('/');
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