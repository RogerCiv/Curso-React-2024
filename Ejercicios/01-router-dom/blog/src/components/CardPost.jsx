import React from 'react'
import { Link } from 'react-router-dom'

const CardPost = ({ post }) => {
  const { image, title, content, publishedAt, updatedAt, category } = post;
  return (
    <div className="max-w-6xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center p-2">
      <img className="rounded-t-lg" src={image} alt="" />
      <div className="p-5 flex flex-col justify-center items-center">
          <h5 className="mb-2 text-2xl text-balance font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-pretty">{content}</p>
      </div>
      <div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-pretty"><span className='font-bold'>Publicado: </span>{publishedAt}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-pretty"><span className='font-bold'>Editado: </span>{updatedAt}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-pretty"><span className='font-bold'>Categoria: </span>{category}</p>
      </div>
        <Link to={`../`} className='bg-sky-600 rounded-xl p-2 text-white hover:bg-sky-200 text-center' >Volver atras</Link>
    </div>

  )
}

export default CardPost