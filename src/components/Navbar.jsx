import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        Event Planner
      </NavLink>
      <nav className="site-nav" aria-label="Primary navigation">
        <NavLink to="/">Events</NavLink>
        <NavLink to="/add-event">Add Event</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;