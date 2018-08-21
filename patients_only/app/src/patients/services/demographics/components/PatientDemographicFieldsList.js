import React from "react";
import { Button, List } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import PatientFieldView from "../components/PatientFieldView";
import DemographicFormModel from "../store/DemographicFormModel";
import referenceSet from "services/references/StaticReferenceHelper";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    paddingBottom: 40
  },
  editBtn: {
    position: "absolute",
    bottom: 12,
    left: "50%",
    marginLeft: -38,
    zoom: 0.7
  }
};

/**
 * Render the fields list and the edit button
 * @prop classes is a css class
 * @prop toggleEditPatient is the method that determines whether the edit patient dialog is open
 * @prop patient is the patient to display in the demographics
 */
const PatientDemographicFieldsList = ({
  classes,
  toggleEditPatient,
  patient
}) => {
  return (
    <div className={classes.root}>
      <List>{fields(patient)}</List>
      <Button
        className={classes.editBtn}
        variant="fab"
        color="primary"
        onClick={toggleEditPatient}
      >
        <EditIcon />
      </Button>
    </div>
  );
};

/**
 * Loops through all the PatientDemographicFields entries for the fieldName and gets the values
 *  from the patient model
 */
let fields = patient => {
  return DemographicFormModel.map(i => {
    let fieldName = i.name;
    let label = i.label;
    var fieldVal = patient[fieldName];

    //These fields are not in the demographics view, they're in a different list
    if (
      fieldName == "accountProviderId" ||
      fieldName == "patientProviderId" ||
      fieldName == "officeId" ||
      fieldName == "feeScheduleId"
    )
      return;

    if (i.type == "select") {
      let optionsForField = selectOptions(fieldName);
      let selectedString = selectValues(fieldName, patient, optionsForField);
      return <PatientFieldView label={label} value={selectedString} />;
    } else {
      return <PatientFieldView label={label} value={fieldVal} />;
    }
  });
};

let selectOptions = selectString => {
  switch (selectString) {
    case "sex":
      return referenceSet.sex;
      break;
    case "phone1Type":
    case "phone2Type":
    case "phone3Type":
      return referenceSet.phoneTypes;
      break;
    case "maritalStatus":
      return referenceSet.maritalStatus;
      break;
    case "employment":
      return referenceSet.employmentType;
      break;
    case "relationshipToPrimary":
    case "relationshipToSecondary":
      return referenceSet.relationshipTypes;
      break;
  }
};

let selectValues = (selectString, patient, options) => {
  var option = {};
  switch (selectString) {
    case "sex":
      option = options[patient.sex];
      break;
    case "phone1Type":
      option = options[patient.phone1Type];
      break;
    case "phone2Type":
      option = options[patient.phone2Type];
      break;
    case "phone3Type":
      option = options[patient.phone3Type];
      break;
    case "maritalStatus":
      option = options[patient.maritalStatus];
      break;
    case "employment":
      option = options[patient.employment];
      break;
    case "relationshipToPrimary":
      option = options.find(
        index => index.code === patient.relationshipToPrimary
      );
      break;
    case "relationshipToSecondary":
      option = options.find(
        index => index.code === patient.relationshipToSecondary
      );
      break;
  }
  if (option) return option.name;
  else return "";
};

export default withStyles(styles)(PatientDemographicFieldsList);
