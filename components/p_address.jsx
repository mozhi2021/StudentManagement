import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";

export default function P_Address(props) {
  const { name, label, value, error = null, onChange, items } = props;

  return (
    <FormControl
      component="fieldset"
      {...(error && { error: true, helperText: error })}
      sx={{ border: "1px groove lightgrey", p: 0.5 }}
    >
      <FormLabel component="legend">{label}</FormLabel>
      <TextField id="standard-basic" label="  " variant="standard" />
      <TextField id="standard-basic" label="       " variant="standard" />
    </FormControl>
  );
}
