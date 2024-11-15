import { Link } from "react-router-dom";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="/images/logo-SA-1.svg" alt="Simple Art logo" />
      </Link>
    </div>
  );
};

export default Logo;
