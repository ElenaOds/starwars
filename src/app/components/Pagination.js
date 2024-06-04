'use client'

export default function Pagination({page, handleNextPage, handlePreviousPage, count}) {
    const heroesPerPage = 10;
    const totalPages = Math.ceil(count / heroesPerPage);
    return (
      <div className="flex gap-4 self-center">
        <button type='button' onClick={handlePreviousPage} disabled={page === 1}
        className="bg-blue-500 w-20 p-1 rounded-md text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-blue-200"
        >Previous</button>

        <button type='button' onClick={handleNextPage} disabled={page === totalPages}
         className="bg-blue-500 w-20 p-1 rounded-md text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-blue-200"
        >Next</button> 
      </div>
    );
  }