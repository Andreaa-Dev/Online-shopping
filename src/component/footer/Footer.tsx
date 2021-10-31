import { Typography } from "@mui/material";
import React from "react";

import UserEmail from "./UserEmail";
import BottomFooter from "./FooterBottom";

function Footer() {
  return (
    <div>
      <Typography>hey, let's keep in touch!</Typography>
      <Typography>
        stay in the know when you sign up for our newsletter!
      </Typography>
      <UserEmail />
      <Typography>
        By entering your email address you will receive promotional updates.
        Consent is not a condition of purchase. View Privacy Policy.
      </Typography>
      <BottomFooter />
    </div>
  );
}

export default Footer;
