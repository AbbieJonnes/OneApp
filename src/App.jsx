
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function AppContent() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('myone_current_user')) || null;
    } catch {
      return null;
    }
  });

  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  function saveSession(account) {
    localStorage.setItem('myone_current_user', JSON.stringify(account));
    setUser(account);
  }

  function logout() {
    localStorage.removeItem('myone_current_user');
    setUser(null);
  }

  return (
    <>
      {!isAuthPage && (
        <Navbar user={user} onLogout={logout} />
      )}

      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/register"
          element={
            user ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Register onRegister={saveSession} />
            )
          }
        />

        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login onLogin={saveSession} />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard user={user} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
