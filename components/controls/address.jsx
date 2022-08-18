import React from "react";
import States from "../data/states";
import Controls from "./Controls";

export default function Address(props) {
  const { onChange, AddrValues, AddrErrors = null } = props;

  return (
    <>
      <Controls.Input
        name="address1"
        label="Permanent Address"
        required={true}
        value={AddrValues.address1}
        onChange={onChange}
        error={AddrErrors.address1}
      />
      <Controls.Input
        name="address2"
        label="Communication Address"
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
      {/* <Controls.Dropdown
        name="stateID"
        label="State"
        required={true}
        value={AddrValues.stateID}
        onChange={onChange}
        options={States.getStates()}
        error={AddrErrors.stateID}
      /> */}
      <Controls.PincodeNumber
        name="pin"
        label="Pincode"
        required={true}
        Value={AddrValues.pin}
        onChange={onChange}
        error={AddrErrors.pin}
      />
    </>
  );
}
