
import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {
  clearCurrentUser,
  getSavedUser,
  saveCurrentUser,
} from './utils/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getSavedUser);
  const navigate = useNavigate();

  function handleLogin(user) {
    const sessionUser = saveCurrentUser(user);
    setCurrentUser(sessionUser);
    navigate('/dashboard', { replace: true });
  }

  function handleLogout() {
    clearCurrentUser();
    setCurrentUser(null);
    navigate('/', { replace: true });
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
