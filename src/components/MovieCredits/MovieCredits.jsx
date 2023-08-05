import { useEffect, useState } from 'react';
import css from './movieCredits.module.css';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'utils/Api';
import userImg from 'img/user.jpg';

function MovieCredits() {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetchMovieCredits(id).then(cast => setCast(cast));
  }, [id]);
  if (!cast) return;

  return (
    <>
      <hr />
      <ul className={css.cast}>
        {cast &&
          cast.map(item => {
            return (
              <li className={css.item} key={item.id}>
                {item.profile_path ? (
                  <img
                    className={css.listImg}
                    alt={item.name}
                    src={`https://image.tmdb.org/t/p/w92${item.profile_path}`}
                  />
                ) : (
                  <img
                    className={css.listImg}
                    alt={item.name}
                    src={userImg}
                    width="130px"
                  />
                )}
                <p>{item.name}</p>
                <p>
                  <span>Character:</span> {item.character}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
export default MovieCredits;
