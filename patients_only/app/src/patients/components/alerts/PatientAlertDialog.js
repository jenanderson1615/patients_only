import React from 'react';
import Card, { CardHeader } from '@material-ui/core/Card';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Warning from '@material-ui/icons/Warning';

// --------------------------------------------

const PatientAlertDialog = ({ alerts, isOpen, parentToggle }) => {

  let alertItems = Object.keys(alerts).map((alert,messages) => {

    let alertMessages = alerts[alert].map((message,idx) => {
      return <Typography key={idx}><strong>{message.message}</strong><br /></Typography>
    });

    return (
      <Card key={alert}>
        <CardHeader
          avatar={<Warning />}
          subheader={alertMessages}
        />
      </Card>
    )
  });

  return (
    <Dialog 
      maxWidth='md'
      onClick={parentToggle}
      open={isOpen}>
      <Paper>{alertItems}</Paper>
    </Dialog>
  );

};

export default PatientAlertDialog;