const projects = [
  { id: 1, title: 'Project One', description: 'A short description of project one.' },
  { id: 2, title: 'Project Two', description: 'A short description of project two.' },
  { id: 3, title: 'Project Three', description: 'A short description of project three.' },
]

function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      {projects.map((p) => (
        <article key={p.id}>
          <img src="https://placehold.co/300x180" alt={p.title} />
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </article>
      ))}
    </section>
  )
}

export default Projects