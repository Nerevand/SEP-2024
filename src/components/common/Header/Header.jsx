import { useState, useEffect } from "react";

import { useLocation } from "react-router";
import cn from "classnames";

import { routes } from "@constants";
import Btn from "@ui/Btn";

import BackLink from "./BackLink";
import Burger from "./Burger";
import Logo from "./Logo";
import Navigation from "./Navigation";

import "./style.css";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [_isMobile, setIsMobile] = useState(window.innerWidth <= 899);

  const isHeaderBar = routes.includes(location.pathname);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 899);

      if (window.innerWidth > 899) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
