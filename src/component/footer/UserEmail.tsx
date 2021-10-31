import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function UserEmail() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Email" variant="standard" />
      </Box>
    </div>
  );
}

export default UserEmail;
