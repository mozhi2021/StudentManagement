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
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

export default function Address(props) {
  const { onChange, AddrValues, AddrErrors = null } = props;

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? // ? "rgba(255, 255, 255, .05)"
          // : "rgba(0, 0, 0, .03)",
          "rgba(255, 255, 255, .05)"
        : // : "rgba(127, 127, 127)",
          // : "rgba(25, 39, 52)",
          // : "rgba(128, 0, 128)",
          "rgba(179, 179, 179)",
    // "rgba(64, 64, 64)",

    // flexDirection: "row-reverse",
    // "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    //   transform: "rotate(90deg)",
    // },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {/* <Accordion sx={{ width: "71%",backgroundColor: "gray"  }}> */}
          <Accordion sx={{ width: "71%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Permanent Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Controls.P_address
                AddrValues={AddrValues}
                onChange={onChange}
                AddrErrors={AddrErrors}
              />
            </AccordionDetails>
          </Accordion>
          {/* <Accordion sx={{ width: "71%", backgroundColor: "gray" }}> */}
          <Accordion sx={{ width: "71%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Communication Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Controls.C_address
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
