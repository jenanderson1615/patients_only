import React from "react";
import UIPanelGroup from "components/ui/UIPanelGroup";
import Guarantors from "../../../components/guarantors/Guarantors";
import Referrals from "../../../components/referrals/Referrals";
import Balances from '../../../components/balances/Balances'
import FeeSchedules from "../../../services/demographics/components/FeeSchedules";
import PatientViewPage from '../../../services/demographics/components/PatientViewPage'
import UIStore from "../../../store/UIStore";
import PatientEditPage from "../../../services/demographics/components/PatientEditPage";
import UIFormDialog from "../../../../../components/ui/UIFormDialog";

// --------------------------------------------

class PatientPanels extends React.Component {
  constructor(props) {
    super(props);
    this.store = {
      editPatientUIStore: UIStore.create()
    };
  }

  state = { open: false };

  toggleDialog = () => {
    this.setState({ open: !this.state.open });
  };

  panels = () => {
    let { patient } = this.props;
    let { patientId } = patient;

    return [
      {
        title: "Demographics",
        content: expanded => (
          <PatientViewPage patient={patient} fetch={expanded} toggleEditPatient={this.toggleDialog}/>
        )
      },
      {
        title: "Guarantors",
        content: expanded => (
          <Guarantors patientId={patientId} fetch={expanded} />
        )
      },
      {
        title: "Balances",
        content: expanded => <Balances patientId={patientId} fetch={expanded} />
      },
      {
        title: "Alerts",
        content: expanded => <Balances patientId={patientId} fetch={expanded} />
      },
      {
        title: "Provider, Office, Fee Schedule",
        content: expanded => (
          <FeeSchedules patientId={patientId} fetch={expanded} />
        )
      },
      {
        title: "Referrals",
        content: expanded => (
          <Referrals patientId={patientId} fetch={expanded} />
        )
      },
      {
        title: "Emergency Contact",
        content: expanded => (
          <Guarantors patientId={patientId} fetch={expanded} />
        )
      }
    ];
  };

  formCallBack = (editedPatientModel) => {
    this.toggleDialog();
    this.patient = editedPatientModel;
    this.props.navigationMethod(editedPatientModel.patientId);
  };

  editPage = () => {
    return (
      <PatientEditPage
        parentCallBack={this.formCallBack}
        patient={this.props.editPatient}
      />
    );
  };

  render = () => {
    return (
      <div>
        <UIFormDialog
          title="Edit Patient"
          open={this.state.open}
          viewPage={() => this.editPage()}
          toggleDialog={this.toggleDialog}
        />
        
        <UIPanelGroup panels={this.panels()} />
      </div>
    );
  };
}

export default PatientPanels;
