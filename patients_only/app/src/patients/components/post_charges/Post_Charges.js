import React from "react";
import { Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  subHeader: {
    color: "#fff"
  }
};

class Post_Charges extends React.Component {
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
              Post Charges
            </Typography>
          </Toolbar>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Post_Charges);
