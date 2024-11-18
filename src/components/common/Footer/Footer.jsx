import Copyright from "./Copyright";
import Policies from "./Policies";

import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Copyright />
        <Policies />
      </div>
    </footer>
  );
};

export default Footer;
