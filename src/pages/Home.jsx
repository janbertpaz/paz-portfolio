import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
        Welcome to my portfolio
      </p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-6xl">
        Hi, I'm Janbert Paz
      </h1>
      <h2 className="mt-3 text-xl font-medium text-slate-600 md:text-2xl">
        Frontend Developer
      </h2>
      <p className="mt-5 max-w-2xl text-lg text-slate-700">
        I build clean, responsive websites using React and Tailwind CSS.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/projects"
          className="rounded-lg bg-indigo-700 px-6 py-3 font-medium text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          View my work
        </Link>
        <Link
          to="/contact"
          className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          Contact me
        </Link>
      </div>
    </section>
  )
}

export default Home