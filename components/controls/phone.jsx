import * as React from "react";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { FormHelperText } from "@mui/material";

const TextMaskPhone = React.forwardRef(function TextMaskPhone(props, ref) {
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

TextMaskPhone.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Phone(props) {
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
    <FormControl {...(error && { error: true })} size="big">
      <InputLabel htmlFor="formatted-text-mask-input">
        {required ? label + " *" : label}
      </InputLabel>
      <OutlinedInput
        name={name}
        label={required ? label + " *" : label}
        value={value}
        onChange={onChange}
        disabled={disabled || false}
        inputComponent={TextMaskPhone}
        inputProps={{
          readOnly: Boolean(readOnly || false),
        }}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
