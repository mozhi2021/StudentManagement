import * as React from "react";
import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";
import { any } from "prop-types";
// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateOfBirth(props) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date of Birth"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
//   const {
//     name,
//     label,
//     value,
//     required,
//     disabled,
//     readOnly,
//     minDate,
//     maxDate,
//     error,
//     onChange,
//   } = props;

//   const convertToDefEventPara = (name, value) => ({
//     target: {
//       name,
//       value,
//     },
//   });

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns} size="small">
//       <DatePicker
//         label={required ? label + " *" : label}
//         disabled={disabled || false}
//         readOnly={readOnly || false}
//         name={name}
//         value={value}
//         minDate={minDate || any}
//         maxDate={maxDate || any}
//         onChange={(Date) => onChange(convertToDefEventPara(name, Date))}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             {...(error && { error: true, helperText: error })}
//           />
//         )}
//       />
//     </LocalizationProvider>
//   );
// }
