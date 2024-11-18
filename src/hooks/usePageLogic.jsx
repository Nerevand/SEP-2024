import { useState, useEffect } from "react";

const usePageLogic = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [_isMobile, setIsMobile] = useState(window.innerWidth <= 899);

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

  return {
    isMenuOpen,
    setIsMenuOpen,
    toggleMenu,
    closeMenu,
  };
};

export default usePageLogic;
