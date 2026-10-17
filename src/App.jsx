
import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const USERS_KEY = 'myone_users';
const SESSION_KEY = 'myone_current_user';

export function getRegisteredUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveRegisteredUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getSavedUser() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

function App() {
  const [currentUser, setCurrentUser] = useState(getSavedUser);
  const navigate = useNavigate();

  function handleLogin(user) {
    const sessionUser = {
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setCurrentUser(sessionUser);
    navigate('/dashboard');
  }

  function handleLogout() {
    localStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
    navigate('/');
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      <Navbar currentUser={currentUser} onLogout={handleLogout} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing currentUser={currentUser} />} />
          <Route
            path="/register"
            element={
              currentUser ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Register />
              )
            }
          />
          <Route
            path="/login"
            element={
              currentUser ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              currentUser ? (
                <Dashboard user={currentUser} onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
