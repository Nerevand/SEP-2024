import cn from "classnames";

import "./style.css";

const Burger = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div className="burger" onClick={toggleMenu}>
      <span className={cn("burger-inner", { open: isMenuOpen })}></span>
    </div>
  );
};

export default Burger;
