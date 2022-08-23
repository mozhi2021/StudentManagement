import React from "react";
import Controls from "./Controls";
import { Grid } from "@mui/material";
import * as Countries from "../data/countries";
import * as States from "../data/states";
import * as getStates from "../data/states";
import * as getCountries from "../data/countries";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { width } from "@mui/system";

export default function Address(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert(JSON.stringify(values));
      resetForm();
    }
  };

  const { onChange, AddrValues, AddrErrors = null } = props;

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Accordion sx={{ width: "71%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Permanent Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Controls.Input
                  name="address1"
                  // label="Permanent Address"
                  required={true}
                  value={AddrValues.address1}
                  onChange={onChange}
                  error={AddrErrors.address1}
                />
                <Controls.Input
                  name="city"
                  label="City"
                  required={true}
                  value={AddrValues.city}
                  onChange={onChange}
                  error={AddrErrors.city}
                />
                <Controls.Dropdown
                  name="stateID"
                  label="State"
                  required={true}
                  value={AddrValues.stateID}
                  onChange={onChange}
                  options={States.getStates()}
                  error={AddrErrors.stateID}
                />
                <Controls.Dropdown
                  name="countryID"
                  label="Country"
                  required={true}
                  value={AddrValues.countryID}
                  onChange={onChange}
                  options={Countries.getCountries()}
                  error={AddrErrors.countryID}
                />
                <Controls.Pincode
                  name="pincodenumber"
                  label="PincodeNumber"
                  // value={values.pincodenumber}
                  // onChange={handleInputChange}
                  // error={errors.pincodenumber}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: "71%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Communication Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Controls.Input
                  name="address2"
                  // label="Communication Address"
                  value={AddrValues.address2}
                  onChange={onChange}
                />
                <Controls.Input
                  name="city"
                  label="City"
                  required={true}
                  value={AddrValues.city}
                  onChange={onChange}
                  error={AddrErrors.city}
                />
                <Controls.Dropdown
                  name="stateID"
                  label="State"
                  required={true}
                  value={AddrValues.stateID}
                  onChange={onChange}
                  options={States.getStates()}
                  error={AddrErrors.stateID}
                />
                <Controls.Dropdown
                  name="countryID"
                  label="Country"
                  required={true}
                  value={AddrValues.countryID}
                  onChange={onChange}
                  options={Countries.getCountries()}
                  error={AddrErrors.countryID}
                />

                <Controls.Pincode
                  name="pincodenumber"
                  label="PincodeNumber"
                  // value={values.pincodenumber}
                  // onChange={handleInputChange}
                  // error={errors.pincodenumber}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
}
