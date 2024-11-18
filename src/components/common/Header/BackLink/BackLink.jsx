import { Link } from "react-router-dom";

import Wrapper from "@common/Wrapper";

import "./style.css";

const BackLink = () => {
  return (
    <Wrapper className="back">
      <Link className="back-link" to="/">
        <img
          src="/images/arrow-back.svg"
          alt="Back arrow."
          className="back-arrow"
        />
        Back
      </Link>
    </Wrapper>
  );
};

export default BackLink;
