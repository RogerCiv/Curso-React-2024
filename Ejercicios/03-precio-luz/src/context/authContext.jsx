import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const AuthContext = createContext()

const initialDate = new Date();
const initialDateISOS = initialDate.toISOString();
initialDate.setHours(initialDate.getHours() + 24);
const finalDateISOS = initialDate.toISOString();

const endPointLuz = `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${initialDateISOS}&end_date=${finalDateISOS}&time_trunc=hour`;
const endPointUsers = "https://jsonplaceholder.org/users";

export const AuthProvider = ({ children }) => {
    const [precioLuz, setPrecioLuz] = useState([]);
    const [user, setUser] = useState({});
    const [allUsers, setAllUsers] = useState([]);
    const [isLogged, setIsLogged] = useState(false);

    const values ={
        precioLuz,
        setPrecioLuz,
        user,
        setUser,
        allUsers,
        setAllUsers,
        isLogged,
        setIsLogged
    }
  
    useEffect(() => {
      async function fetchApi() {
        const res = await fetch(endPointLuz);
        const data = await res.json();
        
        const values = data.included.find(
          (item) => item.type === "Precio mercado spot (€/MWh)"
        ).attributes.values;
        setPrecioLuz(values);
      }
      fetchApi();
    }, []);
  
    useEffect(() => {
      async function fetchApiUser() {
        const res = await fetch(endPointUsers);
        const data = await res.json();
  
        setAllUsers(data);
      }
      fetchApiUser();
    }, []);

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export const  useAuthContext = () => {
    return useContext(AuthContext)
}