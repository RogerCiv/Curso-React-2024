import React, { useEffect, useState } from 'react'
import { fetchGithubUsers } from '../../../helpers/fetchGithubUsers';
import Spinner from './Spinner';
import CardGitHub from './CardGitHub';
import ModalV2 from './ModalV2';
import CardGitHubV2 from './CardGitHubV2';

function GitHubUsersV2() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [imgUrl, setImgUrl] = useState('');

  const handleOpenModal = (user) => {
    setSelectedUser(user);

  }
  const handleCloseModal = () => {
    setSelectedUser(null);
  }

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
   
  }, []);

  return (
    <>
      <div className='flex flex-col mx-auto max-w-[75%] text-center relative'>
        <h1 className='mt-2 text-3xl text-balance'>Usuando UseEffect para realizar un FETCH de la api Github</h1>
        {
        isLoading
        ? <Spinner />
        : 
        <>
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'> 
          {
            users.map((user) => (
              <CardGitHubV2 key={user.id} login={user.login} html_url={user.html_url} avatar_url={user.avatar_url} site_admin={user.site_admin} openModal={() => handleOpenModal(user)}/>
            ))
          }
        </div>
      <ModalV2  isOpen={!!selectedUser} imgUrl={selectedUser?.avatar_url} closeModal={handleCloseModal}/>
      </>
      }
      </div>
    </>
  )
}

export default GitHubUsersV2

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