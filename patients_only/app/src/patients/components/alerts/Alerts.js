import React, { Component } from "react";
import UIDialog from "components/ui/UIDialog";
import Api from "../../store/Api";
import CloseIcon from "@material-ui/icons/Close";
import AlertIcon from "./AlertIcon";

class Alerts extends Component {
  state = { alerts: null, open: false };

  componentDidMount() {
    this.getAlerts();
  }

  async getAlerts() {
    if (!this.state.alerts) {
      this.setState({ alerts: await Api.alerts(4) });
    }
  }

  toggleDialog = () => {
    this.setState({ open: !this.state.open });
  };

  rightNav = () => {
    return <CloseIcon onClick={this.toggleDialog} />;
  };

  content = () => {
    return <div>Patient Alerts...</div>;
  };

  render() {
    let { open } = this.state;

    return (
      <div>
        <UIDialog
          open={open}
          title="Patient Alerts"
          rightNav={this.rightNav}
          content={this.content}
        />
        <AlertIcon parentOnClick={this.toggleDialog} />
      </div>
    );
  }
}

export default Alerts;
