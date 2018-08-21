import React from "react";
import { observer } from "mobx-react";
import UIProgress from "components/ui/UIProgress";
import PatientSearch from "../components/PatientSearch";
import SearchResults from "../components/SearchResults";
import PatientSearchStore from "../store/Store";
import PatientIdStorage from "../../../store/PatientIdStore";

// --------------------------------------------
class PatientSearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.store = PatientSearchStore;
    this.locationState = props.history.location.state;
  }

  componentDidMount() {
    if (!this.locationState) {
      this.store.clearSearch();
    }
  }

  onResultClick = patientId => {
    this.props.history.push({ state: true });
    PatientIdStorage.setId(patientId);
    this.findPatient(patientId);
  };

  findPatient = async (patientId) => {
    await this.props.patientStore.find();
    this.props.history.push(
      "/patients/" + parseInt(patientId) + "/patient_home"
    );
  };


  // ---------------------------------------------------

  render() {
    let { loading, patients } = this.store;

    return (
      <div>
        <PatientSearch store={this.store} />
        {loading && <UIProgress />}
        {!loading &&
          patients && (
            <SearchResults
              parentCallBack={this.onResultClick}
              patients={patients}
            />
          )}
      </div>
    );
  }
}

export default observer(PatientSearchPage);
