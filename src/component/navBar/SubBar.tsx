import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Box, createTheme, styled, ThemeProvider } from "@mui/system";
import Deals from "./Deals";

const MyComponent = styled("div")({
  color: "darkslategray",
});

function SubBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 5,
        flexDirection: "row",
      }}
    >
      <MyComponent>Cleansing</MyComponent>
      <h1 data-mui-toggle="dropdown">FaceCare</h1>
      <h1>Facesheet</h1>
      <h1>Bath & Body</h1>
    </Box>
  );
}

export default SubBar;
