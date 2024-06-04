'use client'

import clsx from 'clsx';

export default function Pagination({page, handleNextPage, handlePreviousPage, handleSetPage, count}) {
    const heroesPerPage = 10;
    const totalPages = Math.ceil(count / heroesPerPage);
    const activePage = page ? page : 1;
 
    const pages = Array.from({length: totalPages}, (_, index) => index + 1);

    return (
      <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4">
        <button type='button' onClick={handlePreviousPage} disabled={page === 1}
        className="bg-blue-500 w-18 lg:w-20 p-1 rounded-md text-xs md:text-sm text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-blue-200"
        >Previous</button>

        {pages.map((pageNum) => (
        <button
          key={pageNum}
          className={clsx("w-5 sm:w-6 md:w-8 lg:w-10 p-1 rounded-md text-xs md:text-sm text-white",
          activePage === pageNum  ? "bg-amber-400" : "bg-blue-500  hover:bg-blue-400")}
          onClick={() => handleSetPage(pageNum)}
        >
          {pageNum}
        </button>
      ))} 

        <button type='button' onClick={handleNextPage} disabled={page === totalPages}
         className="bg-blue-500 w-18 lg:w-20 p-1 rounded-md text-xs md:text-sm text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-blue-200"
        >Next</button> 
      </div>
    );
  }