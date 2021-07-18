import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="menu mx-3 flex-grow-1">
      <ul className="d-flex justify-content-start align-items-center">
        <li className="me-3 px-2">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="me-3 px-2">
          <Link to="/tvshows">TV Shows</Link>
        </li>
        <li className="me-3 px-2">
          <Link to="/people">People</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
