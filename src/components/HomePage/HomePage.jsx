import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/publicationsApi.js';
import { List } from './HomePage.styled';

export default function HomePage() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        if (movies.length !== 0) {
          return;
        }
        const { results, total_results } = await getTrending(2);
        if (total_results === 0) {
          alert('Nothing found');
          return;
        }

        const films = results.map(({ id, original_title, backdrop_path }) => {
          return { id, original_title, backdrop_path };
        });
        console.log(films);
        setMovies(films);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [movies]);

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
    </>
  );
}
