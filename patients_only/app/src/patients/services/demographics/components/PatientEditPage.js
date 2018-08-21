import React, { Component } from "react";
import FormBuilder from "components/form-builder";
import DemographicFormModel from "../store/DemographicFormModel";

class PatientEditPage extends Component {
  componentWillMount() {
    this.removeProviderOfficeFeeSchedule();
  }

  removeProviderOfficeFeeSchedule() {
    var fieldData = DemographicFormModel.find(m => m.name === "accountProviderId");
    fieldData.hidden = true;

    fieldData = DemographicFormModel.find(m => m.name === "patientProviderId");
    fieldData.hidden = true;

    fieldData = DemographicFormModel.find(m => m.name === "officeId");
    fieldData.hidden = true;

    fieldData = DemographicFormModel.find(m => m.name === "feeScheduleId");
    fieldData.hidden = true;
  }

  onChange = (key, val) => {
    this.props.patient.update(key, val);
  };

  editPageSubmit = async event => {
    if (event.target.name == "PatientEdit") {
      await this.props.patient.updatePatient();
      this.props.parentCallBack(this.props.patient);
    }
  };

  onCancel = () => {
    this.props.parentCallBack();
  };

  fixBirthdate() {
    this.props.patient.fixBirthdate();
  }

  render() {
    this.fixBirthdate();

    return (
      <div>
        <FormBuilder
          data={this.props.patient}
          formModel={DemographicFormModel}
          parentOnChange={this.onChange}
          parentOnSubmit={this.editPageSubmit}
          parentOnCancel={this.onCancel}
          formName={"PatientEdit"}
        />
      </div>
    );
  }
}

export default PatientEditPage;
