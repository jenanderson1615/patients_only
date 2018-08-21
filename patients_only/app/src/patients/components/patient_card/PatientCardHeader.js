import React from "react";
import { CardHeader, Avatar } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PatientCardTitle from "./PatientCardTitle";
import PatientCardSubHeader from "./PatientCardSubHeader";
import moment from "moment";

const PatientCardHeader = ({ patient }) => {
  let birthdayString = moment.utc(patient.birthdate).format("MM/DD/YYYY");
  let age = moment.utc(patient.birthdate).fromNow(true);
  return (
    <CardHeader
      avatar={
        <Avatar>
          <PersonIcon />
        </Avatar>
      }
      title={
        <PatientCardTitle
          firstName={patient.firstName}
          lastName={patient.lastName}
          displayId={patient.displayId}
          hasAlerts={patient.hasAlerts}
        />
      }
      subheader={
        <PatientCardSubHeader birthdayString={birthdayString} age={age} />
      }
    />
  );
};

export default PatientCardHeader;
