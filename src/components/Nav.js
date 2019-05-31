import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/teams">Teams</NavLink>
      </li>
      <li>
        <NavLink to="/players">Players</NavLink>
      </li>
      <li>
        <NavLink to="/leagues">Leagues</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
