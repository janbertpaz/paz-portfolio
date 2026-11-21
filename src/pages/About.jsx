const skills = ['React', 'Tailwind CSS', 'JavaScript', 'HTML & CSS', 'Git and GitHub']

function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">About Me</h1>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="max-w-2xl text-slate-700">
          I'm a student studying BSIT at Gordon College. I enjoy
          building websites and learning new technologies.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-semibold text-slate-900">Skills</h2>
      <ul className="mt-4 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-800"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About