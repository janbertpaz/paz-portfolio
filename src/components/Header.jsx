import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h2>Janbert Paz</h2>
      <nav>
        <NavLink to="/">Home</NavLink>{' | '}
        <NavLink to="/about">About</NavLink>{' | '}
        <NavLink to="/projects">Projects</NavLink>{' | '}
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header