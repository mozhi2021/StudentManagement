import React from "react";
import States from "./states";
import Controls from "./Controls";

export default function Address(props) {
  const { onChange, AddrValues, AddrErrors = null } = props;

  return (
    <>
      <Controls.Input
        name="address1"
        label="Address"
        required={true}
        value={AddrValues.address1}
        onChange={onChange}
        error={AddrErrors.address1}
      />
      <Controls.Input
        name="address2"
        label="Address2"
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
      {/* <userControls.ZipCode
                    name='zip'
                    label='Zip'
                    required={true}
                    zipValue={AddrValues.zip}
                    onChange={onChange}
                    error={AddrErrors.zip}
                /> */}
    </>
  );
}
