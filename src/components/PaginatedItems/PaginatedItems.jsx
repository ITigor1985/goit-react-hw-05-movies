import { useState, useEffect } from 'react';

function PaginatedItems({ totalPages, setCurrentPage }) {
  // We start with an empty list of items.

  const [prevPage, setPrevPage] = useState(0);
  const numberOfPages = [];
  for (let i = 1; i <= totalPages; i++) {
    numberOfPages.push(i);
  }

  useEffect(() => {
    if (prevPage === 0) {
      return;
    }
    //console.log(prevPage);
    prevPage.style.border = '1px solid black';
  }, [prevPage]);

  let sliceStartArray = [];
  let sliceEndArray = [];
  let sumArray = [];
  if (numberOfPages.length > 5) {
    sliceStartArray = numberOfPages.slice(0, 5);
  }
  if (numberOfPages.length > 10) {
    sliceEndArray = numberOfPages.slice(-5);
  }

  sumArray = sliceStartArray.concat('...', sliceEndArray);

  console.log(sliceEndArray);
  const handlePageChange = e => {
    let target = e.target;
    setPrevPage(target);
    if (prevPage === 0) {
      return;
    } else {
      prevPage.style.border = 'none';
    }

    setCurrentPage(Number(e.target.value));
  };
  return (
    <>
      <ul style={{ display: 'flex', justifyContent: 'center' }}>
        {sumArray.map((page, index) => (
          <li key={index}>
            <button
              style={{ border: 'none' }}
              onClick={handlePageChange}
              type="button"
              value={page}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PaginatedItems;
