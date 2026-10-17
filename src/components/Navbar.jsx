
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faLeaf,
  faArrowRightFromBracket,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function logout() {
    onLogout();
    setMenuOpen(false);
    navigate('/login');
  }

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">
          <FontAwesomeIcon icon={faLeaf} />
        </span>
        <span>my<span className="brand-green">one</span></span>
      </Link>

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        {user ? (
          <>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
            <span className="nav-user">
              <FontAwesomeIcon icon={faUserCircle} />
              {user.name.split(' ')[0]}
            </span>
            <button className="nav-logout" onClick={logout}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              Logout
            </button>
          </>
        ) : (
          <>
            <a href="/#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link
              to="/register"
              className="nav-register"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
