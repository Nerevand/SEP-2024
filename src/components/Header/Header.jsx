import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import cn from "classnames";

import Btn from "@components/Btn/Btn";
import BackLink from "./BackLink/BackLink";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Burger from "./Burger/Burger";

import { routes } from "@constants";

import "./Header.css";

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
