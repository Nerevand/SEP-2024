import { Typography } from "@mui/material";

import "./style.css";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright">
      <Typography variant="copyright" component="p" className="copyright-text">
        &copy; Simple Art, Inc. {currentYear}
      </Typography>
      <Typography variant="copyright" component="p" className="copyright-text">
        All rights reserved
      </Typography>
    </div>
  );
};

export default Copyright;
