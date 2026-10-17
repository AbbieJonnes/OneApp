
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCheckCircle,
  faEye,
  faEyeSlash,
  faLeaf,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { getRegisteredUsers, saveRegisteredUsers } from '../App';

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setError('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    const fullName = form.fullName.trim();
    const username = form.username.trim();
    const email = form.email.trim().toLowerCase();
    const phone = form.phone.trim();

    if (!fullName || !username || !email || !phone || !form.password) {
      setError('Please complete all the required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.');
      return;
    }

    if (!/^[a-zA-Z0-9_.-]{3,20}$/.test(username)) {
      setError(
        'Your username must be 3–20 characters and use letters, numbers, dots, underscores or hyphens.'
      );
      return;
    }

    if (form.password.length < 8) {
      setError('Your password must contain at least 8 characters.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Your passwords do not match.');
      return;
    }

    const users = getRegisteredUsers();

    const usernameExists = users.some(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );

    const emailExists = users.some(
      (user) => user.email.toLowerCase() === email
    );

    if (usernameExists) {
      setError('That username is already registered. Choose another one.');
      return;
    }

    if (emailExists) {
      setError('An account with that email already exists.');
      return;
    }

    setLoading(true);

    try {
      saveRegisteredUsers([
        ...users,
        {
          fullName,
          username,
          email,
          phone,
          password: form.password,
        },
      ]);

      navigate('/login', {
        replace: true,
        state: {
          message: 'Your account has been created. You can now sign in.',
          email,
        },
      });
    } catch {
      setError('We could not save your account in this browser.');
      setLoading(false);
    }
  }

  const inputClass =
    'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-4 focus:ring-green-100';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-sky-50 px-5 py-12 sm:py-16">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-white bg-white shadow-2xl shadow-slate-900/10 lg:grid-cols-5">
        <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-600 p-8 text-white sm:p-10 lg:col-span-2 lg:p-12">
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full border-[35px] border-white/10" />
          <div className="pointer-events-none absolute right-8 top-28 h-20 w-20 rounded-full bg-white/5" />

          <div className="relative">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl">
              <FontAwesomeIcon icon={faLeaf} />
            </span>
            <h1 className="mt-8 text-3xl font-black leading-tight sm:text-4xl">
              Start your journey with My One.
            </h1>
            <p className="mt-4 leading-7 text-green-50">
              Create your personal account and enjoy a simple, organised
              digital experience.
            </p>
          </div>

          <div className="relative mt-10 space-y-4">
            {[
              'A personalised account',
              'Your own dashboard',
              'A simple sign-in experience',
            ].map((item) => (
              <p key={item} className="flex items-center gap-3 text-sm">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-200"
                />
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:col-span-3 lg:p-12">
          <div className="mb-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-800">
              <FontAwesomeIcon icon={faUserPlus} className="text-xl" />
            </div>
            <h2 className="mt-5 text-2xl font-black text-slate-950 sm:text-3xl">
              Create your account
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Enter your details below to get started.
            </p>
          </div>

          {error && (
            <div
              role="alert"
              className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="text-sm font-semibold text-slate-700">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                autoComplete="name"
                placeholder="Enter your full name"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="username" className="text-sm font-semibold text-slate-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                autoComplete="username"
                placeholder="Choose a username"
                className={inputClass}
                minLength={3}
                maxLength={20}
                required
              />
              <p className="mt-1.5 text-xs text-slate-400">
                3–20 characters. Letters, numbers, dots, underscores and hyphens.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  placeholder="07XX XXX XXX"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  className={`${inputClass} pr-12`}
                  minLength={8}
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

            <div>
              <label htmlFor="confirmPassword" className="text-sm font-semibold text-slate-700">
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={form.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  placeholder="Enter your password again"
                  className={`${inputClass} pr-12`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword ? 'Hide password' : 'Show password'
                  }
                  className="absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-slate-400 hover:text-green-700"
                >
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEyeSlash : faEye}
                  />
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-700 px-5 py-3.5 font-bold text-white shadow-lg shadow-green-900/10 transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Creating account...' : 'Create account'}
              {!loading && <FontAwesomeIcon icon={faArrowRight} />}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already registered?{' '}
            <Link
              to="/login"
              className="font-bold text-green-800 hover:text-green-600"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
