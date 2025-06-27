import { Link } from 'react-router-dom'
import './index.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Wolf Pack</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
