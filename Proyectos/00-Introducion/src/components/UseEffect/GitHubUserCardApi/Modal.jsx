import React from 'react';

function Modal({ onClose, children }) {
  const handleClickOut = (e) => {
    if (e.target.classList.contains('bg-black')) {
      onClose();
    }
  };
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50" onClick={handleClickOut}>
      <div className="fixed inset-0 bg-black opacity-50 " ></div>
      <div className="bg-slate-600 p-6 rounded-lg z-10 flex flex-col items-center justify-center h-96 w-96">
        <button className="absolute text-5xl top-4 right-4 text-black hover:text-red-600" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
