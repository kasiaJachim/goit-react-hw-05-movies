import css from './movieDetails.module.css'
import {  Suspense, useEffect, useState } from 'react';
import { fetchMovieDetails } from 'utils/Api';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import noMovieImg from 'img/no-poster-available.jpg';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!id) return;

    fetchMovieDetails(id).then(details => setMovie(details));
  }, [id]);
  if (!movie) {
    return null;
  }

const backLink = location.state?.from ?? '/movies';

  return (
    <main>
      <button>
        <Link to={backLink}>Go Back</Link>
      </button>
      <div className={css.wrapper}>
        {movie && (
          <div className={css.container}>
             <div className={css.imgWrap}>
            {movie.poster_path ? (
              <img
                className={css.img}
                alt={movie.original_title}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ) : (
              <img className={css.img} src={noMovieImg} alt="not available" />
            )}
</div>
            <div>
              <div className={css.title}>
                <h2>{movie.title}</h2>
                <p>({parseInt(movie.release_date)})</p>
              </div>
              <p>User Score: {~~(movie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{`${movie.overview}`}</p>
              <h3>Genres</h3>
              <p>{`${movie.genres
                .map(genre => genre.name)
                .join(' / ')}`}</p>
            </div>
          </div>
        )}
        <hr />
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#b92121' : 'inherit',
              })}
              to="cast"
              state={{ from: backLink }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#b92121' : 'inherit',
              })}
              to="reviews"
              state={{ from: backLink }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}

export default MovieDetails;
