import cn from "classnames";

import "./Burger.css";

const Burger = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div className="burger" onClick={toggleMenu}>
      <span className={cn("burger-inner", { open: isMenuOpen })}></span>
    </div>
  );
};

export default Burger;
