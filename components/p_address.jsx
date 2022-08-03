import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";
import { MenuItem } from "@mui/material";

const states = [
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

export default function P_Address(props) {
  const { name, label, value, error = null, onChange, items } = props;

  const [states, setStates] = React.useState(" ");

  const handleChange = (event) => {
    setStates(event.target.value);
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
          label="State Names"
          value={value}
          onChange={handleChange}
          SelectProps={{
            name: true,
          }}
          // helperText="Please select your State"
          variant="standard"
        >
          {/* {states.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))} */}
        </TextField>
      </div>
    </FormControl>
  );
}
