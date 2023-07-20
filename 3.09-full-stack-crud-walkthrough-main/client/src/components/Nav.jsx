import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cats">All the Cats!</NavLink>
      <NavLink to="/add-cat">Add Cat</NavLink>
    </nav>
  )
}
