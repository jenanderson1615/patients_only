import React from 'react';
import Warning from '@material-ui/icons/Warning';
import List, { ListItem, ListItemIcon } from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

// --------------------------------------------

const PatientAlertList = ({ alerts }) => {

  let alertItems = Object.keys(alerts).map((alert,messages) => {

    let alertMessages = alerts[alert].map((message,idx) => {
      return (
        <ListItem key={idx}>
          <Typography><strong>{message}</strong></Typography>
        </ListItem>
      );
    });

    return (
      <List key={alert}>
        <ListItem>
          <ListItemIcon>
            <Warning />
          </ListItemIcon>
          <List>{alertMessages}</List>
        </ListItem>
      </List>
    )
  });

  return <div>{alertItems}</div>
} 

export default PatientAlertList;