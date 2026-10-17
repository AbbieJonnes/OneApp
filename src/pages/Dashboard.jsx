
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBell,
  faCircleCheck,
  faEnvelope,
  faGear,
  faMobileScreenButton,
  faShieldHalved,
  faUser,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';

function Dashboard({ user, onLogout }) {
  const firstName = user.fullName.trim().split(/\s+/)[0];

  const services = [
    {
      icon: faUser,
      title: 'Personal information',
      description: 'View the name and username associated with your account.',
      color: 'bg-green-100 text-green-800',
    },
    {
      icon: faMobileScreenButton,
      title: 'Contact details',
      description: 'Review the phone number you entered during registration.',
      color: 'bg-sky-100 text-sky-800',
    },
    {
      icon: faBell,
      title: 'Notifications',
      description: 'Your space for account updates and notices.',
      color: 'bg-amber-100 text-amber-800',
    },
    {
      icon: faGear,
      title: 'Account settings',
      description: 'Review the information associated with your account.',
      color: 'bg-violet-100 text-violet-800',
    },
  ];

  return (
    <section className="min-h-[70vh] bg-slate-50 px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Welcome banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-900 via-green-800 to-green-600 p-7 text-white shadow-lg sm:p-10">
          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="pointer-events-none absolute bottom-0 right-40 h-24 w-24 rounded-full bg-white/5" />

          <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-green-50">
                <FontAwesomeIcon icon={faCircleCheck} />
                Signed in successfully
              </div>

              <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                Welcome, {firstName}!
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-green-50">
                It's good to have you here. Your personal My One dashboard is
                ready for you.
              </p>
            </div>

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-4xl">
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
          </div>
        </div>

        {/* Account information */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                <FontAwesomeIcon icon={faUser} className="text-lg" />
              </span>

              <div className="min-w-0">
                <p className="text-sm text-slate-500">Full name</p>
                <p className="break-words font-bold text-slate-900">
                  {user.fullName}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-800">
                <FontAwesomeIcon icon={faCircleUser} className="text-lg" />
              </span>

              <div className="min-w-0">
                <p className="text-sm text-slate-500">Username</p>
                <p className="break-words font-bold text-slate-900">
                  @{user.username}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-800">
                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
              </span>

              <div className="min-w-0">
                <p className="text-sm text-slate-500">Email address</p>
                <p className="break-all font-bold text-slate-900">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Your space
          </p>

          <h2 className="mt-2 text-2xl font-black text-slate-950">
            Account overview
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Explore the sections available in your dashboard.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg hover:shadow-slate-900/5"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.color}`}
                >
                  <FontAwesomeIcon icon={service.icon} className="text-lg" />
                </span>

                <h3 className="mt-5 font-extrabold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Account actions */}
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
              <FontAwesomeIcon icon={faShieldHalved} />
            </span>

            <div>
              <h3 className="font-bold text-slate-900">Your account</h3>
              <p className="mt-1 break-all text-sm leading-6 text-slate-500">
                Signed in as {user.email}. You can sign out whenever you're
                finished.
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Phone: {user.phone || 'Not provided'}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Home
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>

            <button
              type="button"
              onClick={onLogout}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
