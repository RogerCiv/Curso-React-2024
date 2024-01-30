import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange, }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className='flex items-center justify-center '>
            <nav aria-label="Page navigation">
                <ul className="flex gap-2">
                    {pageNumbers.map(number => (
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            onPageChange(number);
                        }} className="page-link">
                            <li key={number} className={`text-white py-2 px-4 rounded-xl hover:bg-sky-700 ${currentPage === number ? "bg-red-500 hover:bg-red-700 font-bold" : "bg-sky-500"}`}>
                                {number}
                            </li>
                        </a>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination
