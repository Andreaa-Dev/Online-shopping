import { autocompleteClasses, Box, Typography } from "@mui/material";
import { BoxProps } from "@mui/system";
import React from "react";

function FooterBottom() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography>ABOUT</Typography>
      <Typography>FAQ</Typography>
      <Typography>TERMS</Typography>
      <Typography>PRIVACY POLICY</Typography>
      <Typography>COOKIES POLICY</Typography>
      <Typography>CONTRACT US</Typography>
      <Typography>PRESS</Typography>
    </Box>
  );
}

export default FooterBottom;
