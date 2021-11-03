import React from "react";
import { Box } from "@mui/system";
import { List, Menu, MenuItem } from "@mui/material";
import mask from "../../images/mask.jpeg";

function SubBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMouseOver = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log("hi");
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 5,
        flexDirection: "column",
      }}
    >
      <div>
        {/* anchor: know where to display */}
        <h1 onMouseEnter={handleMouseOver}>FaceCare</h1>
        <Menu
          anchorEl={anchorEl}
          // keepMounted
          open={Boolean(anchorEl)}
          // onClose={handleClose}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onMouseLeave={handleClose}
          >
            <div>
              <MenuItem onClick={handleClose}>Face mask</MenuItem>
              <MenuItem onClick={handleClose}>Hand mask</MenuItem>
              <MenuItem onClick={handleClose}>Foot mask</MenuItem>
            </div>
            <img src={mask} alt="mask" height="150" width="150" />
          </List>
        </Menu>
      </div>
    </Box>
  );
}

export default SubBar;
