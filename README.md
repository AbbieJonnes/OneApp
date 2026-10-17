
# OneApp

### A simpler digital experience, all in one place.

OneApp is a responsive web application inspired by the convenience of modern digital self-service platforms. It brings account registration, sign-in, and a personalized dashboard into one clean and accessible interface.

The project focuses on creating a user-friendly experience with a modern design, responsive layouts, and straightforward navigation.

## Features

- **Landing Page** — Introduces the platform with a modern layout, clear calls to action, and a responsive design.
- **User Registration** — Provides a registration form for a user's full name, username, email address, phone number, and password.
- **User Login** — Allows registered users to sign in using their username or email address and password.
- **Personalized Dashboard** — Displays the signed-in user's profile information and a personalized welcome message.
- **Protected Routes** — Redirects unauthenticated visitors to the login page when they attempt to access the dashboard.
- **Session Persistence** — Uses browser local storage to preserve the current signed-in user's session across page refreshes.
- **Logout** — Allows users to end their current local session.
- **Responsive Navigation** — Provides navigation for desktop and mobile screen sizes.
- **Reusable Components** — Uses shared components such as the navigation bar and footer.
- **Social Media Links** — Includes links to social platforms in the footer.
- **Responsive Styling** — Uses Tailwind CSS to create a consistent interface across different screen sizes.

## Technology Stack

### Frontend

- React — Component-based user interface development.
- Vite — Development server and frontend build tooling.
- JavaScript — Application logic and interactivity.
- Tailwind CSS v4 — Utility-first styling and responsive layouts.
- React Router — Client-side routing and navigation.
- Font Awesome — Icons for navigation, actions, and social links.
- Browser Local Storage — Stores local registration data and the current session.

## Project Structure

```text
OneApp/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   └── Dashboard.jsx
│   ├── utils/
│   │   └── auth.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Getting Started

Follow these steps to run OneApp on your local machine.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git (optional, for version control)

### 1. Clone the Repository

If you have pushed the project to GitHub, clone it using:

```bash
git clone <your-repository-url>
```

Navigate into the project directory:

```bash
cd OneApp
```

If you already have the project on your computer, open the existing `OneApp` folder instead.

### 2. Install Dependencies

Run the following command in the project root:

```bash
npm install
```

### 3. Start the Development Server

Run:

```bash
npm run dev
```

Vite will display a local URL in your terminal. Open that URL in your browser to access the application.

### 4. Build for Production

To create an optimized production build, run:

```bash
npm run build
```

### 5. Preview the Production Build

To preview the generated build locally, run:

```bash
npm run preview
```

## Application Routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/register` | User registration |
| `/login` | User sign-in |
| `/dashboard` | Personalized dashboard for signed-in users |

The application uses React Router to navigate between pages without requiring a full page reload.

## Authentication Flow

The current frontend authentication flow works as follows:

1. A new user enters their details on the registration page.
2. The application saves the registration information in browser local storage.
3. The user signs in using their registered username or email address and password.
4. The application checks the entered credentials against the locally stored registration information.
5. After successful sign-in, the user is redirected to their personalized dashboard.
6. The current session remains available after a page refresh.
7. The user can log out to clear the current local session.

### Important Security Consideration

OneApp currently implements a **frontend-only authentication flow**. It does not use a backend server, a database, or a server-side authentication service.

Browser local storage is not secure storage for passwords or sensitive personal information. The current authentication flow is intended for frontend development and learning, not for protecting real user accounts.

A production-ready implementation would require a backend authentication service, secure password hashing, server-side credential verification, appropriate session management, and additional security controls.

## Design Approach

The interface follows a modern, responsive design approach, with:

- Green, white, and blue visual accents.
- Clear typography and visual hierarchy.
- Responsive layouts for desktop and mobile devices.
- Consistent spacing, borders, and rounded components.
- Reusable navigation and footer components.
- Accessible labels and recognizable interface icons.

## Future Improvements

Potential improvements include:

- Integrating a backend API.
- Implementing secure authentication and password hashing on the server.
- Adding database-backed user accounts.
- Adding password recovery and email verification.
- Expanding dashboard functionality.
- Adding automated tests and deployment workflows.
- Improving accessibility and form validation.

**Abigael Mwangi**

GitHub: [AbbieJonnes](https://github.com/AbbieJonnes)

---

## Live Website
[Visit OneApp](https://abbiejonnes.github.io/OneApp/)

OneApp is a responsive web application inspired by the convenience of modern digital self-service platforms. It brings account registration, sign-in, and a personalized dashboard into one clean and accessible interface.


&copy; 2026 Abigael Mwangi. All rights reserved.
