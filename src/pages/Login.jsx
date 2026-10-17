
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faEye,
  faEyeSlash,
  faLeaf,
  faLock,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { getRegisteredUsers } from '../utils/auth';

function Login({ onLogin }) {
  const location = useLocation();

  const [identifier, setIdentifier] = useState(location.state?.email || '');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(location.state?.message || '');

  const inputClass =
    'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-4 focus:ring-green-100';

  function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!identifier.trim() || !password) {
      setError('Enter your username or email address and password.');
      return;
    }

    const searchValue = identifier.trim().toLowerCase();

    const user = getRegisteredUsers().find(
      (account) =>
        account.username.toLowerCase() === searchValue ||
        account.email.toLowerCase() === searchValue
    );

    if (!user || user.password !== password) {
      setError('The username, email or password is incorrect.');
      return;
    }

    onLogin(user);
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-sky-50 px-5 py-14 sm:py-20">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-white bg-white shadow-2xl shadow-slate-900/10 lg:grid-cols-2">
        <div className="flex flex-col justify-between bg-gradient-to-br from-green-900 via-green-800 to-green-600 p-8 text-white sm:p-12">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl">
              <FontAwesomeIcon icon={faLeaf} />
            </span>
            <h1 className="mt-8 text-3xl font-black leading-tight sm:text-4xl">
              Welcome back.
            </h1>
            <p className="mt-4 max-w-sm leading-7 text-green-50">
              Sign in to return to your personal space and continue where you
              left off.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-white/15 bg-white/10 p-5">
            <FontAwesomeIcon icon={faLock} className="text-xl text-green-200" />
            <h2 className="mt-3 font-bold">Your account, your space</h2>
            <p className="mt-2 text-sm leading-6 text-green-50">
              Your dashboard will display the account details associated with
              your sign-in.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-800">
            <FontAwesomeIcon icon={faRightToBracket} className="text-xl" />
          </div>

          <h2 className="mt-5 text-2xl font-black text-slate-950 sm:text-3xl">
            Sign in to My One
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Enter the details you used when registering.
          </p>

          {success && (
            <div
              role="status"
              className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
            >
              {success}
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div>
              <label
                htmlFor="identifier"
                className="text-sm font-semibold text-slate-700"
              >
                Username or email
              </label>
              <input
                id="identifier"
                type="text"
                autoComplete="username"
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
                placeholder="Enter username or email"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label
                htmlFor="loginPassword"
                className="text-sm font-semibold text-slate-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="loginPassword"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  className={`${inputClass} pr-12`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-slate-400 hover:text-green-700"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-700 px-5 py-3.5 font-bold text-white shadow-lg shadow-green-900/10 transition hover:bg-green-800"
            >
              Sign in
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-slate-500">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="font-bold text-green-800 hover:text-green-600"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
