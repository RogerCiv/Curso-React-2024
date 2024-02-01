import React from 'react'
import { useDataApi } from '../hooks/useDataApi'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate()

  const { data, loading, error } = useDataApi('https://jsonplaceholder.org/posts')

  const handleClick = (id) => {
    // aqui hay que pasarle la id
    navigate(`/post/${id}`)
  }

  return (
    <>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-2'>

        {
          data && data.map(post => (
            <div key={post.id} className='bg-sky-800 flex flex-col justify-center items-center gap-2'>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-balance text-center'>{post.title}</h1>
                <img className='w-1/4' src={post.image} alt="" />
              </div>
              <div className='flex flex-col justify-center items-center gap-2 p-2'>
                <p className='text-pretty'>{post.content.split(' ').slice(0,8).join('')}</p>
                <button onClick={() =>handleClick(post.id)} className='bg-sky-600 rounded-xl p-2 text-white hover:bg-sky-200'>Ver Más</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home