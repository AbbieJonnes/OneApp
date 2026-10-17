
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileScreenButton,
  faWifi,
  faWallet,
  faPhone,
  faArrowUpRightFromSquare,
  faClockRotateLeft,
  faShieldHalved,
  faCircleCheck,
  faChevronRight,
  faBell,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: faMobileScreenButton,
    title: 'My line',
    description: 'View your mobile account',
    color: 'green-bg',
  },
  {
    icon: faWifi,
    title: 'Data bundles',
    description: 'Explore connectivity',
    color: 'blue-bg',
  },
  {
    icon: faWallet,
    title: 'My balances',
    description: 'View sample balances',
    color: 'orange-bg',
  },
  {
    icon: faPhone,
    title: 'My number',
    description: 'Your account details',
    color: 'purple-bg',
  },
];

export default function Dashboard({ user }) {
  const firstName = user.name.split(' ')[0];

  return (
    <main className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-topbar">
          <div>
            <span className="section-kicker">YOUR PERSONAL SPACE</span>
            <h1>Good to see you, {firstName}.</h1>
            <p>Here's your account overview at a glance.</p>
          </div>

          <button className="notification-button" aria-label="Notifications">
            <FontAwesomeIcon icon={faBell} />
            <span />
          </button>
        </div>

        <div className="dashboard-banner">
          <div className="banner-content">
            <span className="banner-label">WELCOME TO MYONE</span>
            <h2>Everything you need, in one place.</h2>
            <p>
              Your demo account is ready. Explore the features and
              discover a simpler way to view your account.
            </p>
            <span className="banner-status">
              <FontAwesomeIcon icon={faCircleCheck} />
              Account created successfully
            </span>
          </div>

          <div className="banner-art">
            <div className="banner-ring banner-ring-one" />
            <div className="banner-ring banner-ring-two" />
            <div className="banner-phone">
              <FontAwesomeIcon icon={faMobileScreenButton} />
              <span>myone</span>
              <div className="banner-phone-line" />
              <div className="banner-phone-line short-line" />
              <FontAwesomeIcon icon={faCircleCheck} className="banner-phone-check" />
            </div>
          </div>
        </div>

        <div className="dashboard-section-heading">
          <div>
            <h2>Your overview</h2>
            <p>Illustrative values for this demo.</p>
          </div>
          <span className="demo-badge">DEMO DATA</span>
        </div>

        <div className="balance-grid">
          <article className="balance-card">
            <div className="balance-card-top">
              <span className="balance-icon green-bg">
                <FontAwesomeIcon icon={faWallet} />
              </span>
              <FontAwesomeIcon icon={faEllipsis} className="muted-icon" />
            </div>
            <span className="balance-label">Airtime balance</span>
            <h3>KES 850.00</h3>
            <p>Sample account balance</p>
          </article>

          <article className="balance-card">
            <div className="balance-card-top">
              <span className="balance-icon blue-bg">
                <FontAwesomeIcon icon={faWifi} />
              </span>
              <FontAwesomeIcon icon={faEllipsis} className="muted-icon" />
            </div>
            <span className="balance-label">Data remaining</span>
            <h3>4.5 GB</h3>
            <p>Sample data allowance</p>
            <div className="progress-track">
              <div className="progress-fill" />
            </div>
          </article>

          <article className="balance-card">
            <div className="balance-card-top">
              <span className="balance-icon orange-bg">
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </span>
              <FontAwesomeIcon icon={faEllipsis} className="muted-icon" />
            </div>
            <span className="balance-label">Account status</span>
            <h3 className="status-value">Active</h3>
            <p>Demo account status</p>
          </article>
        </div>

        <div className="dashboard-lower-grid">
          <section className="dashboard-panel">
            <div className="panel-heading">
              <div>
                <h2>Quick services</h2>
                <p>Explore your account shortcuts.</p>
              </div>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="dashboard-service" key={service.title}>
                  <span className={`service-icon ${service.color}`}>
                    <FontAwesomeIcon icon={service.icon} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-arrow">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </article>
              ))}
            </div>

            <p className="feature-note">
              <FontAwesomeIcon icon={faShieldHalved} />
              Service cards are visual demonstrations only.
            </p>
          </section>

          <aside className="dashboard-panel account-panel">
            <div className="panel-heading">
              <div>
                <h2>My profile</h2>
                <p>Your registered details.</p>
              </div>
            </div>

            <div className="profile-summary">
              <div className="profile-avatar">
                {firstName.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3>{user.name}</h3>
                <span>Demo member</span>
              </div>
            </div>

            <div className="profile-detail">
              <span>EMAIL ADDRESS</span>
              <p>{user.email}</p>
            </div>

            <div className="profile-detail">
              <span>PHONE NUMBER</span>
              <p>{user.phone || 'Not provided'}</p>
            </div>

            <div className="profile-detail">
              <span>ACCOUNT TYPE</span>
              <p>MyOne Demo</p>
            </div>

            <Link to="/" className="profile-link">
              Back to homepage
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </aside>
        </div>

        <section className="dashboard-panel activity-panel">
          <div className="panel-heading">
            <div>
              <h2>Recent activity</h2>
              <p>Your account activity overview.</p>
            </div>
            <FontAwesomeIcon icon={faClockRotateLeft} className="muted-icon" />
          </div>

          <div className="activity-row">
            <span className="activity-icon green-bg">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <div className="activity-description">
              <h3>Account registered</h3>
              <p>Your profile was created successfully.</p>
            </div>
            <span className="activity-tag">Completed</span>
          </div>

          <div className="activity-row">
            <span className="activity-icon blue-bg">
              <FontAwesomeIcon icon={faShieldHalved} />
            </span>
            <div className="activity-description">
              <h3>Account access</h3>
              <p>You can view your dashboard and profile.</p>
            </div>
            <span className="activity-tag">Available</span>
          </div>
        </section>

        <footer className="dashboard-footer">
          <span>&copy; 2026 MyOne Demo</span>
          <span>Independent design demonstration</span>
        </footer>
      </div>
    </main>
  );
}
