
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLeaf,
  faUser,
  faEnvelope,
  faPhone,
  faLock,
  faArrowRight,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

export default function Register({ onRegister }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (form.name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }

    if (form.password.length < 6) {
      setError('Your password must have at least 6 characters.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('myone_users') || '[]');
    const email = form.email.trim().toLowerCase();

    if (users.some((user) => user.email === email)) {
      setError('An account with this email already exists. Please log in.');
      return;
    }

    const newUser = {
      id: Date.now(),
      name: form.name.trim(),
      email,
      phone: form.phone.trim(),
      password: form.password,
    };

    users.push(newUser);
    localStorage.setItem('myone_users', JSON.stringify(users));

    onRegister({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
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
          <span className="section-kicker">GET STARTED</span>
          <h1>Create your account</h1>
          <p>Set up your demo account in just a few steps.</p>
        </div>

        {error && <div className="form-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <label htmlFor="name">Full name</label>
          <div className="input-wrap">
            <FontAwesomeIcon icon={faUser} />
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </div>

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

          <label htmlFor="phone">Phone number</label>
          <div className="input-wrap">
            <FontAwesomeIcon icon={faPhone} />
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="e.g. 0712345678"
              autoComplete="tel"
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
              placeholder="At least 6 characters"
              autoComplete="new-password"
              minLength={6}
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
            Create account
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>

        <p className="auth-disclaimer">
          Demo application only. Do not use a real or reused password.
        </p>
      </section>
    </main>
  );
}
