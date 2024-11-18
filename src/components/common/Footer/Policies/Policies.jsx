import { Link } from "react-router-dom";

import { policiesLinks } from "@constants";

import "./style.css";

const Policies = () => {
  return (
    <ul className="policies-list">
      {policiesLinks.map(({ linkName }, index) => (
        <li key={index} className="policies-list-item">
          <Link className="policies-link" to="#" target="_blank">
            {linkName}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Policies;
