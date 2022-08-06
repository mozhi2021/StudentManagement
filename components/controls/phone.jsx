// // import { TextField } from '@mui/material';
// // import React from 'react'

// // export default function Phone(props) {

// //     const { name,label,value,error=null, onChange } = props;

// //     return (
// //          <TextField
// //             variant="outlined"
// //             label={label}
// //             name={name}
// //             value={value}
// //             onChange={onChange}
// //             {...(error && {error:true,helperText:error})}
// //             inputProps= {{maxLength:10}}
// //         />
// //     )
// // }

import * as React from "react";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000 000 0000"
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

export default function Phone() {
  const [values, setValues] = React.useState({
    textmask: "000 000 0000",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">
          Phone Number
        </InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          variant="outlined"
          inputComponent={TextMaskCustom}
        />
        {/* <TextField
          variant="outlined"
          label= Phone Number
          name= {phonenumber }
          value={value}
          onChange={onChange}
          {...(error && { error: true, helperText: error })}
          inputProps={{ maxLength: 10 }}
        /> */}
      </FormControl>
    </Box>
  );
}

// import React from "react";
// import { PropTypes } from "prop-types";
// import { FormHelperText } from "@mui/material";
// import { InputLabel } from "@mui/material";
// import { FormControl } from "@mui/material";
// import Input from "@mui/material/Input";
// import { TextField } from "@mui/material";
// import { IMaskInput } from "react-imask";

// const TextMaskPhone = React.forwardRef(function TextMaskPhone(props, ref) {
//   const { onChange, ...other } = props;
//   return (
//     <IMaskInput
//       {...other}
//       mask="(#00) 000-0000"
//       definitions={{ "#": /[1-9]/ }}
//       inputRef={ref}
//       onAccept={(value) => onChange({ target: { name: props.name, value } })}
//       overwrite
//     />
//   );
// });
// TextMaskPhone.propTypes = {
//   name: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// export default function Phone(props) {
//   const { name, label, value, onChange, error = null, required } = props;

//   return (
//     <FormControl {...(error && { error: true })} size="small">
//       <InputLabel sx={{ mt: 1, ml: -2 }}>
//         {required ? label + " *" : label}
//       </InputLabel>
//       {/* <Input */}
//       <TextField
//         value={value}
//         onChange={onChange}
//         name={name}
//         inputComponent={TextMaskPhone}
//         variant="outlined"
//       />
//       {error && <FormHelperText>{error}</FormHelperText>}
//     </FormControl>
//   );
// }
