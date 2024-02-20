import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
/*
  useMemo sirve para almacenar una variable que necesita mucho cálculo y que no queremos que se vuelva a ejecutar o crear en cada re-renderizado.
*/
const initialState = [
  {
    name: 'Product 1',
    price: 10,
    stock: 5
  },
  {
    name: 'Product 2',
    price: 20,
    stock: 10
  },
  {
    name: 'Product 3',
    price: 30,
    stock: 15
  },
  {
    name: 'Product 4',
    price: 40,
    stock: 20
  },
  {
    name: 'Product 5',
    price: 50,
    stock: 25
  }
]
const UseMemoProductList = () => {
  const [calcularCount, setCalcularCount] = useState(0)
  const [products, setProducts] = useState(initialState)
//funcion pesada!
  const CalcularPrecioTotal = (product) => {

    let suma = 0
    for (let i = 0; i < 10000000; i++) {
      suma+= Math.random()
    }
    return product.price * product.stock + suma
  }

 const memorizeTotals = useMemo(() => {
    setCalcularCount((prev )=> prev+1)
    const totalPrecios = products.map(product => {
      return CalcularPrecioTotal(product)
    })
    return totalPrecios
  }, [products])
  
  // console.log(memorizeTotals)

  return (
    <div>
      <h1>Numero de recalculos realizados {calcularCount}</h1>
      <h2>Precio total</h2>
      <div>
        {
          products.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p>Precio: {product.price}</p>
              <p>Stock: {product.stock}</p>
              <p>Total: {memorizeTotals[index]}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UseMemoProductList