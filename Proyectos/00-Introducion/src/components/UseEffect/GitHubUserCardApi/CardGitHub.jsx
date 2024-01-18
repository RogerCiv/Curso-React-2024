import React, { useState } from 'react';
import Modal from './Modal';

function CardGitHub(props) {
  const { avatar_url, login, html_url, site_admin } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer hover:transform hover:scale-105 duration-300 hover:bg-slate-700"
        onClick={openModal}
      >
        <div className="flex flex-col items-center pb-10">
          <img
            className="size-24 mb-3 rounded-full shadow-lg"
            src={avatar_url}
            alt={`Avatar de ${login}`}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{login}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{html_url}</span>
        </div>
      </div>

      {isModalOpen && (

        <Modal onClose={closeModal}>
          {/* Contenido del modal */}
         
            <img
              className="size-60 mb-3 rounded-full shadow-lg"
              src={avatar_url}
              alt={`Avatar de ${login}`}
            />
            <h2 className='uppercase font-semibold'>{login}</h2>
            <p><span className='font-semibold'>Tipo usuario:</span> {site_admin ? 'Administrador' : 'User'}</p>
        
        </Modal>
      )}
    </>
  );
}

export default CardGitHub;



/*

function CardGitHub(props) {
    const { avatar_url, login, html_url } = props
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
         <img className="size-24 mb-3 rounded-full shadow-lg" src={avatar_url} alt={`Avatar de ${login}`}/>
         <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{login}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{html_url}</span>
        </div>
    </div>
  )
}*/