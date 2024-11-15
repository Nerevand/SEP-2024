import Copyright from "./Copyright/Copyright";
import Policies from "./Policies/Policies";

import "./Footer.css";

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
