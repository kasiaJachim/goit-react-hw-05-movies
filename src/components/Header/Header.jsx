import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  return (
    <nav className={css.navigation}>
      <NavLink
        end
        style={({ isActive }) => ({ color: isActive ? '#fff' : 'inherit' })}
        className={css.link}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        style={({ isActive }) => ({ color: isActive ? '#fff' : 'inherit' })}
        className={css.link}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}
export default Header;
