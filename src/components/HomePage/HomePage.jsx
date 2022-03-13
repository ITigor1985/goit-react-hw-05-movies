import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/publicationsApi.js';
import { List } from './HomePage.styled';
import PaginatedItems from 'components/PaginatedItems';

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async currentPage => {
      try {
        const { results, total_pages } = await getTrending(currentPage);
        if (total_pages === 0) {
          alert('Nothing found');
          return;
        }
        setTotalPages(total_pages);
        const films = results.map(({ id, original_title, backdrop_path }) => {
          return { id, original_title, backdrop_path };
        });

        setMovies(films);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies(currentPage);
  }, [currentPage]);

  return (
    <>
      <List>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link
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
      <PaginatedItems
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
