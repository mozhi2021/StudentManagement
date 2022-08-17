import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import React from "react";

export default function Dropdown(props) {
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    options,
    required,
  } = props;
  return (
    <FormControl
      variant="outlined"
      {...(error && { error: true, helperText: error })}
    >
      {/* <InputLabel>{label}</InputLabel> */}
      <InputLabel>{required ? label + " *" : label}</InputLabel>

      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value=""></MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
