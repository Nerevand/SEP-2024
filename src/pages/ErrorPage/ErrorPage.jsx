import { Typography } from "@mui/material";

import "./style.css";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <div>
        <Typography variant="h2" component="h1">
          Oops!
        </Typography>
        <Typography variant="body1">Page not found.</Typography>
      </div>
    </section>
  );
};

export default ErrorPage;
