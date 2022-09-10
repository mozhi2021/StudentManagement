import React from "react";
import Controls from "./Controls";
import { Grid } from "@mui/material";
import * as Countries from "../data/countries";
import * as States from "../data/states";
import * as getStates from "../data/states";
import * as getCountries from "../data/countries";

export default function P_address(props) {
  const { onChange, AddrValues, AddrErrors = null } = props;

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Controls.Input
            name="addresstwo"
            required={true}
            value={AddrValues.addresstwo}
            onChange={onChange}
            error={AddrErrors.addresstwo}
          />
          <Controls.Input
            name="citytwo"
            label="City"
            required={true}
            value={AddrValues.citytwo}
            onChange={onChange}
            error={AddrErrors.citytwo}
          />
          <Controls.Dropdown
            name="stateIDtwo"
            label="State"
            required={true}
            value={AddrValues.stateIDtwo}
            onChange={onChange}
            options={States.getStates()}
            error={AddrErrors.stateIDtwo}
          />
          <Controls.Dropdown
            name="countryIDtwo"
            label="Country"
            required={true}
            value={AddrValues.countryIDtwo}
            onChange={onChange}
            options={Countries.getCountries()}
            error={AddrErrors.countryIDtwo}
          />
          <Controls.Pincode
            name="pincodenumbertwo"
            label="PincodeNumber"
            value={AddrValues.pincodenumbertwo}
            onChange={onChange}
            error={AddrErrors.pincodenumbertwo}
          />
        </Grid>
      </Grid>
    </>
  );
}
