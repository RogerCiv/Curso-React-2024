import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const handlePageClick = (page) => {
        onPageChange(page);
      };

      const renderPageNumbers = () => {
        const range = 1; 
        const start = Math.max(1, currentPage - range);
        const end = Math.min(totalPages, currentPage + range);
    
        let pages = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    
        // Añadir la última página si no está ya presente
        if (pages[pages.length - 1] < totalPages) {
          pages.push(totalPages);
        }
    
        // Añadir la primera página solo si no está ya presente al principio
        if (pages[0] !== 1) {
          pages = [1, ...pages];
        }
    
        return pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={` ${currentPage === page ? 'text-white font-bold bg-teal-600' : ''}  bg-slate-500 m-2 p-2 w-10 rounded-full  hover:bg-slate-400`}
          >
            {page}
          </button>
        ));
      };
    
      return <div className=" flex">{renderPageNumbers()}</div>;
    };

export default Pagination