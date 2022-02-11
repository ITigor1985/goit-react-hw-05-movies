import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/publicationsApi';

export default function Reviews() {
  let { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        if (reviews.length !== 0) {
          return;
        }
        const { results, total_results } = await getMovieReviews(movieId);

        if (total_results === 0) {
          return;
        }

        const review = results.map(({ id, author, content }) => {
          return { id, author, content };
        });

        setReviews(review);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId, reviews]);

  return (
    <>
      <ul>
        {reviews &&
          reviews.map(review => {
            return (
              <li key={review.id}>
                <p>Name: {review.author}</p>
                <p>Character: {review.content}</p>
              </li>
            );
          })}
      </ul>
      {reviews && reviews.length === 0 && (
        <p>Sorry, no reviews for this movie</p>
      )}
    </>
  );
}
