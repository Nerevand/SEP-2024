import { Link } from "react-router-dom";

import "./BackLink.css";

const BackLink = () => {
  return (
    <div className="back">
      <Link className="back-link" to="/">
        <img
          src="/images/arrow-back.svg"
          alt="Back arrow."
          className="back-arrow"
        />
        Back
      </Link>
    </div>
  );
};

export default BackLink;
