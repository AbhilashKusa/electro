import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <Nav className="wrapper">
      <div className="sidebar">
        <h3>Electropro</h3>
        <ul className="nav-links">
          <Link to="/Introduction">
            <li>Introduction</li>
          </Link>
          <Link to="/Datatypes">
            <li>DataTypes</li>
          </Link>
          <Link to="/Classes">
            <li>Classes</li>
          </Link>
          <Link to="/Projects">
            <li>Projects</li>
          </Link>
        </ul>
      </div>
    </Nav>
  );
}

export default Sidebar;
