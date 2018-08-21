import React from "react";
import UINavAddIcon from "../../../../../components/ui/UINavAddIcon";
import PatientCreatePage from "../../../services/demographics/components/PatientCreatePage";
import NewVitals from "../../../services/clinical/new_vitals/NewVitals";
import UIStore from "../../../store/UIStore";
import UIFormDialog from "../../../../../components/ui/UIFormDialog";
import { observer } from "mobx-react";

class AddFormIcon extends React.Component {
  constructor(props) {
    super(props);
    this.store = {
      vitalsUIStore: UIStore.create(),
      orderUIStore: UIStore.create(),
      appointmentUIStore: UIStore.create(),
      newPatientUIStore: UIStore.create()
    };
  }

  menuItems() {
    return [
      {
        title: "New Vitals",
        parentOnClick: this.store.vitalsUIStore.toggleFormDialog
      },
      {
        title: "New Patient",
        parentOnClick: this.store.newPatientUIStore.toggleFormDialog
      }
    ];
  }

  createPatient = () => {
    return (
      <PatientCreatePage
        parentCallBack={this.formCallBack}
        patient={this.props.patient.newPatient}
        uiStore={this.store.newPatientUIStore}
        hideAccountProvider={true}
      />
    );
  };

  createVitals = () => {
    return (
      <NewVitals
        parentCallBack={this.formCallBack}
        patient={this.props.patient}
      />
    );
  };

  formCallBack = patientId => {
    this.props.navigationMethod(patientId);
  };

  render() {
    return (
      <div>
        <UINavAddIcon menuOptions={this.menuItems()} />

        {/* Create Patient Option */}
        <UIFormDialog
          open={this.store.newPatientUIStore.showFormDialog}
          toggleDialog={this.store.newPatientUIStore.toggleFormDialog}
          title="Create Patient"
          viewPage={() => this.createPatient()}
        />

        {/* Create Vitals Option */}
        <UIFormDialog
          open={this.store.vitalsUIStore.showFormDialog}
          toggleDialog={this.store.vitalsUIStore.toggleFormDialog}
          title="Create Vitals"
          viewPage={() => this.createVitals()}
        />

      </div>
    );
  }
}
export default observer(AddFormIcon);
