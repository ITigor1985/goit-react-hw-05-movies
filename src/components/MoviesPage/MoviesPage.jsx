import SearchBar from '../SearchBar/SearchBar';
import { List, ListItem } from './MoviesPage.styled';
import { getSearch } from 'services/publicationsApi.js';
import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';


export default function MoviesPage() {
  
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const newQuery = searchParams.get('query');
  const location = useLocation();
  
  useEffect(() => {
    async function getMovies() {
      
      try {
        if (newQuery === null) {
          return;
        }
        
        const { results, total_results } = await getSearch(newQuery);
        if (total_results === 0) {
          alert('Nothing found');
          return;
        }
        

        const films = results.map(({ id, original_title, poster_path }) => {                    
          return { id, original_title, poster_path };
        });

        setMovies(films);
      } catch (error) {
        console.log(error);
      }
    }
    
    getMovies();
  }, [newQuery]);

  const handleFormSubmit = query => {
    return setSearchParams({query});
  };
  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      <List>
        {movies.map(movie => {
          return (
            <ListItem key={movie.id}>
              <Link
                style={{ display: 'block', margin: '1rem 0' }}
                to={`/movies/${movie.id}`}
                key={movie.id}
                state={{from: location}}
              >
                {(movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={`${movie.original_title}`}
                    width="250"
                  />
                )) || (<img
                src={`https://12knots.ru/storage/app/uploads/public/045/61a/f10/thumb__375_250_0_0_crop.jpg`}
                alt="not-found"
                width="250"
                height="375"
              />
            )}
                {movie.original_title}
              </Link>
            </ListItem>
          );
        })}
      </List>
      
    </div>
  );
}
