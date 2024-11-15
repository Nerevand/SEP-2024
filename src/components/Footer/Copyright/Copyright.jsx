import { Typography } from "@mui/material";

import "./Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright">
      <Typography variant="copyright" component="p" className="copyright-text">
        &copy; Simple Art, Inc. 2021
      </Typography>
      <Typography variant="copyright" component="p" className="copyright-text">
        All rights reserved
      </Typography>
    </div>
  );
};

export default Copyright;
