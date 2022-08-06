import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import Controls from "./controls/controls";

const sts = [
  {
    value: "TN",
    label: "TamilNadu",
  },
  {
    value: "PY",
    label: "Pondychery",
  },
  {
    value: "AP",
    label: "Andra Pradesh",
  },
  {
    value: "KA",
    label: "Karnataka",
  },
  {
    value: "KL",
    label: "Kerala",
  },
  {
    value: "MH",
    label: "Maharashtra",
  },
];
const ctry = [
  {
    value: "IND",
    label: "India",
  },
  {
    value: "Pk",
    label: "Pakistan",
  },
  {
    value: "USA",
    label: "United States of America",
  },
  {
    value: "UAE",
    label: "United Arabic Emirates",
  },
  {
    value: "CH",
    label: "China",
  },
  {
    value: "MX",
    label: "Maxico",
  },
  {
    value: "KA",
    label: "Kanada",
  },
];

export default function C_Address(props) {
  const { name, label, value, error = null, onChange, items } = props;

  const [states, setStates] = React.useState(" ");

  const handleChange = (event) => {
    setStates(event.target.value);
  };
  const [country, setCountry] = React.useState(" ");

  const countryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <FormControl
      component="fieldset"
      {...(error && { error: true, helperText: error })}
      sx={{ border: "1px groove lightgrey", p: 0.5 }}
    >
      <FormLabel component="legend">{label}</FormLabel>
      <TextField id="standard-basic" label="  " variant="standard" />
      <TextField id="standard-basic" label="  " variant="standard" />
      {/* <TextField id="outlined-basic" label="City" variant="outlined" /> */}
      <TextField id="standard-basic" label="City " variant="standard" />
      <div>
        <TextField
          id="standard-select-state-name"
          select
          label="State"
          value={states}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          // helperText="Please select your State"
          variant="standard"
        >
          {sts.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="standard-select-country-name"
          select
          label="Country"
          value={country}
          onChange={countryChange}
          SelectProps={{
            native: true,
          }}
          variant="standard"
        >
          {ctry.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <Controls.Pincode />
    </FormControl>
  );
}
