import React from "react";
import Controls from "./Controls";
import { Grid } from "@mui/material";
import * as Countries from "../data/countries";
import * as States from "../data/states";
import * as getStates from "../data/states";
import * as getCountries from "../data/countries";

export default function Address1(props) {
  const { onChange, AddrValues, AddrErrors = null } = props;

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Controls.Input
            name="addressone"
            // label="Permanent Address"
            required={true}
            value={AddrValues.address1}
            onChange={onChange}
            error={AddrErrors.address1}
          />
          <Controls.Input
            name="cityone"
            label="City"
            required={true}
            value={AddrValues.city}
            onChange={onChange}
            error={AddrErrors.city}
          />
          <Controls.Dropdown
            name="stateIDone"
            label="State"
            required={true}
            value={AddrValues.stateID}
            onChange={onChange}
            options={States.getStates()}
            error={AddrErrors.stateID}
          />
          <Controls.Dropdown
            name="countryIDone"
            label="Country"
            required={true}
            value={AddrValues.countryID}
            onChange={onChange}
            options={Countries.getCountries()}
            error={AddrErrors.countryID}
          />
          <Controls.Pincode
            name="pincodenumberone"
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
