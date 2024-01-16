import React, { useEffect, useState } from 'react'
import { fetchGithubUsers } from '../../../helpers/fetchGithubUsers';
import Spinner from './Spinner';
import CardGitHub from './CardGitHub';

function GitHubUsers() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGithubUsers();
        setUsers(data);
        setTimeout(() => {
          setIsLoading(false);

        },3000)
      } catch (err) {
        console.log("error", err.message);
        setIsLoading(true);
      }
    }
    fetchData();
   
  }, [isLoading])

  return (
    <>
      <div className='flex flex-col mx-auto max-w-[75%] text-center relative'>
        <h1 className='text-3xl text-balance'>Usuando UseEffect para realizar un FETCH de la api Github</h1>
        {
        isLoading
        ? <Spinner />
        : <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'> 
          {
            users.map((user) => (
              <CardGitHub key={user.id} login={user.login} html_url={user.html_url} avatar_url={user.avatar_url}/>
            ))
          }
        </div>
      }
      </div>
    </>
  )
}

export default GitHubUsers

/*
     {
        isLoading
        ? <Spinner />
        : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'> 
          {
            users.map((user) => (
              <CardGitHub key={user.id} user={user} />
            ))
          }
        </div>
      }
*/