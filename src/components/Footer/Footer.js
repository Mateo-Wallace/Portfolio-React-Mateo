import React from "react";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary white" align="center">
      {"Copyright © Mateo Wallace "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <footer>
      Footer
      <Copyright />
    </footer>
  );
};

export default Footer;
