import PropTypes from "prop-types";
import { Button } from "@mui/material";

import "./style.css";

function Btn({ children, className = "", ...props }) {
  return (
    <Button className={`btn ${className}`} {...props}>
      {children}
    </Button>
  );
}

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Btn;
