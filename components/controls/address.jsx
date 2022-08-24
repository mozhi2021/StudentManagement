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
              <Controls.Address1
                AddrValues={AddrValues}
                onChange={onChange}
                AddrErrors={AddrErrors}
              />
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
              <Controls.Address2
                AddrValues={AddrValues}
                onChange={onChange}
                AddrErrors={AddrErrors}
              />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
}
