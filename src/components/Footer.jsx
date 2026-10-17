
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { name: 'X', href: 'https://x.com/', icon: faXTwitter },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: faInstagram,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: faFacebookF,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: faYoutube,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: faLinkedinIn,
  },
];

const externalLinks = [
  {
    label: 'Safaricom website',
    href: 'https://www.safaricom.co.ke/',
  },
  {
    label: 'About Safaricom',
    href: 'https://www.safaricom.co.ke/about/',
  },
  {
    label: 'Contact Safaricom',
    href: 'https://www.safaricom.co.ke/contact-us/',
  },
];

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-lg font-black text-white">
              m
            </span>

            <span className="text-2xl font-extrabold text-white">
              my<span className="text-green-400">one</span>
            </span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            A simpler way to bring your digital services and account
            information together in one place.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.name}`}
                title={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition hover:border-green-500 hover:bg-green-700 hover:text-white"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Internal links */}
        <div>
          <h3 className="font-bold text-white">Explore</h3>

          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/" className="transition hover:text-green-400">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="transition hover:text-green-400"
              >
                Create an account
              </Link>
            </li>

            <li>
              <Link to="/login" className="transition hover:text-green-400">
                Sign in
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="transition hover:text-green-400"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* External websites */}
        <div>
          <h3 className="font-bold text-white">Useful links</h3>

          <ul className="mt-4 space-y-3 text-sm">
            {externalLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-green-400"
                >
                  {item.label}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-xs"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-white">Get in touch</h3>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            Have a question about this website?
          </p>

          <a
            href="mailto:abigaelmwangi534@gmail.com"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-green-400 transition hover:text-green-300"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Email us
          </a>

          <a
            href="mailto:humphreychahale99@gmail.com"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-green-400 transition hover:text-green-300"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            humphreychahale99@gmail.com
          </a>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            This is an independent frontend project
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} My One. All rights reserved.
          </p>

          <p>Designed for a simpler digital experience.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
