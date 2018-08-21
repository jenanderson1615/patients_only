import React from "react";
import { observer } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import UINotFound from "components/ui/UINotFound";
import SearchResultStyles from "../styles/SearchResults";

// --------------------------------------------

const SearchResults = ({ classes, patients, parentCallBack }) => {
  if (patients.length === 0) {
    return <UINotFound message="No patients were found" />;
  }

  const listItems = patients.map(({ first, last, patientId }) => {
    let title = first + " " + last + " (" + patientId + ")";
    var onClick;

    if (typeof parentCallBack === "function") {
      onClick = parentCallBack.bind(this, patientId, first, last);
    }

    return (
      <ListItem key={patientId} onClick={onClick}>
        <ListItemText primary={title} />
      </ListItem>
    );
  });

  return <List className="navList">{listItems}</List>;
};

export default withStyles(SearchResultStyles)(observer(SearchResults));
