import { useState} from 'react';
import css from './searchMovie.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

 function SearchMovies ({onSubmit}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const normalizedQuery = value.trim().toLowerCase();
    if (!normalizedQuery) {
      toast.warning('The query is empty! Try again.');
      return;
    }
    onSubmit(normalizedQuery);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  const clearInput = () => {
    setValue('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        {' '}
        <button
          type="button"
          className={css.searchFormButton}
          onClick={clearInput}
        >
         🗑️
          
        </button>
        <button type="submit" className={css.searchFormButton}>
        🔍 
        </button>
        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchMovies;