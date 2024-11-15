import { NavLink } from "react-router-dom";

import { navigationList } from "@constants";

import "./Navigation.css";

const Navigation = ({ closeMenu }) => {
  return (
    <nav className="navigation">
      {navigationList.map(({ route, linkName }, index) => (
        <NavLink
          key={index}
          className="navigation-link"
          to={route}
          onClick={closeMenu}
        >
          {linkName}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
