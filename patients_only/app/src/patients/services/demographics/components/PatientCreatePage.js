import React, { Component } from "react";
import FormBuilder from "components/form-builder";
import DemographicFormModel from "../store/DemographicFormModel";
import { applySnapshot } from "mobx-state-tree";
import References from "services/references/References";
import Users from "services/users/Users";
import UIProgress from "components/ui/UIProgress";

class PatientCreatePage extends Component {
  state = { loading: true };

   componentDidMount() {
    this.populateFormModel();
    this.removeAccountProviderField();
  }

  async populateFormModel() {
    let offices = await References.forSelect("offices");
    let feeSchedules = await References.forSelect("feeSchedules");
    let providers = await Users.forSelect("providers");

    this.setFormOptions("officeId", offices);
    this.setFormOptions("feeScheduleId", feeSchedules);
    this.setFormOptions("patientProviderId", providers);
    this.setFormOptions("accountProviderId", providers);

    this.setState({
      loading: false
    });
  }

  setFormOptions(key, val) {
    let modelOptions = DemographicFormModel.find(m => m.name === key);
    modelOptions.options = val;
  }

/**
 * Called for create patient form.  Makes it so the account provider field doesn't
 *  show in the form.
  */  
  removeAccountProviderField() {
    let fieldData = DemographicFormModel.find(m => m.name === "accountProviderId");
    fieldData.hidden = this.props.hideAccountProvider;

    fieldData = DemographicFormModel.find(m => m.name === "patientProviderId");
    fieldData.hidden = false;

    fieldData = DemographicFormModel.find(m => m.name === "officeId");
    fieldData.hidden = false;

    fieldData = DemographicFormModel.find(m => m.name === "feeScheduleId");
    fieldData.hidden = false;
  }

  onChange = (key, val) => {
    this.props.patient.update(key, val);
  };

  onSubmit = async (event) => {
    if (event.target.name == "PatientCreate")
    {
      let newPatientId = await this.props.patient.saveNewPatient();
      applySnapshot(this.props.patient, {});
      this.closeForm();
      this.props.parentCallBack(newPatientId.patientId);
    }
  };

  onCancel = () => {
    this.closeForm();
  };

  closeForm = () => {
    this.props.uiStore.toggleFormDialog();
  };

  render() {
    let { patient } = this.props;
    let { loading } = this.state;

    return (
      <div>
        {loading && <UIProgress />}
        {!loading && (
          <FormBuilder
            data={patient}
            formModel={DemographicFormModel}
            parentOnChange={this.onChange}
            parentOnSubmit={this.onSubmit}
            parentOnCancel={this.onCancel}
            formName={"PatientCreate"}
          />
        )}
      </div>
    );
  }
}

export default PatientCreatePage;
