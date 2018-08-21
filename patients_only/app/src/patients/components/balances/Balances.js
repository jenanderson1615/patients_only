import React from 'react';
import Typography from '@material-ui/core/Typography';
import DataModel from './store/DataModel';
import { List, ListItem, ListItemText } from '@material-ui/core';

// --------------------------------------------

class Balances extends React.Component {

  render() {
    return (
      <List>
        <ListItem>
          <ListItemText secondary="Patient" />
          <Typography>{DataModel.patient_balance}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText secondary="Insurance" />
          <Typography>{DataModel.insurance}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText secondary="Unapplied" />
          <Typography>{DataModel.unapplied}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText secondary="Account" />
          <Typography>{DataModel.account}</Typography>
        </ListItem>
      </List>
    )
  }
}

export default Balances;