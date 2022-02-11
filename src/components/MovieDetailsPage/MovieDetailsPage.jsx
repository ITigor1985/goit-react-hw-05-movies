import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/publicationsApi.js';
import {
  List,
  ListLink,
  InfoWrapper,
  DidescriptionWrapper,
  MovieTitle,
  MovieUserScore,
  MovieOverview,
} from './MovieDetailsPage.styled';
import CustomLink from 'components/CustomLink/CustomLink';

export default function MovieDetailsPage() {
  let { movieId } = useParams();
  let location = useLocation();
  const [filmData, setFilmData] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    async function getMoviesData() {
      try {
        const {
          id,
          original_title,
          overview,
          backdrop_path,
          genres,
          vote_average,
          release_date,
        } = await getMovieDetails(movieId);

        setFilmData({
          id,
          original_title,
          overview,
          backdrop_path,
          genres,
          vote_average,
          release_date,
        });
      } catch (error) {
        setError(error.message);
      }
    }
    getMoviesData();
  }, [movieId]);

  return (
    <>
      <CustomLink to={location?.state?.from ?? '/'}>Go Back</CustomLink>
      {error && <h2>Something went wrong, please try again</h2>}
      <InfoWrapper>
        {(filmData.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${filmData.backdrop_path}`}
            alt={`${filmData.original_title}`}
          />
        )) || (
          <img
            src={`https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png`}
            alt={`${filmData.original_title}`}
            width="500"
            height="281"
          />
        )}

        <DidescriptionWrapper>
          <MovieTitle>
            {filmData.original_title}(
            {filmData.release_date && filmData.release_date.slice(0, 4)})
          </MovieTitle>
          <MovieUserScore>
            User score: {filmData.vote_average * 10}%
          </MovieUserScore>
          <h3>Genres</h3>
          {filmData.genres && (
            <List>
              {filmData.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </List>
          )}
          <MovieOverview>Overview</MovieOverview>
          <p>{filmData.overview}</p>
        </DidescriptionWrapper>
      </InfoWrapper>

      <ListLink>
        <li>
          <CustomLink
            to={`/movies/${movieId}/cast`}
            state={{ from: location?.state?.from }}
          >
            Cast
          </CustomLink>
        </li>
        <li>
          <CustomLink
            to={`/movies/${movieId}/reviews`}
            state={{ from: location?.state?.from }}
          >
            Reviews
          </CustomLink>
        </li>
      </ListLink>
      <Outlet />
    </>
  );
}
