/**
 * crear custom hook que se le pase como paramero un key y value inicial que me permita generar un customHook llamado useLocalStorage parar guardar datos dentro de esa clave. El estado inicial será el valor pasado por parametro siempre y cuando no exista la clave en el localstorage, si ya existe la clave el estado inicial sera el valor de la clave almacenado en el localstorage.
 */

import { useState } from "react"

export function useLocalStorage(key, initialValue) {

  const [storedValue, setStoredValue] = useState(() => {
      
    const valorKeyLocalStorage = window.localStorage.getItem(key)
    return valorKeyLocalStorage ? JSON.parse(valorKeyLocalStorage) : initialValue
  })

  const setValueInLocalStorage = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
    setStoredValue(value)
  }

//   const saveLocalStorage = (value) => {
//     if(!localStorage.getItem(key)) {
//       window.localStorage.setItem(key, JSON.stringify(value))
//       setStoredValue(key)
//     }

//     if(localStorage.getItem(key)) {
//       setStoredValue(JSON.parse(window.localStorage.getItem(key)))
//     }
    
//     return JSON.parse(localStorage.getItem(key))
// }

// return [storedValue, () => setStoredValue(saveLocalStorage)]

return [storedValue, setValueInLocalStorage]

}

