import React from "react";
import PatientSearchStore from "./store/Store";
import PatientSearchPage from "./pages/PatientSearchPage";
import UINavAddIcon from "../../../../components/ui/UINavAddIcon";
import PatientCreatePage from "../../services/demographics/components/PatientCreatePage";
import { observer } from "mobx-react";
import UIStore from "../../store/UIStore";
import UIFormDialog from "../../../../components/ui/UIFormDialog";

// ----------------------------------------------

class PatientSearchApp extends React.Component {
  constructor(props) {
    super(props);
    this.store = {
      ui: UIStore.create()
    };
  }

  componentDidMount() {
    this.props.appStore.setTitle("Patient Search");

    let menuItems = [
      {
        title: "Add Patient in New Account",
        parentOnClick: this.store.ui.toggleFormDialog
      }
    ];

    this.props.appStore.setRightNav(<UINavAddIcon menuOptions={menuItems} />);
  }

  createAccount = () => {
    return (
      <PatientCreatePage
        parentCallBack={this.formCallBack}
        patient={this.props.patientStore.newPatient}
        uiStore={this.store.ui}
        hideAccountProvider={false}
      />
    );
  };

  formCallBack = patientId => {
    this.props.history.push('/patients/' + patientId + '/patient_home');
  };

  // -----------------------------------------
  render() {
    return (
      <div>
        <PatientSearchPage {...this.props} store={PatientSearchStore} />

        <UIFormDialog
          open={this.store.ui.showFormDialog}
          toggleDialog={this.store.ui.toggleFormDialog}
          title="Add Patient in New Account"
          viewPage={() => this.createAccount()}
        />
      </div>
    );
  }
}

export default observer(PatientSearchApp);
