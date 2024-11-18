import { Button } from "@mui/material";

import "./style.css";

function Btn({ children, className = "", ...props }) {
  return (
    <Button className={`btn ${className}`} {...props}>
      {children}
    </Button>
  );
}

export default Btn;
