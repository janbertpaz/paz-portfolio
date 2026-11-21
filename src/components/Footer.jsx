function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} Janbert Paz. All rights reserved.</p>
        <a
          href="https://github.com/janbertpaz"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer