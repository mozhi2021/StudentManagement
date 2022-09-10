import { TextField } from "@mui/material";
import React from "react";

export default function Input(props) {
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    readOnly,
    ...other
  } = props;
  return (
    <TextField
      variant="outlined"
      // size="small"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      // readOnly={readOnly || false}
      inputProps={{
        readOnly: Boolean(readOnly || false),
      }}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
