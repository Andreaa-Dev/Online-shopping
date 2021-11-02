import Tooltip from "@mui/material/Tooltip";
import { Box, styled } from "@mui/system";
import React from "react";

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
  ":hover": {
    background: "#f00",
  },
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
      <h1>FaceCare</h1>
      <h1>Facesheet</h1>
      <h1>Bath & Body</h1>
      <Tooltip title="Under 500">
        <h1>Deals</h1>
      </Tooltip>
    </Box>
  );
}

export default SubBar;
