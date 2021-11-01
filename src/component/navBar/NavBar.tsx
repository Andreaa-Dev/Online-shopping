import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DehazeIcon from "@mui/icons-material/Dehaze";

import SwitchTheme from "../navBar/SwitchTheme";

const theme = createTheme({
  typography: {
    fontFamily: ["Indie Flower", "cursive"].join(","),
  },
});

export default function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box>
              <DehazeIcon />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              ColourPop
            </Typography>

            <SwitchTheme />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
