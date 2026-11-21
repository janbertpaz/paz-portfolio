const linkClass =
  'break-words font-medium text-indigo-700 underline hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-600'

function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
      <p className="mt-2 text-slate-600">You can reach me through any of these:</p>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        <li className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Email</p>
          <a href="mailto:202411370@gordoncollege.edu.ph" className={linkClass}>
            202411370@gordoncollege.edu.ph
          </a>
        </li>
        <li className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">GitHub</p>
          <a
            href="https://github.com/janbertpaz"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            github.com/janbertpaz
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact