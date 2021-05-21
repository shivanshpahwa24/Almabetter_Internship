import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow sticky-top py-1 px-4">
      <div>
        <h3>ReportKeeper</h3>
      </div>
      <div className="d-flex">
        <NavLink
          className="nav-link"
          to="/"
          exact={true}
          style={{ color: "#343a40" }}
          activeStyle={{ color: "#17a2b8" }}
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          to="/marks"
          style={{ color: "#343a40" }}
          activeStyle={{ color: "#17a2b8" }}
        >
          Enter New Record
        </NavLink>
        <NavLink
          className="nav-link"
          to="/leaderboard"
          style={{ color: "#343a40" }}
          activeStyle={{ color: "#17a2b8" }}
        >
          Leaderboard
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
