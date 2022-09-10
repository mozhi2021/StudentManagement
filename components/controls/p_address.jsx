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
            name="addressone"
            required={true}
            value={AddrValues.addressone}
            onChange={onChange}
            error={AddrErrors.addressone}
          />
          <Controls.Input
            name="cityone"
            label="City"
            required={true}
            value={AddrValues.cityone}
            onChange={onChange}
            error={AddrErrors.cityone}
          />
          <Controls.Dropdown
            name="stateIDone"
            label="State"
            required={true}
            value={AddrValues.stateIDone}
            onChange={onChange}
            options={States.getStates()}
            error={AddrErrors.stateIDone}
          />
          <Controls.Dropdown
            name="countryIDone"
            label="Country"
            required={true}
            value={AddrValues.countryIDone}
            onChange={onChange}
            options={Countries.getCountries()}
            error={AddrErrors.countryIDone}
          />
          <Controls.Pincode
            name="pincodenumberone"
            label="PincodeNumber"
            value={AddrValues.pincodenumberone}
            onChange={onChange}
            error={AddrErrors.pincodenumberone}
          />
        </Grid>
      </Grid>
    </>
  );
}
