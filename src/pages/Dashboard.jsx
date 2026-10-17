
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faBell,
  faCheckCircle,
  faCircleUser,
  faClock,
  faCreditCard,
  faEnvelope,
  faEye,
  faEyeSlash,
  faGear,
  faMobileScreenButton,
  faMoneyBillTransfer,
  faPaperPlane,
  faReceipt,
  faShieldHalved,
  faUser,
  faWallet,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';

const sampleTransactions = [
  {
    id: 'MP001',
    title: 'Money received',
    description: 'Sample payment from a contact',
    date: 'Today, 10:42 AM',
    amount: 2500,
    type: 'received',
    status: 'Completed',
  },
  {
    id: 'MP002',
    title: 'Airtime purchase',
    description: 'Sample airtime purchase',
    date: 'Yesterday, 6:15 PM',
    amount: -100,
    type: 'sent',
    status: 'Completed',
  },
  {
    id: 'MP003',
    title: 'Shopping payment',
    description: 'Sample Buy Goods payment',
    date: 'Yesterday, 1:20 PM',
    amount: -650,
    type: 'sent',
    status: 'Completed',
  },
  {
    id: 'MP004',
    title: 'Money received',
    description: 'Sample payment from a contact',
    date: '16 Oct 2026, 9:05 AM',
    amount: 1200,
    type: 'received',
    status: 'Completed',
  },
];

const quickActions = [
  {
    title: 'Send money',
    description: 'Send money to a contact',
    icon: faPaperPlane,
    color: 'bg-green-100 text-green-800',
  },
  {
    title: 'Withdraw cash',
    description: 'Withdraw at an agent',
    icon: faMoneyBillTransfer,
    color: 'bg-sky-100 text-sky-800',
  },
  {
    title: 'Pay merchant',
    description: 'Pay with Buy Goods',
    icon: faCreditCard,
    color: 'bg-violet-100 text-violet-800',
  },
  {
    title: 'Pay a bill',
    description: 'Pay a Paybill number',
    icon: faReceipt,
    color: 'bg-amber-100 text-amber-800',
  },
];

const otherServices = [
  {
    title: 'Buy airtime',
    description: 'Top up your mobile line',
    icon: faMobileScreenButton,
    color: 'bg-green-100 text-green-800',
  },
  {
    title: 'Data bundles',
    description: 'Explore internet bundles',
    icon: faWifi,
    color: 'bg-sky-100 text-sky-800',
  },
  {
    title: 'Notifications',
    description: 'Stay updated with notices',
    icon: faBell,
    color: 'bg-amber-100 text-amber-800',
  },
  {
    title: 'Account settings',
    description: 'Review your account details',
    icon: faGear,
    color: 'bg-violet-100 text-violet-800',
  },
];

function Dashboard({ user, onLogout }) {
  const [showBalance, setShowBalance] = useState(true);
  const [activeAction, setActiveAction] = useState(null);
  const [showAllTransactions, setShowAllTransactions] = useState(false);

  const firstName = user.fullName.trim().split(/\s+/)[0];

  const transactions = showAllTransactions
    ? sampleTransactions
    : sampleTransactions.slice(0, 3);

  function openAction(title) {
    setActiveAction(title);
  }

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Welcome banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-950 via-green-800 to-emerald-600 p-6 text-white shadow-lg sm:p-10">
          <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="pointer-events-none absolute bottom-0 right-40 h-24 w-24 rounded-full bg-white/5" />

          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-green-50">
                <FontAwesomeIcon icon={faCheckCircle} />
                Your personal dashboard
              </div>

              <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                Welcome, {firstName}!
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-green-50 sm:text-base">
                Your services, account information and activity, all in one
                place.
              </p>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl sm:h-20 sm:w-20 sm:rounded-3xl sm:text-4xl">
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
          </div>
        </div>

        {/* Sample data notice */}
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <FontAwesomeIcon
            icon={faShieldHalved}
            className="mt-1 shrink-0"
          />
          <p>
            <span className="font-bold">Preview information:</span> The M-PESA
            balance and transactions below are fictional sample data. This
            website is not connected to your actual M-PESA account and cannot
            send or receive real money.
          </p>
        </div>

        {/* M-PESA balance */}
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 lg:col-span-2">
            <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-green-50" />

            <div className="relative flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-xl text-green-800">
                  <FontAwesomeIcon icon={faWallet} />
                </span>

                <div>
                  <h2 className="text-lg font-extrabold text-slate-900">
                    M-PESA
                  </h2>
                  <p className="text-sm text-slate-500">
                    Sample account overview
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                Sample data
              </span>
            </div>

            <div className="relative mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm font-medium text-slate-500">
                  Available balance
                </p>

                <button
                  type="button"
                  onClick={() => setShowBalance((previous) => !previous)}
                  aria-label={showBalance ? 'Hide balance' : 'Show balance'}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-green-800"
                >
                  <FontAwesomeIcon
                    icon={showBalance ? faEyeSlash : faEye}
                  />
                </button>
              </div>

              <p className="mt-2 break-words text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                {showBalance ? 'KSh 4,850.50' : 'KSh ••••••'}
              </p>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                Illustrative balance only. Not your real M-PESA balance.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {quickActions.map((action) => (
                <button
                  key={action.title}
                  type="button"
                  onClick={() => openAction(action.title)}
                  className="group flex min-w-0 flex-col items-center rounded-2xl border border-slate-200 p-3 text-center transition hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50 sm:p-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-lg text-green-800 transition group-hover:bg-green-700 group-hover:text-white">
                    <FontAwesomeIcon icon={action.icon} />
                  </span>

                  <span className="mt-3 text-xs font-bold leading-5 text-slate-800 sm:text-sm">
                    {action.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Account summary */}
          <div className="rounded-3xl bg-gradient-to-br from-sky-900 to-blue-700 p-6 text-white shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl">
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </div>

            <h2 className="mt-5 text-xl font-extrabold">Your account</h2>

            <p className="mt-2 text-sm leading-6 text-blue-100">
              Your registered contact information.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs text-blue-200">Full name</p>
                <p className="mt-1 break-words font-bold">{user.fullName}</p>
              </div>

              <div>
                <p className="text-xs text-blue-200">Phone number</p>
                <p className="mt-1 font-bold">
                  {user.phone || 'Not provided'}
                </p>
              </div>

              <div>
                <p className="text-xs text-blue-200">Email address</p>
                <p className="mt-1 break-all text-sm font-semibold">
                  {user.email}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openAction('Account settings')}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-blue-900 transition hover:bg-blue-50"
            >
              Account settings
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Transaction history */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                Your activity
              </p>

              <h2 className="mt-2 text-2xl font-black text-slate-950">
                Recent transactions
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Example money movements for the dashboard preview.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllTransactions((previous) => !previous)}
              className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-green-300 hover:bg-green-50"
            >
              {showAllTransactions ? 'Show less' : 'View all'}
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div className="mt-6 divide-y divide-slate-100">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      transaction.type === 'received'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={
                        transaction.type === 'received'
                          ? faArrowDown
                          : faArrowUp
                      }
                    />
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900">
                      {transaction.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {transaction.description}
                    </p>

                    <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                      <FontAwesomeIcon icon={faClock} />
                      {transaction.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                  <p
                    className={`text-base font-extrabold ${
                      transaction.type === 'received'
                        ? 'text-green-700'
                        : 'text-slate-900'
                    }`}
                  >
                    {transaction.amount > 0 ? '+' : '-'} KSh{' '}
                    {Math.abs(transaction.amount).toLocaleString('en-KE')}
                  </p>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-800">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-2 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-400">
            These example records are not actual M-PESA statements or payment
            confirmations.
          </p>
        </div>

        {/* Other services */}
        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
            More for you
          </p>

          <h2 className="mt-2 text-2xl font-black text-slate-950">
            Explore services
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Choose a service to explore its interface.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((service) => (
              <button
                key={service.title}
                type="button"
                onClick={() => openAction(service.title)}
                className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg hover:shadow-slate-900/5"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${service.color}`}
                >
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-lg"
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-extrabold text-slate-900">
                    {service.title}
                  </span>

                  <span className="mt-2 block text-sm leading-6 text-slate-500">
                    {service.description}
                  </span>

                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-green-700">
                    Explore
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Action feedback */}
        {activeAction && (
          <div
            className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5 sm:p-6"
            role="status"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-green-800">
                  Service preview
                </p>

                <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                  {activeAction}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  This section is an interface preview. To use this service
                  with real account information or complete a real transaction,
                  a secure backend and the relevant service integration would
                  need to be connected.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveAction(null)}
                className="shrink-0 rounded-lg px-3 py-2 text-sm font-bold text-green-900 transition hover:bg-green-100"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Account actions */}
        <div className="mt-10 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
              <FontAwesomeIcon icon={faShieldHalved} />
            </span>

            <div className="min-w-0">
              <h3 className="font-bold text-slate-900">
                Your account and security
              </h3>

              <p className="mt-1 break-all text-sm leading-6 text-slate-500">
                Signed in as {user.email}.
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                This website does not connect to or verify your real M-PESA
                account.
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
