
const USERS_KEY = 'myone_users';
const SESSION_KEY = 'myone_current_user';

export function getRegisteredUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
}

export function saveRegisteredUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getSavedUser() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  } catch {
    return null;
  }
}

export function saveCurrentUser(user) {
  const sessionUser = {
    username: user.username,
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
  return sessionUser;
}

export function clearCurrentUser() {
  localStorage.removeItem(SESSION_KEY);
}
