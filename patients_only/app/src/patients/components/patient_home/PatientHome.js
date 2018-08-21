import React from "react";
import { observer } from "mobx-react";
import PatientPanels from "./components/PatientHomePanels";
import PatientCard from "../../components/patient_card/PatientCard";
import AddFormIcon from "./components/AddFormIcon";

// --------------------------------------------

class PatientHome extends React.Component {
  constructor(props) {
    super(props);
    this.pageTitle = "Patients";
    let patientId = parseInt(props.match.params.patientId);
    props.patientStore.setId(patientId);
  }

  componentDidMount() {
    this.setTitleAndSubtitle();
    this.props.appStore.setRightNav(
      <AddFormIcon
        patient={this.props.patientStore}
        navigationMethod={this.navigateToNewPatient}
        orderStore={this.props.orderStore}
        appointmentStore={this.props.appointmentStore}
      />
    );
  }

  setTitleAndSubtitle = () => {
    this.props.appStore.setTitle(
      this.pageTitle,
      this.props.patientStore.patientModel.getSubtitle()
    );
  };

  navigateToNewPatient = async newPatientId => {
    this.props.patientStore.setId(newPatientId);
    await this.props.patientStore.find();
    this.props.history.push("/patients/" + newPatientId + "/patient_home");
    this.setTitleAndSubtitle();
  };

  // ------------------------------------------

  render() {
    let { patientStore } = this.props;
    let { patientModel, editPatient } = patientStore;

    return (
      <div>
        {!patientStore.loading && (
          <div className="padding">
            <PatientCard patient={patientModel} />
            <PatientPanels patient={patientModel} editPatient={editPatient} navigationMethod={this.navigateToNewPatient}/>
          </div>
        )}
      </div>
    );
  }
}

export default observer(PatientHome);
