import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { any } from "prop-types";

export default function DOB(props) {
  const {
    name,
    label,
    value,
    required,
    disabled,
    readOnly,
    minDate,
    maxDate,
    error,
    onChange,
  } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} size="small">
      <DatePicker
        label={required ? label + " *" : label}
        disabled={disabled || false}
        readOnly={readOnly || false}
        name={name}
        value={value}
        minDate={minDate || any}
        maxDate={maxDate || any}
        onChange={(Date) => onChange(convertToDefEventPara(name, Date))}
        renderInput={(params) => (
          <TextField
            {...params}
            {...(error && { error: true, helperText: error })}
          />
        )}
      />
    </LocalizationProvider>
  );
}
