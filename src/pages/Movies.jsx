import MovieList from 'components/MovieList/MovieList';
import SearchMovies from 'components/SearchMovie/SearchMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from 'utils/Api';

function Movies() {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieToSearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieToSearch) return;

    fetchByQuery(movieToSearch).then(data => setSearchedMovies(data.results));
  }, [movieToSearch]);

  const handleSubmit = async newQuery => {
    setSearchParams({ query: newQuery });
  };

  return (
    <>
      <header>
        <SearchMovies onSubmit={handleSubmit} />
      </header>
      <main>{searchedMovies && <MovieList movies={searchedMovies} />}</main>
    </>
  );
}
export default Movies;
