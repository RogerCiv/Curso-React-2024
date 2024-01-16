import React from 'react'

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
}

export default CardGitHub