import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Form, useForm } from "../components/useForm";
import { createTheme, Paper, Grid, Stack } from "@mui/material";
import Controls from "../components/controls/Controls";
import * as studentService from "../components/Services/studentService";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  name: "",
  email: "",
  parentname: "",
  age: "",
  city: "",
  state: "",
  departmentId: "",
  genderItems: "",
  religion: "",
  dob: "",
  studentnumber: "",
  pincodenumber: "",
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
              <Controls.Input
                variant="outlined"
                label="StudentName"
                name="studentname"
                value={values.studentname}
                onChange={handleInputChange}
                error={errors.studentname}
              />
              <Controls.Input
                variant="outlined"
                label="Parent/GuardianName"
                name="parent/guardianname"
                value={values.parentguardianname}
                onChange={handleInputChange}
                error={errors.parentguardianname}
              />
            </Grid>

            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <Controls.StudentNumber />

              <Controls.Input
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                required={true}
                error={errors.email}
              />
            </Grid>
            {/* <Controls.DOB
              label="Date of Birth"
              name="dob"
              value={values.dob}
              onChange={handleInputChange}
              error={errors.dob}
            /> */}
            <Controls.Address
              AddrValues={values}
              onChange={handleInputChange}
              AddrErrors={errors}
            />

            <Grid item xs={6}>
              <Grid container sx={{ justifyContent: "center" }}>
                <Controls.Button type="submit" text="Submit" />
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Controls.Button text="Reset" onClick={resetForm} />
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </>
  );
}
