import React from "react";
import { Box, createTheme, styled, ThemeProvider } from "@mui/system";
import { makeStyles, Menu, MenuItem } from "@mui/material";

function SubBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMouseOver = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 5,
        flexDirection: "row",
      }}
    >
      <div>
        <h1 onMouseOver={handleMouseOver}>FaceCare</h1>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </Box>
  );
}

export default SubBar;
