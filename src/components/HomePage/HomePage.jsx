import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/publicationsApi.js';
import { List } from './HomePage.styled';
import ReactPaginate from 'react-paginate';
export default function HomePage() {
  const [totalPage, setTotalPage] = useState(0);
  let [movies, setMovies] = useState([]);
  let [page, setPage] = useState(0);
  const [currentItems, setCurrentItems] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  //const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      try {
        if (movies.length !== 0) {
          return;
        }

        const { results, total_results } = await getTrending(page);
        setTotalPage(total_results);
        if (total_results === 0) {
          alert('Nothing found');
          return;
        }
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(movies.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(total_results / itemsPerPage));

        const films = results.map(({ id, original_title, backdrop_path }) => {
          return { id, original_title, backdrop_path };
        });
        setMovies(films);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [currentItems, itemOffset, movies, page]);

  const handlePageClick = event => {
    setPage((page = event.selected));
    const newOffset = (event.selected * itemsPerPage) % totalPage;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <List>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link
                // state={{ from: location }}
                style={{ display: 'block', margin: '1rem 0' }}
                to={`/movies/${movie.id}`}
                key={movie.id}
              >
                {movie.backdrop_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={`${movie.original_title}`}
                    width="250"
                  />
                )}
                {movie.original_title}
              </Link>
            </li>
          );
        })}
      </List>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
