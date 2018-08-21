import React, { Component } from "react";
import { observer } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Button } from "@material-ui/core";
import PatientCardHeader from "./PatientCardHeader";

const styles = {
  root: {
    position: "relative",
    background: "#efeef4",
    boxShadow: "none",
    border: "1px solid #e8e6e9",
    width: "100%"
  }
};

class PatientCard extends Component {
  componentDidMount() {}

  render() {
    let { patient, classes } = this.props;

    return (
      <React.Fragment>
        {patient && (
          <Card className={classes.root}>
            <PatientCardHeader patient={patient} />
          </Card>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(observer(PatientCard));
