import React from 'react'
import { useDataApi } from '../hooks/useDataApi'

const PrecioLuz = () => {

    const {data, loading , error } = useDataApi('https://api.preciodelaluz.org/v1/prices/all?zone=PCB')
    console.log(data);
  return (
    <>
     <h1>PrecioLuz</h1>
     <div>
     
     </div>
    </>
  )
}

export default PrecioLuz