import React from 'react'

function ModalV2({ isOpen, imgUrl, closeModal }) {
    return (
        <div className={`fixed inset-0 flex flex-col items-center justify-center z-50 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity ease-in-out duration-500`}>
            <div className="fixed inset-0 bg-black opacity-50 " ></div>
            <div className='z-10 bg-white p-10  rounded-xl max-w-2xl flex flex-col items-center justify-center gap-2'>
                <img className="object-cover w-full h-full rounded-xl" src={imgUrl} alt="Avatar usuario" />

                <button class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={closeModal}>Cerrar</button>

            </div>
        </div>
    )
}

export default ModalV2