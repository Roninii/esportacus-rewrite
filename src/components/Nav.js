/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { NavLink } from "react-router-dom";

const nav = css`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
`;

const navLink = css`
  margin-right: 1rem;
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  font-size: 1.2rem;

  &:hover {
    color: #673ab7;
  }
`;

const active = {
  color: `#673ab8`
};

const Nav = () => {
  return (
    <ul css={nav}>
      <li>
        <NavLink css={navLink} activeStyle={active} exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink css={navLink} activeStyle={active} to="/teams">
          Teams
        </NavLink>
      </li>
      <li>
        <NavLink css={navLink} activeStyle={active} to="/players">
          Players
        </NavLink>
      </li>
      <li>
        <NavLink css={navLink} activeStyle={active} to="/leagues">
          Leagues
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
