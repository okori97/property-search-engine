import React from "react";
import "../styles/Navbar.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
