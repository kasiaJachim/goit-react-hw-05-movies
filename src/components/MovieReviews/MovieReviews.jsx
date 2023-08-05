import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'utils/Api';

function MovieReviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!id) return;

    fetchMovieReviews(id).then(reviews => setReviews(reviews));
  }, [id]);
  if (reviews.length === 0) {
    return <p>No results</p>;
  }
  return (
    <div>
      <hr />
      {reviews.length > 0 ? (
        <>
          <ul>
            {reviews.map(item => {
              return (
                <li key={item.id}>
                  <h3>{item.author}</h3>
                  <p>{item.content}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <h3>There are no reviews yet</h3>
      )}
    </div>
  );
}
export default MovieReviews;
