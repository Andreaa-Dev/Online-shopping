import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { List, Menu, MenuItem, Typography } from "@mui/material";

import mask from "../../images/mask.jpeg";
import { TabPanel } from "@mui/lab";

export default function CenteredTabs() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function TabPanel() {
    return (
      <div>
        <Typography>Item 1</Typography>
        <Typography>Item 1</Typography>
        <Typography>Item 1</Typography>
      </div>
    );
  }

  const handleMouseOver = (event: any) => {
    setAnchorEl(event.currentTarget);
    TabPanel();
  };

  const handleClose = () => {
    console.log("hi");
    setAnchorEl(null);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Facemask" onMouseEnter={handleMouseOver} />
        {/* <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onMouseLeave={handleClose}
          >
            <MenuItem onClick={handleClose}>Face mask</MenuItem>
            <MenuItem onClick={handleClose}>Hand mask</MenuItem>
            <MenuItem onClick={handleClose}>Foot mask</MenuItem>

            <img src={mask} alt="mask" height="150" width="150" />
          </List>
        </Menu> */}
        <Tab label="Bag" />
        <Tab label="Shoes" />
      </Tabs>
    </Box>
  );
}
