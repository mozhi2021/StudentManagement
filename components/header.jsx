import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Bluetooth } from "@mui/icons-material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function Header() {
  return (
    <Card sx={{ minWidth: 400, justifyContent: "center" }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 20, justifyContent: "center" }}
          color="text.secondary"
          gutterBottom
          textAlign="center"
          background
        >
          Student Management
        </Typography>
      </CardContent>
    </Card>
  );
}
