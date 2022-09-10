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
    padding: theme.spacing(10),
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
  email: "",
  parentguardianname: "",
  age: "",
  departmentId: "",
  genderItems: "",
  religion: "",
  studentphonenumber: "",
  studentname: "",
  dateofbirth: new Date(),
  addressone: "",
  addresstwo: "",
  cityone: "",
  citytwo: "",
  stateIDone: "",
  countryIDone: "",
  stateIDtwo: "",
  countryIDtwo: "",
  gendergroup: "",
};

export default function StudentForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const [openProgress, setOpenProgress] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("studentname" in fieldValues) {
      temp.studentname = fieldValues.studentname ? "" : "Required.";
      if (fieldValues.studentname != "")
        temp.studentname = /^[A-Za-z]+$/.test(fieldValues.studentname)
          ? ""
          : "Name should be alphabets";
    }
    if ("studentphonenumber" in fieldValues) {
      if (
        fieldValues.studentphonenumber != "" &&
        fieldValues.studentphonenumber !== null &&
        fieldValues.studentphonenumber.length !== 0
      )
        temp.studentphonenumber =
          fieldValues.studentphonenumber.length < 14 ? "Required" : "";
    }
    if ("email" in fieldValues) {
      if (fieldValues.email != "" && fieldValues.email !== null)
        temp.email = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(
          fieldValues.email
        )
          ? ""
          : "Email is not valid";
    }

    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
    readonly,
  } = useForm(initialFValues, true, validate);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    // window.alert(JSON.stringify(values));

    if (validate()) {
      window.alert(JSON.stringify(values));
    }
  };

  useEffect(() => {
    var today = new Date();
    var birthDate = new Date(values.dateofbirth);
    // var defaultDate = new Date()
    // defaultDate.setDate(defaultDate.getDate() + 2)
    var age = today.getFullYear() - birthDate.getFullYear();
    values.age = age + " years";
  }, [values.dateofbirth]);

  return (
    <>
      <Paper className={classes.pageContent}>
        <Form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <Controls.Input
                label="Student Name"
                name="studentname"
                value={values.studentname}
                onChange={handleInputChange}
                required={true}
                error={errors.studentname}
              />
              <Controls.Input
                label="Parent or Guardian Name"
                name="parentguardianname"
                value={values.parentguardianname}
                onChange={handleInputChange}
                error={errors.parentguardianname}
              />

              <Controls.Dropdown
                label="Religion"
                name="departmentId"
                value={values.departmentId}
                onChange={handleInputChange}
                options={studentService.getReligionCollection()}
                error={errors.departmentId}
              />

              <Controls.RadioGroup
                label="Gender"
                name="gendergroup"
                value={values.gendergroup}
                onChange={handleInputChange}
                items={genderItems}
                error={errors.gendergroup}
              />
              <Controls.Phone
                name="studentphonenumber"
                label="Student Phone Number"
                value={values.studentphonenumber}
                onChange={handleInputChange}
                required={true}
                error={errors.studentphonenumber}
              />

              <Controls.Input
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                required={true}
                error={errors.email}
              />
            </Grid>
            <Grid container>
              <Grid item width="49%">
                <Controls.DtPicker
                  label="Date of Birth"
                  name="dateofbirth"
                  value={values.dateofbirth}
                  onChange={handleInputChange}
                  error={errors.dateofbirth}
                  // readOnly={readonly || true}
                />
              </Grid>
              <Grid item width="30%">
                <Controls.Input
                  label="Age"
                  name="age"
                  value={values.age}
                  onChange={handleInputChange}
                  readOnly={readonly || true}
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Controls.Address
                AddrValues={values}
                onChange={handleInputChange}
                AddrErrors={errors}
              />
            </Grid>
          </Grid>
          <br />

          <Grid container>
            <Grid item xs={6} sx={{ paddingLeft: "20%" }}>
              <Controls.Button type="submit" text="Submit" />
            </Grid>
            <Grid item xs={6} sx={{ paddingRight: "30%" }}>
              <Controls.Button text="Reset" onClick={resetForm} />
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </>
  );
}
