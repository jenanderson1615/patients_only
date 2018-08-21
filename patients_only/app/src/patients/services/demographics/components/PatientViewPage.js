import React from "react";
import { observer } from "mobx-react";
import PatientDemographicFieldsList from "../components/PatientDemographicFieldsList";

class PatientViewPage extends React.Component {
  render() {
    return <PatientDemographicFieldsList {...this.props} />;
  }
}
export default observer(PatientViewPage);
