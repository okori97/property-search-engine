import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="sidebar-link" to={`/?query={"city":"Leeds"}`}>
        Leeds
      </Link>
      <Link className="sidebar-link" to={`/?query={"city":"Manchester"}`}>
        Manchester
      </Link>
      <Link className="sidebar-link" to={`/?query={"city":"Sheffield"}`}>
        Sheffield
      </Link>
      <Link className="sidebar-link" to={`/?query={"city":"Liverpool"}`}>
        Liverpool
      </Link>
    </div>
  );
};

export default Sidebar;
