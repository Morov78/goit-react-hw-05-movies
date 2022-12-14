import { fetchReviewsMovieById } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from './MovieItemReviews.styled';

const MovieItemReviews = () => {
  const [reviews, setReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!!reviews) {
      return;
    }

    fetchReviewsMovieById(movieId).then(data =>
      setReviews(data.data.results || [])
    );
  }, [movieId, reviews]);

  if (!reviews) {
    return;
  }

  return (
    <List>
      {reviews.length === 0 && (
        <div>We don't have ant reviews for this movie.</div>
      )}
      {reviews.map(({ author, content }, index) => {
        return (
          <li key={index}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </List>
  );
};

export default MovieItemReviews;
