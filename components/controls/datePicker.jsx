import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

// export default function DtPicker(props) {
//   const { name, label, value, error = null, onChange } = props;

//   const convertToDefEventPara = (name, value) => ({
//     target: {
//       name,
//       value,
//     },
//   });

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DatePicker
//         label={label}
//         name={name}
//         value={value}
//         onChange={(date) => onChange(convertToDefEventPara(name, date))}
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

const {
  differenceInCalendarYears,
  differenceInYears,
  intervalToDuration,
  parse,
} = require("date-fns");
export default function calculateAge2(dob) {
  const date = parse(dob, "dd/MM/yyyy", new Date());
  const age = differenceInCalendarYears(new Date(), date);
  return age;
}

console.log("dob = 01/04/2000"); // Running on 2021-08-05
console.log("- using differenceInYears: ", calculateAge2("01/04/2000")); // 21
console.log("- using differenceInCalendarYears: ", calculateAge2("01/04/2000")); // 21

console.log("dob = 01/10/2000"); // Running on 2021-08-05
console.log("- using differenceInYears: ", calculateAge2("01/10/2000")); // 20
console.log("- using differenceInCalendarYears: ", calculateAge2("01/10/2000")); // 21

function calculateFullAge(dob) {
  const birthDate = parse(dob, "dd/MM/yyyy", new Date());
  const { years, months, days } = intervalToDuration({
    start: birthDate,
    end: new Date(),
  });
  return { years, months, days };
}

// Running on 2021-08-05
console.log("- using intervalToDuration: ", calculateFullAge("01/04/2000")); // {years: 21, months: 4, days: 4}
console.log("- using intervalToDuration: ", calculateFullAge("01/10/2000")); // {years: 20, months: 10, days: 4}
