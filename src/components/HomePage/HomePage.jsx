import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/publicationsApi.js';
import { List } from './HomePage.styled';
import ReactPaginate from '../PaginatedItems';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  console.log(page);
  console.log(location);
  useEffect(() => {
    async function getMovies() {
      console.log(getMovies);
      try {
        if (movies.length !== 0) {
          return;
        }
        console.log(`"eto" ${page}`);
        const { results, totalHits } = await getTrending(page);

        if (totalHits === 0) {
          alert('Nothing found');
          return;
        }

        const films = results.map(({ id, original_title, backdrop_path }) => {
          return { id, original_title, backdrop_path };
        });
        setMovies(films);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [movies, page]);

  const handleChangePage = page => {
    console.log(page);
    setPage(page);
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
      <ReactPaginate itemsPerPage={20} handleChangePage={handleChangePage} />
    </>
  );
}
