// ROUTER
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "btn nav__btn" + (isActive ? " nav__btn--active" : "")
              }
            >
              Books
            </NavLink>
          </li>

          <li className="nav__list-item">
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                "btn nav__btn" + (isActive ? " nav__btn--active" : "")
              }
            >
              Stats
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
