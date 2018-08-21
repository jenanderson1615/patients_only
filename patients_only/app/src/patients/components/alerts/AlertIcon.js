import React from "react";
import WarningIcon from "@material-ui/icons/Warning";

const AlertIcon = ({ parentOnClick }) => {
  return <WarningIcon onClick={parentOnClick} />;
};

export default AlertIcon;
