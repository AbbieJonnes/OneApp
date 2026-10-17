
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileScreenButton,
  faWifi,
  faWallet,
  faShieldHalved,
  faArrowRight,
  faSignal,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faMobileScreenButton,
    title: 'Manage your line',
    description: 'Keep your mobile account information close at hand.',
  },
  {
    icon: faWifi,
    title: 'Stay connected',
    description: 'View sample data bundles and connectivity information.',
  },
  {
    icon: faWallet,
    title: 'Track your balance',
    description: 'See your sample airtime and account balances in one place.',
  },
  {
    icon: faShieldHalved,
    title: 'Your account',
    description: 'Access your personal dashboard after signing in.',
  },
];

export default function Landing() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <FontAwesomeIcon icon={faSignal} />
            YOUR DIGITAL LIFE, SIMPLIFIED
          </div>

          <h1>
            Everything connected.
            <span> All in one place.</span>
          </h1>

          <p className="hero-description">
            A simpler way to explore your mobile account, view your
            services and keep your everyday essentials within reach.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="button button-primary">
              Get started
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/login" className="button button-outline">
              Sign in
            </Link>
          </div>

          <div className="hero-note">
            <FontAwesomeIcon icon={faCheckCircle} />
            Simple. Convenient. Connected.
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="phone-card">
            <div className="phone-top">
              <span>myone</span>
              <span className="online-dot" />
            </div>

            <div className="phone-greeting">
              <span>YOUR ACCOUNT</span>
              <h2>Welcome back</h2>
              <p>Your connections at a glance.</p>
            </div>

            <div className="sample-balance">
              <span>Sample airtime balance</span>
              <h2>KES 850.00</h2>
              <span className="balance-caption">Demo information</span>
            </div>

            <div className="phone-services">
              <div className="phone-service">
                <span className="service-icon green-bg">
                  <FontAwesomeIcon icon={faMobileScreenButton} />
                </span>
                <span>
                  <strong>My line</strong>
                  <small>Account details</small>
                </span>
              </div>

              <div className="phone-service">
                <span className="service-icon blue-bg">
                  <FontAwesomeIcon icon={faWifi} />
                </span>
                <span>
                  <strong>Data bundles</strong>
                  <small>Stay connected</small>
                </span>
              </div>

              <div className="phone-service">
                <span className="service-icon orange-bg">
                  <FontAwesomeIcon icon={faWallet} />
                </span>
                <span>
                  <strong>My account</strong>
                  <small>View your overview</small>
                </span>
              </div>
            </div>

            <div className="phone-footer">
              <span className="phone-footer-dot" />
              A little more convenience, every day.
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-icon">
              <FontAwesomeIcon icon={faShieldHalved} />
            </span>
            <span>
              <strong>One simple space</strong>
              <small>Your account, organised</small>
            </span>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-check">
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>
            Easy access, anytime
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-heading">
          <span className="section-kicker">MADE FOR CONVENIENCE</span>
          <h2>Your everyday essentials, simplified.</h2>
          <p>
            Explore a clean, easy-to-use space for your mobile account.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="section-kicker">READY WHEN YOU ARE</span>
          <h2>Your next step starts here.</h2>
          <p>Create a demo account and explore your dashboard.</p>
        </div>
        <Link to="/register" className="button button-white">
          Create account
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </section>

      <footer className="site-footer">
        <Link to="/" className="brand footer-brand">
          <span className="brand-icon">
            <FontAwesomeIcon icon={faMobileScreenButton} />
          </span>
          <span>my<span className="brand-green">one</span></span>
        </Link>
        <p>
          Independent design demonstration. Not an official Safaricom
          application. All account information shown is illustrative.
        </p>
        <span>&copy; 2026 MyOne Demo</span>
      </footer>
    </main>
  );
}
