import React from "react";
import Router from "components/Router";
import Routes from "./Routes";
import PatientIdStorage from "./store/PatientIdStore";

// ----------------------------------------------

class PatientsApp extends React.Component {
  componentDidMount() {
    let patientId = parseInt(this.props.match.params.patientId);

    if (patientId && !isNaN(patientId)) {
      PatientIdStorage.setId(patientId);
      this.findPatient(patientId);
    } else this.props.history.push("/patients/search");
  }

  findPatient = async patientId => {
    await this.props.patientStore.find();
  };

  // -----------------------------------------

  render() {
    return (
      <Router
        patientStore={this.props.patientStore}
        routes={Routes}
        orderStore={this.props.orderStore}
        appointmentStore={this.props.appointmentStore}
      />
    );
  }
}

export default PatientsApp;
