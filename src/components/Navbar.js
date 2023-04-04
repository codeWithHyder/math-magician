import { NavLink } from 'react-router-dom';
import React from 'react';
// import Home from './Home';

const Navbar = () => (
  <nav className="navbar">
    <NavLink className="navlink" to="/">Home</NavLink>
    <NavLink className="navlink" to="/Calculator">| Calculator</NavLink>
    <NavLink className="navlink" to="/Quotes">| Quotes</NavLink>
  </nav>
);
export default Navbar;
