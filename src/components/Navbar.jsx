
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faLeaf,
  faRightFromBracket,
  faCircleUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

function Navbar({ currentUser, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-green-50 text-green-800'
        : 'text-slate-600 hover:bg-slate-50 hover:text-green-800'
    }`;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5">
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

        {/* Desktop navigation */}
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
                  icon={faCircleUser}
                  className="text-green-700"
                />
                {currentUser.username}
              </span>

              <button
                type="button"
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

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-green-50 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={linkClass}
            >
              Home
            </NavLink>

            {currentUser ? (
              <>
                <NavLink
                  to="/dashboard"
                  onClick={closeMenu}
                  className={linkClass}
                >
                  Dashboard
                </NavLink>

                <div className="flex items-center gap-2 px-3 py-2 text-sm text-slate-500">
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    className="text-green-700"
                  />
                  Signed in as {currentUser.username}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    onLogout();
                  }}
                  className="flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-3 text-left font-semibold text-white transition hover:bg-green-800"
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className={linkClass}
                >
                  Login
                </NavLink>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="rounded-xl bg-green-700 px-3 py-3 text-center font-semibold text-white transition hover:bg-green-800"
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
