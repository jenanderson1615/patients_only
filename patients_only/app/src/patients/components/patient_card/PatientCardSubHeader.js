import React from "react";
import { Typography } from "@material-ui/core";

const PatientCardSubHeader = ({ birthdayString, age }) => {
  return (
    <Typography variant="caption">
      {birthdayString} ({age})
    </Typography>
  );
};

export default PatientCardSubHeader;
