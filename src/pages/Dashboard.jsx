
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faBell,
  faCheck,
  faCircleCheck,
  faCircleUser,
  faClock,
  faCreditCard,
  faEye,
  faEyeSlash,
  faGear,
  faMobileScreenButton,
  faMoneyBillTransfer,
  faPaperPlane,
  faReceipt,
  faShieldHalved,
  faWallet,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';

const activities = [
  {
    id: 'balance',
    eyebrow: 'YOUR MONEY',
    title: 'Your M-PESA balance, at a glance.',
    description:
      'Keep track of your money with a clear overview of your available balance.',
    icon: faWallet,
    accent: 'from-green-500 to-emerald-700',
    label: 'Balance overview',
    amount: 'KSh 4,850.50',
    rows: [
      { label: 'Available balance', value: 'KSh 4,850.50' },
      { label: 'Account', value: 'M-PESA' },
    ],
  },
  {
    id: 'airtime',
    eyebrow: 'STAY CONNECTED',
    title: 'Buy airtime in a few simple steps.',
    description:
      'Imagine topping up your line and staying connected whenever you need to.',
    icon: faMobileScreenButton,
    accent: 'from-sky-500 to-blue-700',
    label: 'Airtime purchase',
    amount: 'KSh 100.00',
    rows: [
      { label: 'Service', value: 'Airtime' },
      { label: 'Amount', value: 'KSh 100.00' },
      { label: 'Payment method', value: 'M-PESA' },
    ],
  },
  {
    id: 'send',
    eyebrow: 'MOVE MONEY',
    title: 'Sending money made simple.',
    description:
      'A simple payment flow helps you review the recipient and amount before proceeding.',
    icon: faPaperPlane,
    accent: 'from-violet-500 to-indigo-700',
    label: 'Send money',
    amount: 'KSh 500.00',
    rows: [
      { label: 'Recipient', value: 'Sample contact' },
      { label: 'Amount', value: 'KSh 500.00' },
      { label: 'Status', value: 'Ready to review' },
    ],
  },
  {
    id: 'payment',
    eyebrow: 'PAY WITH EASE',
    title: 'Make everyday payments.',
    description:
      'Explore how a payment summary could look before confirming a transaction.',
    icon: faCreditCard,
    accent: 'from-amber-500 to-orange-700',
    label: 'Payment summary',
    amount: 'KSh 650.00',
    rows: [
      { label: 'Payment type', value: 'Buy Goods' },
      { label: 'Amount', value: 'KSh 650.00' },
      { label: 'Status', value: 'Awaiting confirmation' },
    ],
  },
];

const sampleTransactions = [
  {
    id: 'MP001',
    title: 'Money received',
    description: 'Sample payment from a contact',
    date: 'Today, 10:42 AM',
    amount: 2500,
    received: true,
  },
  {
    id: 'MP002',
    title: 'Airtime purchase',
    description: 'Sample airtime purchase',
    date: 'Yesterday, 6:15 PM',
    amount: 100,
    received: false,
  },
  {
    id: 'MP003',
    title: 'Shopping payment',
    description: 'Sample Buy Goods payment',
    date: 'Yesterday, 1:20 PM',
    amount: 650,
    received: false,
  },
  {
    id: 'MP004',
    title: 'Money received',
    description: 'Sample payment from a contact',
    date: '16 Oct 2026, 9:05 AM',
    amount: 1200,
    received: true,
  },
];

const quickActions = [
  {
    title: 'Send money',
    icon: faPaperPlane,
    color: 'bg-green-100 text-green-800',
  },
  {
    title: 'Withdraw cash',
    icon: faMoneyBillTransfer,
    color: 'bg-sky-100 text-sky-800',
  },
  {
    title: 'Buy Goods',
    icon: faCreditCard,
    color: 'bg-violet-100 text-violet-800',
  },
  {
    title: 'Paybill',
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
  const [showBalance, setShowBalance] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeAction, setActiveAction] = useState(null);
  const [showAllTransactions, setShowAllTransactions] = useState(false);

  const firstName = user.fullName.trim().split(/\s+/)[0];
  const activity = activities[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % activities.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const transactions = showAllTransactions
    ? sampleTransactions
    : sampleTransactions.slice(0, 3);

  function openAction(title) {
    setActiveAction(title);
  }

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-7 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        {/* M-PESA balance at the top */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 p-6 text-white shadow-xl sm:p-9">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-16 right-1/3 h-48 w-48 rounded-full bg-emerald-300/10 blur-2xl" />

          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl">
                  <FontAwesomeIcon icon={faWallet} />
                </span>

                <div>
                  <p className="text-lg font-black tracking-wide">M-PESA</p>
                  <p className="text-xs text-green-100">
                    Your money at a glance
                  </p>
                </div>
              </div>

              <p className="mt-8 text-sm font-medium text-green-100">
                Available balance
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <p className="text-3xl font-black tracking-tight sm:text-5xl">
                  {showBalance ? 'KSh 4,850.50' : 'KSh ••••••'}
                </p>

                <button
                  type="button"
                  onClick={() => setShowBalance((previous) => !previous)}
                  aria-label={showBalance ? 'Hide balance' : 'Show balance'}
                  aria-pressed={showBalance}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <FontAwesomeIcon
                    icon={showBalance ? faEyeSlash : faEye}
                  />
                </button>
              </div>

              <p className="mt-3 text-xs leading-5 text-green-100">
                {showBalance
                  ? 'Sample balance is visible.'
                  : 'Tap the eye to reveal your sample balance.'}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start rounded-full border border-amber-200/30 bg-amber-300/15 px-3 py-2 text-xs font-bold text-amber-50">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              Sample account
            </div>
          </div>

          <div className="relative mt-7 border-t border-white/15 pt-5">
            <p className="text-xs leading-5 text-green-100">
              This is illustrative information, not your real M-PESA balance.
              No real money is moved through this website.
            </p>
          </div>
        </div>

        {/* Welcome */}
        <div className="mt-7 flex flex-col justify-between gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-800">
              <FontAwesomeIcon icon={faCircleCheck} />
              Signed in successfully
            </div>

            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Welcome, {firstName}!
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Your services, account information and everyday activities, all
              in one place.
            </p>
          </div>

          <div className="flex h-16 w-16 shrink-0 items-center justify-center self-start rounded-2xl bg-green-100 text-3xl text-green-800 sm:self-center">
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
        </div>

        {/* Animated service showcase */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-9 lg:p-10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700">
                Everyday services
              </p>

              <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                Your money. Your services. One place.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Explore a preview of the activities you can manage through a
                digital self-service experience.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {activities.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show ${item.label}`}
                    aria-pressed={activeSlide === index}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                      activeSlide === index
                        ? 'border-green-700 bg-green-700 text-white shadow-md'
                        : 'border-slate-200 bg-white text-slate-500 hover:border-green-300 hover:text-green-800'
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </button>
                ))}
              </div>

              <div key={activity.id} className="mt-7 motion-safe:animate-[fadeIn_.5s_ease-out]">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-green-700">
                  {activity.eyebrow}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight text-slate-950">
                  {activity.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {activity.description}
                </p>
              </div>

              <div className="mt-7 flex items-center gap-2">
                {activities.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === index
                        ? 'w-8 bg-green-700'
                        : 'w-2 bg-slate-200 hover:bg-green-300'
                    }`}
                  />
                ))}

                <span className="ml-2 text-xs font-semibold text-slate-400">
                  {activeSlide + 1} / {activities.length}
                </span>
              </div>
            </div>

            {/* Animated mobile-app preview */}
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-sky-50 to-white p-6 sm:min-h-[460px] sm:p-10">
              <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-green-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-sky-200/50 blur-3xl" />

              <div className="relative w-full max-w-sm motion-safe:animate-[float_4s_ease-in-out_infinite]">
                <div className="rounded-[2rem] border border-white bg-white/90 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur sm:p-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white ${activity.accent}`}
                      >
                        <FontAwesomeIcon icon={activity.icon} />
                      </span>

                      <div>
                        <p className="text-sm font-black text-slate-900">
                          myone
                        </p>
                        <p className="text-xs text-slate-400">
                          Service preview
                        </p>
                      </div>
                    </div>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-700">
                      <FontAwesomeIcon icon={faBell} />
                    </span>
                  </div>

                  <div
                    key={`${activity.id}-content`}
                    className="motion-safe:animate-[fadeIn_.5s_ease-out]"
                  >
                    <div
                      className={`mt-5 rounded-2xl bg-gradient-to-br p-5 text-white ${activity.accent}`}
                    >
                      <p className="text-xs font-semibold text-white/80">
                        {activity.label}
                      </p>

                      <p className="mt-3 break-words text-2xl font-black tracking-tight">
                        {activity.id === 'balance' && !showBalance
                          ? 'KSh ••••••'
                          : activity.amount}
                      </p>

                      <div className="mt-4 flex items-center justify-between text-xs text-white/80">
                        <span>Illustrative information</span>
                        <FontAwesomeIcon icon={activity.icon} />
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {activity.rows.map((row, index) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-3"
                          style={{
                            animationDelay: `${index * 100}ms`,
                          }}
                        >
                          <span className="text-xs text-slate-500">
                            {row.label}
                          </span>

                          <span className="text-right text-xs font-bold text-slate-800">
                            {activity.id === 'balance' &&
                            row.label === 'Available balance' &&
                            !showBalance
                              ? 'KSh ••••••'
                              : row.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-2 rounded-xl border border-green-100 bg-green-50 p-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-800">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>

                      <div>
                        <p className="text-xs font-bold text-green-900">
                          Interactive preview
                        </p>
                        <p className="mt-0.5 text-[11px] text-green-800">
                          No real transaction is being made.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-2 top-20 hidden items-center gap-2 rounded-2xl border border-white bg-white px-4 py-3 shadow-lg sm:flex motion-safe:animate-[float_3s_ease-in-out_infinite]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-100 text-green-800">
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      Simple and clear
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Service overview
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="mt-10">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-green-700">
            Quick access
          </p>

          <h2 className="mt-2 text-2xl font-black text-slate-950">
            What would you like to do?
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Select a shortcut to explore its interface.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {quickActions.map((action) => (
              <button
                key={action.title}
                type="button"
                onClick={() => openAction(action.title)}
                className="group rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg sm:p-5"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.color} transition group-hover:scale-105`}
                >
                  <FontAwesomeIcon icon={action.icon} className="text-lg" />
                </span>

                <span className="mt-4 block font-extrabold text-slate-900">
                  {action.title}
                </span>

                <span className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-green-700">
                  Explore
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-green-700">
                Your activity
              </p>

              <h2 className="mt-2 text-2xl font-black text-slate-950">
                Recent transactions
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Sample records for the dashboard preview.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setShowAllTransactions((previous) => !previous)
              }
              className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-green-300 hover:bg-green-50"
            >
              {showAllTransactions ? 'Show less' : 'View all'}
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div className="mt-5 divide-y divide-slate-100">
            {transactionsForDisplay(transactions).map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      transaction.received
                        ? 'bg-green-100 text-green-800'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={transaction.received ? faArrowDown : faArrowUp}
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
                      transaction.received
                        ? 'text-green-700'
                        : 'text-slate-900'
                    }`}
                  >
                    {transaction.received ? '+' : '-'} KSh{' '}
                    {transaction.amount.toLocaleString('en-KE')}
                  </p>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-800">
                    <FontAwesomeIcon icon={faCheck} />
                    Sample
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-2 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-400">
            These examples are not actual M-PESA statements or payment
            confirmations.
          </p>
        </div>

        {/* Other services */}
        <div className="mt-10">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-green-700">
            More for you
          </p>

          <h2 className="mt-2 text-2xl font-black text-slate-950">
            Explore services
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((service) => (
              <button
                key={service.title}
                type="button"
                onClick={() => openAction(service.title)}
                className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${service.color}`}
                >
                  <FontAwesomeIcon icon={service.icon} className="text-lg" />
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

        {/* Service preview feedback */}
        {activeAction && (
          <div
            className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5 sm:p-6 motion-safe:animate-[fadeIn_.3s_ease-out]"
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
                  This is an interface preview only. Real account data and
                  transactions require secure server-side processing and an
                  authorized service integration.
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

        {/* Profile and sign out */}
        <div className="mt-10 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex min-w-0 items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
              <FontAwesomeIcon icon={faShieldHalved} />
            </span>

            <div className="min-w-0">
              <h3 className="font-bold text-slate-900">
                Your account and security
              </h3>

              <p className="mt-1 break-all text-sm leading-6 text-slate-500">
                {user.fullName} · @{user.username}
              </p>

              <p className="mt-1 break-all text-xs leading-5 text-slate-400">
                {user.email} · {user.phone || 'Phone not provided'}
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

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

function transactionsForDisplay(transactions) {
  return transactions;
}

export default Dashboard;
