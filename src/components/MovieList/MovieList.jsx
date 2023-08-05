import { useLocation, Link } from 'react-router-dom';
import css from './movieList.module.css';
import noMovieImg from 'img/no-poster-available.jpg';

function MovieList({ movies }) {
  const location = useLocation();
  console.log(movies);

  return (
    <ul className={css.listOfMovies}>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <div className={css.card}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <div className={css.imgWrap}>
                  {movie.poster_path ? (
                    <img
                      className={css.img}
                      alt={movie.original_title}
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                  ) : (
                    <img
                      className={css.noImg}
                      src={noMovieImg}
                      alt="not available"
                    />
                  )}
                </div>
                <p className={css.title}>{movie.title}</p>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
export default MovieList;
