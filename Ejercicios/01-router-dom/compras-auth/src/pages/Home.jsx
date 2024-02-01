import React from 'react'
import { useDataApi } from '../hooks/useDataApi'
import ProductCard from '../components/ProductCard';

const Home = () => {

  const { data , loading, error } = useDataApi("https://fakestoreapi.com/products");
  return (
  <>
    <h1 className='text-3xl font-bold text-balance text-center m-5'>Bienvenido a la Tienda, usuario</h1>

    <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-2'>
      {
        data && data.map(product => <ProductCard key={product.id} product={product} />)}
      
    </div>
  </>
  )
}

export default Home