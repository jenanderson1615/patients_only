import React from "react";
import { List, Toolbar } from "@material-ui/core";
import UIListItem from "components/ui/UIListItem";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  subHeader: {
    color: "#fff"
  }
};

class Insurance extends React.Component {
  componentDidMount() {
    this.setTitleAndSubtitle();
  }

  setTitleAndSubtitle = () => {
    this.props.appStore.setTitle(
      "Patients",
      this.props.patientStore.patientModel.getSubtitle()
    );
  };

  render() {
    let { classes } = this.props;
    return (
      <div>
        <div className="sub-toolbar">
          <Toolbar>
            <Typography
              variant="title"
              className={classes.subHeader}
            >
              Insurance
            </Typography>
          </Toolbar>
        </div>

        <List>
          <UIListItem label={"Carrier"} value={"Average Insurance"} />
          <UIListItem label={"Plan"} value={"Average PPO"} />
          <UIListItem label={"Start Date"} value={"01/01/2017"} />
          <UIListItem label={"End Date"} value={"12/31/2017"} />
          <UIListItem label={"Guarantor"} value={"Avalon, Jessie"} />
          <UIListItem label={"Subscriber ID"} value={"123456789"} />
          <UIListItem label={"Subscriber ID"} value={"987654321"} />
          <UIListItem label={"Employer"} value={"Team Rocket"} />
          <UIListItem label={"Group ID"} value={"123456789"} />
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Insurance);
