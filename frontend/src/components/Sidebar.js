import React from 'react';
import { NavLink } from 'react-router-dom';
// Assuming you have a CSS file for styling

function Sidebar() {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <NavLink to="/" className="nav-link link-dark" activeclassname="active">Dashboard</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/search-scores" className="nav-link link-dark" activeclassname="active">Search Scores</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/reports" className="nav-link link-dark" activeclassname="active">Reports</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/settings" className="nav-link link-dark" activeclassname="active">Settings</NavLink>
      </li>
    </ul>
  );
}

export default Sidebar;
