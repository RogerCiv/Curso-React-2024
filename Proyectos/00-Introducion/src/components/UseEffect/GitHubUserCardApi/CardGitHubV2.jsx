import React, { useState } from 'react';
import Modal from './Modal';

function CardGitHubV2({ avatar_url, login, html_url, openModal }) {
  //const { avatar_url, login, html_url, site_admin } = props;
    const handleClickImg = () => {
        openModal(avatar_url);
    }

  return (
    <>
      <div
        className="w-full max-w-sm bg-white border border-gray-200 p-2 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700  hover:transform hover:scale-105 duration-300 hover:bg-slate-700 flex flex-col items-center pb-10 "
      >
        <div className='bg-slate-600 w-full flex justify-center items-center py-2 shadow-xl border border-slate-500/70 rounded-xl mb-2 bg-gradient-to-t from-slate-600 to-slate-300'>
          <img
            className="size-24 mb-3 rounded-full shadow-lg hover:cursor-pointer"
            src={avatar_url}
            alt={`Avatar de ${login}`}
            onClick={handleClickImg}
          />
        </div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"><span className='font-bold leading-snug'>Usuario: </span>{login}</h5>
        <span className="text-sm font-sans text-gray-500 dark:text-gray-400">{html_url}</span>
        <a href={html_url} target="_blank" rel='noreferrer'>
        <button type="button" class="mt-4 text-white bg-slate-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-400 focus:outline-none dark:focus:ring-slate-800">Ir a Github</button>
        </a>
      </div>
    </>
  );
}

export default CardGitHubV2;



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