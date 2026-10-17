
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLeaf,
  faEnvelope,
  faLock,
  faArrowRight,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ email: '', password: '' });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('myone_users') || '[]');
    const email = form.email.trim().toLowerCase();

    const foundUser = users.find(
      (user) => user.email === email && user.password === form.password
    );

    if (!foundUser) {
      setError('Incorrect email or password. Please try again.');
      return;
    }

    onLogin({
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      phone: foundUser.phone,
    });

    navigate('/dashboard');
  }

  return (
    <main className="auth-page">
      <div className="auth-decoration auth-decoration-one" />
      <div className="auth-decoration auth-decoration-two" />

      <section className="auth-card">
        <Link to="/" className="brand auth-brand">
          <span className="brand-icon">
            <FontAwesomeIcon icon={faLeaf} />
          </span>
          <span>my<span className="brand-green">one</span></span>
        </Link>

        <div className="auth-heading">
          <span className="section-kicker">WELCOME BACK</span>
          <h1>Sign in to your account</h1>
          <p>Enter your details to continue to your dashboard.</p>
        </div>

        {error && <div className="form-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <label htmlFor="email">Email address</label>
          <div className="input-wrap">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <label htmlFor="password">Password</label>
          <div className="input-wrap">
            <FontAwesomeIcon icon={faLock} />
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <button type="submit" className="button button-primary auth-submit">
            Sign in
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Create one</Link>
        </p>

        <p className="auth-disclaimer">
          This is a demonstration. Account data is stored in this browser.
        </p>
      </section>
    </main>
  );
}
