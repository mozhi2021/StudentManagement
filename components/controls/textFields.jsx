import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export default function TextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "120ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Parent/Guardian Name"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
