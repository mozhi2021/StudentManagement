// import * as React from "react";
// import PropTypes from "prop-types";
// import { IMaskInput } from "react-imask";
// import Box from "@mui/material/Box";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import { OutlinedInput } from "@mui/material";

// const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
//   const { onChange, ...other } = props;
//   return (
//     <IMaskInput
//       {...other}
//       mask="000 000"
//       definitions={{
//         "#": /[1-9]/,
//       }}
//       inputRef={ref}
//       onAccept={(value) => onChange({ target: { name: props.name, value } })}
//       overwrite
//     />
//   );
// });

// TextMaskCustom.propTypes = {
//   name: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// export default function PincodeNumber() {
//   const [values, setValues] = React.useState({
//     textmask: "000 000",
//   });

//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };

//   return (
//     <Box
//       sx={{
//         "& > :not(style)": {
//           m: 1,
//         },
//       }}
//     >
//       <FormControl>
//         <InputLabel htmlFor="formatted-text-mask-input">Pincode: </InputLabel>
//         <OutlinedInput
//           value={values.textmask}
//           onChange={handleChange}
//           name="textmask"
//           id="formatted-text-mask-input"
//           inputComponent={TextMaskCustom}
//         />
//       </FormControl>
//     </Box>
//   );
// }

import * as React from "react";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { FormHelperText } from "@mui/material";

const TextMaskCustom = React.forwardRef(function TextMaskPincode(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000 000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Pincode(props) {
  const {
    name,
    label,
    value,
    onChange,
    error = null,
    required,
    disabled,
    readOnly,
  } = props;

  return (
    <FormControl {...(error && { error: true })} size="small">
      <InputLabel htmlFor="formatted-text-mask-input">
        {required ? label + " *" : label}
      </InputLabel>
      <OutlinedInput
        name={name}
        label={required ? label + " *" : label}
        value={value}
        onChange={onChange}
        disabled={disabled || false}
        inputComponent={TextMaskCustom}
        inputProps={{
          readOnly: Boolean(readOnly || false),
        }}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
