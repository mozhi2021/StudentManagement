import React from "react";
import Controls from "./Controls";
import { Grid } from "@mui/material";
import * as Countries from "../data/countries";
import * as States from "../data/states";
import * as getStates from "../data/states";
import * as getCountries from "../data/countries";

export default function Address2(props) {
  const { onChange, AddrValues, AddrErrors = null } = props;

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Controls.Input
            name="addresstwo"
            // label="Permanent Address"
            required={true}
            value={AddrValues.address2}
            onChange={onChange}
            error={AddrErrors.address2}
          />
          <Controls.Input
            name="citytwo"
            label="City"
            required={true}
            value={AddrValues.city}
            onChange={onChange}
            error={AddrErrors.city}
          />
          <Controls.Dropdown
            name="stateIDtwo"
            label="State"
            required={true}
            value={AddrValues.stateID}
            onChange={onChange}
            options={States.getStates()}
            error={AddrErrors.stateID}
          />
          <Controls.Dropdown
            name="countryIDtwo"
            label="Country"
            required={true}
            value={AddrValues.countryID}
            onChange={onChange}
            options={Countries.getCountries()}
            error={AddrErrors.countryID}
          />
          <Controls.Pincode
            name="pincodenumbertwo"
            label="PincodeNumber"
            // value={values.pincodenumber}
            // onChange={handleInputChange}
            // error={errors.pincodenumber}
          />
        </Grid>
      </Grid>
    </>
  );
}
