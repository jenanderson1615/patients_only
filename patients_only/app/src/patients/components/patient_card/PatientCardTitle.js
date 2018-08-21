import React, { Component } from "react";
import { Typography } from "@material-ui/core";

class PatientCardTitle extends Component {
  state = { alertsOpen: false };

  toggleAlerts = () => {
    this.setState({ alertsOpen: !this.state.alertsOpen });
  };

  render() {
    let { lastName, firstName, displayId, hasAlerts } = this.props;
    let { open } = this.state;
    return (
      <React.Fragment>
        <Typography variant="subheading">
          {lastName}, {firstName} ({displayId})
        </Typography>
        {hasAlerts && (
          <React.Fragment>
            {/*
            <PatientAlertIcons onClick={this.toggleAlerts} />
            <PatientAlerts open={open} />
        */}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default PatientCardTitle;
