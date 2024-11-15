import { Button } from "@mui/material";

import "./Btn.css";

function Btn({ children, onClick, className = "", ...props }) {
  return (
    <Button onClick={onClick} className={`btn ${className}`} {...props}>
      {children}
    </Button>
  );
}

export default Btn;
