import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 text-center">
      <p className="text-6xl font-bold text-indigo-700">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">Sorry, the page you are looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-indigo-700 px-6 py-3 font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
      >
        Go back home
      </Link>
    </section>
  )
}

export default NotFound