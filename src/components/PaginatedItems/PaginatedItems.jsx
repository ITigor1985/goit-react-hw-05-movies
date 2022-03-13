//import { useState, useEffect } from 'react';

function PaginatedItems({ totalPages, setCurrentPage, currentPage }) {
  // We start with an empty list of items.
  const numberOfPages = [];
  for (let i = 1; i <= totalPages; i++) {
    numberOfPages.push(i);
  }

  let sliceStartArray = [];
  //let sliceEndArray = [];
  if (numberOfPages.length > 5) {
    sliceStartArray = numberOfPages.slice(0, 5);
  }

  const handlePageChange = e => {
    console.log(e.target.value);
    let target = e.target;
    target.style.borderColor = 'green';
    setCurrentPage(Number(e.target.value));
  };
  return (
    <>
      <ul style={{ display: 'flex', justifyContent: 'center' }}>
        {sliceStartArray.map((page, index) => (
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
