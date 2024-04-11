import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'api/api';
import { useParams } from 'react-router-dom';
import { ReviewListItem } from './ReviewListItem';

const ReviewsList = () => {
  const {movieId} = useParams();
  const [review, setReview] = useState([]);

  const fetchReview = async () => {
    try {
      const response = await fetchMovieReviews(movieId);
      setReview(response)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchReview();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <>
      {review.length !== 0 ? (
        <div>
          <h2>Reviews</h2>
          <ul>
            {review.map(({ id, author_details, author, content }) => (
              <ReviewListItem
                key={id}
                id={id}
                avatarPath={author_details.avatar_path}
                author={author}
                content={content}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div>We don't have any review for this movie.</div>
      )}
    </>
  );
};

export default ReviewsList;