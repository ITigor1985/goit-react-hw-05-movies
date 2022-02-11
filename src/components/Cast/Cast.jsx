import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/publicationsApi';
import { ListCast } from './Cast.styled';

export default function Cast() {
  let { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function getCasts() {
      try {
        if (casts.length !== 0) {
          return;
        }
        const { cast } = await getMovieCast(movieId);
        if (cast.length === 0) {
          alert('Sorry! Nothing found!');
          return;
        }
        const acters = cast.map(({ id, profile_path, name, character }) => {
          return { id, profile_path, name, character };
        });

        setCasts(acters);
      } catch (error) {
        console.log(error);
      }
    }
    getCasts();
  }, [movieId, casts]);
  return (
    <ListCast>
      {casts &&
        casts.map(cast => {
          return (
            <li key={cast.id}>
              {(cast.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                  alt={`${cast.name}`}
                  width="190"
                />
              )) || (
                <img
                  src={`https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png`}
                  alt={`${cast.name}`}
                  width="190"
                  height="285"
                />
              )}

              <p>Name: {cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          );
        })}
    </ListCast>
  );
}
