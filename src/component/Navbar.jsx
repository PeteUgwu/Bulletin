import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="Nav">
    <ul className="flex Nav-items">
      <li className="flex">
        <NavLink to="/" exact activeClassName="active">
          <span className="material-icons Icon-left">chevron_left</span>
        </NavLink>
        Home
      </li>
      <li>Bulletin</li>
      <li>
        <span className="material-icons">notifications</span>
        <span className="material-icons">settings</span>
      </li>
    </ul>
  </nav>
);

export default Navbar;
