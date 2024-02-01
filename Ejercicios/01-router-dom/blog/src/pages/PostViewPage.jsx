import React from 'react'
import { useParams } from 'react-router-dom'
import { useDataApi } from '../hooks/useDataApi'
import CardPost from '../components/CardPost'

const PostViewPage = () => {
    const { id } = useParams()

    const { data, loading, error } = useDataApi(`https://jsonplaceholder.org/posts/${id}`)
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-200'>PostViewPage la id del post es : {id}
    
        {
          data && <CardPost post={data}/>
        }
    </div>
  )
}

export default PostViewPage