import { useLocation } from "react-router";

import cn from "classnames";

import { routes } from "@constants";
import Btn from "@ui/Btn";
import usePageLogic from "@hooks/usePageLogic";

import BackLink from "./BackLink";
import Burger from "./Burger";
import Logo from "./Logo";
import Navigation from "./Navigation";

import "./style.css";

const Header = () => {
  const location = useLocation();

  const { isMenuOpen, toggleMenu, closeMenu } = usePageLogic();

  const isHeaderBar = routes.includes(location.pathname);

  return (
    <header className="header">
      <div className="header-inner">
        <Logo />
        {isHeaderBar ? (
          <>
            <div className={cn("header-bar", { open: isMenuOpen })}>
              <Navigation closeMenu={closeMenu} />
              <Btn onClick={closeMenu} className="btn-slim">
                Apply now
              </Btn>
            </div>
            <Burger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          </>
        ) : (
          <BackLink />
        )}
      </div>
    </header>
  );
};

export default Header;
