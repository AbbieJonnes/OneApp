
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBolt,
  faChartLine,
  faCircleCheck,
  faLock,
  faMobileScreenButton,
  faUserShield,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faMobileScreenButton,
    title: 'Everything in one place',
    description:
      'Explore a simple dashboard designed to bring important account information together.',
  },
  {
    icon: faLock,
    title: 'Account access',
    description:
      'Sign in to your personal space and see information associated with your account.',
  },
  {
    icon: faBolt,
    title: 'A simpler experience',
    description:
      'Navigate your services through a clean, responsive and easy-to-use interface.',
  },
];

function Landing({ currentUser }) {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate bg-gradient-to-br from-green-50 via-white to-sky-50">
        <div className="pointer-events-none absolute -right-24 -top-20 -z-10 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 -z-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              Your digital world, connected
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              One place.
              <span className="block text-green-700">
                A simpler way forward.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Welcome to My One, a streamlined digital experience built to
              make account access and service navigation feel effortless.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={currentUser ? '/dashboard' : '/register'}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-green-800"
              >
                {currentUser ? 'Go to dashboard' : 'Get started'}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>

              {!currentUser && (
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-800 transition hover:border-green-300 hover:bg-green-50"
                >
                  I already have an account
                </Link>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-green-700"
                />
                Simple navigation
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-green-700"
                />
                Personalised dashboard
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-green-300/30 to-sky-300/30 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white bg-white p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Your personal space
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold text-slate-900">
                    My One overview
                  </h2>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                  <FontAwesomeIcon icon={faChartLine} className="text-xl" />
                </span>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-green-800 to-green-600 p-6 text-white">
                <p className="text-sm text-green-100">
                  {currentUser ? 'Welcome back' : 'Your experience starts here'}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold">
                  {currentUser ? currentUser.fullName : 'Everything connected.'}
                </h3>
                <p className="mt-2 text-sm leading-6 text-green-50">
                  {currentUser
                    ? 'Your personal dashboard is ready.'
                    : 'Create an account to access your personal dashboard.'}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-50">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  {currentUser ? 'You are signed in' : 'A simple place to begin'}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                    <FontAwesomeIcon icon={faWallet} />
                  </span>
                  <h3 className="mt-3 font-bold text-slate-900">
                    Account
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    Your details in one place.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <FontAwesomeIcon icon={faUserShield} />
                  </span>
                  <h3 className="mt-3 font-bold text-slate-900">
                    Personal space
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    Access your own dashboard.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-slate-100 px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                  <FontAwesomeIcon icon={faBolt} />
                </span>
                <p className="text-sm text-slate-600">
                  A clean experience, built around you.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Made for simplicity
                </p>
                <p className="text-xs text-slate-500">
                  Clear, connected, convenient
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            A better experience
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Everything starts with simplicity.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            A thoughtfully designed interface that helps you get where you
            need to go without unnecessary complexity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl ${
                  index === 1
                    ? 'bg-sky-100 text-sky-700'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                <FontAwesomeIcon icon={feature.icon} />
              </span>
              <h3 className="mt-6 text-lg font-extrabold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-green-800 to-green-600 p-8 text-white sm:p-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black sm:text-3xl">
              Ready to get started?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-green-50">
              Create your account and explore your own personalised dashboard.
            </p>
          </div>
          <Link
            to={currentUser ? '/dashboard' : '/register'}
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 font-bold text-green-800 transition hover:bg-green-50"
          >
            {currentUser ? 'Open dashboard' : 'Create account'}
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Landing;
