import React from "react";
import ReactDOM from "react-dom";
import "../styles/Navbar.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import FacebookLogin from "react-facebook-login";

import logo from "../images/logo.png";

const Navbar = ({ onLogin, userID, onLogout }) => {
  console.log(userID);
  const { userid } = userID;
  console.log(userid);

  if (userid) {
    return (
      <div className="header">
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
        <div className="sso-wrapper">
          <FacebookLogin
            appId="1031916661287431"
            autoLoad
            onClick={onLogout}
            fields="name,email,picture"
            cssClass="facebook-button"
            textButton="Sign Out"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="header">
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
      <div className="sso-wrapper">
        <FacebookLogin
          appId="1031916661287431"
          callback={onLogin}
          autoLoad
          fields="name,email,picture"
        />
      </div>
    </div>
  );
};

export default Navbar;
