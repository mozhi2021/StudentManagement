import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Form, useForm } from "../components/useForm";
import { createTheme, Paper, Grid, Stack } from "@mui/material";
import Controls from "../components/controls/Controls";
import * as studentService from "../components/Services/studentService";

const theme = createTheme();
const useStyles = makeStyles({
  pageContent: {
    margin: theme.spacing(13),
    padding: theme.spacing(8),
    // backgroundColor: "#eed971ff",
    width: "80%",
  },
});
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  name: "",
  email: "",
  phone: "",
  parentname: "",
  age: "",
  city: "",
  state: "",
  departmentId: "",
  genderItems: "",
  religion: "",
  dtPicker: "",
};

export default function StudentForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const [openProgress, setOpenProgress] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("phoneNumber" in fieldValues) {
      temp.phoneNumber = fieldValues.phoneNumber ? "" : "Required";
      if (fieldValues.phoneNumber != "")
        temp.phoneNumber = /^[0-9]{10}$/.test(fieldValues.phoneNumber)
          ? ""
          : "Phone Number should be 10 digit numeric value";
    }
    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "Required";
      if (fieldValues.email != "")
        temp.email = /$^|.+@.+..+/.test(fieldValues.email)
          ? ""
          : "Email is not valid";
    }
    if ("subject" in fieldValues)
      temp.subject = fieldValues.subject ? "" : "Required.";
    if ("departmentId" in fieldValues)
      temp.departmentId = fieldValues.departmentId ? "" : "Required";

    if ("isAgreed" in fieldValues)
      temp.isAgreed = fieldValues.isAgreed == true ? "" : "Required";
    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert(JSON.stringify(values));
      resetForm();
    }
  };

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.pageContent}>
        <Form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <Controls.TextFields />
            </Grid>

            <Grid item xs={12}>
              <Controls.DtPicker
                label="Date of Birth"
                name="dtPicker"
                value={values.dtPicker}
                onChange={handleInputChange}
                error={errors.dtPicker}
              />
            </Grid>

            <Grid item xs={6}>
              <Controls.Select
                label="Religion"
                name="departmentId"
                value={values.departmentId}
                onChange={handleInputChange}
                options={studentService.getReligionCollection()}
                error={errors.departmentId}
              />
            </Grid>

            <Grid item xs={6}>
              <Controls.RadioGroup
                label="Gender"
                name="gendergroup"
                value={values.gendergroup}
                onChange={handleInputChange}
                items={genderItems}
                error={errors.gendergroup}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.P_Address label="Permanent Address" />
            </Grid>
            <Grid item xs={6}>
              <Controls.C_Address label="Communication Address" />
            </Grid>
            <Grid item xs={6}>
              <Controls.Phone />
            </Grid>

            {/* <Phone
              label="Phone Number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleInputChange}
              required={true}
              error={errors.phoneNumber}
              variant="standard"
            /> */}
            <Grid item xs={6}>
              <Controls.Input
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                required={true}
                error={errors.email}
              />
            </Grid>

            <Grid container sx={{ justifyContent: "center" }}>
              <Controls.Button type="submit" text="Submit" />
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </>
  );
}
