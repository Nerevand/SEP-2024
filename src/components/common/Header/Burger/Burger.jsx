import PropTypes from "prop-types";
import cn from "classnames";

import "./style.css";

const Burger = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div className="burger" onClick={toggleMenu}>
      <span className={cn("burger-inner", { open: isMenuOpen })}></span>
    </div>
  );
};

Burger.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Burger;
