//import { useState, useEffect } from 'react';

function PaginatedItems({ totalPages, setCurrentPage }) {
  // We start with an empty list of items.
  const numberOfPages = [];
  for (let i = 1; i <= totalPages; i++) {
    numberOfPages.push(i);
  }

  const handlePageChange = e => {
    console.log(e.target.value);
    setCurrentPage(Number(e.currentTarget.value));
  };
  return (
    <>
      <ul>
        {numberOfPages.map((page, index) => (
          <li key={index}>
            <button onClick={handlePageChange} type="button" value={page}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PaginatedItems;
