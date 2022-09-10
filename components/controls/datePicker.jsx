import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { any } from "prop-types";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState, useEffect } from "react";

export default function DtPicker(props) {
  const { name, label, value, required, disabled, readOnly, error, onChange } =
    props;

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
