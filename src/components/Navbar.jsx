
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faLeaf,
  faRightFromBracket,
  faUserCircle,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Navbar({ currentUser, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-green-50 text-green-800'
        : 'text-slate-600 hover:bg-slate-50 hover:text-green-800'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-white shadow-sm">
            <FontAwesomeIcon icon={faLeaf} className="text-lg" />
          </span>
          <span>
            <span className="block text-xl font-extrabold tracking-tight text-slate-900">
              my<span className="text-green-700">one</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Everything connected
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          {currentUser ? (
            <>
              <NavLink to="/dashboard" className={linkClass}>
                Dashboard
              </NavLink>
              <span className="mx-2 h-7 w-px bg-slate-200" />
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="text-green-700"
                />
                {currentUser.username}
              </span>
              <button
                onClick={onLogout}
                className="ml-2 flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>
                Login
              </NavLink>
              <Link
                to="/register"
                className="ml-2 rounded-xl bg-green-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-green-800"
              >
                Get started
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 font-semibold hover:bg-green-50"
            >
              Home
            </Link>

            {currentUser ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 font-semibold hover:bg-green-50"
                >
                  Dashboard
                </Link>
                <p className="px-3 py-2 text-sm text-slate-500">
                  Signed in as {currentUser.username}
                </p>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onLogout();
                  }}
                  className="rounded-lg bg-slate-900 px-3 py-3 text-left font-semibold text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 font-semibold hover:bg-green-50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg bg-green-700 px-3 py-3 font-semibold text-white"
                >
                  Create account
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
