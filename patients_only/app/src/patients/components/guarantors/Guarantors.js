import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PatientDemographicFields from '../../services/demographics/store/DemographicFormModel';
import GuarantorsData from './GuarantorsData';
import Divider from '@material-ui/core/Divider';

export const PersonFieldView = ({ label, value }) => {
  return (
      <div>
          <ListItem>
              <ListItemText secondary={label} />
              <Typography>{value}</Typography>
          </ListItem>
      </div>
  );
}

export const PatientDemographicFieldsList = ({ guarantor }) => {
  return (
    PatientDemographicFields.map((i) => {
      let fieldName = i.name;
      let fieldVal = guarantor[fieldName];
      let label = i.label;
      return <PersonFieldView label={label} value={fieldVal} />
    })
  )
}

export const MapGuarantorsData = () => {
  return (
    GuarantorsData.map((guarantor) => {
      return (
        <div>
          <PatientDemographicFieldsList guarantor={guarantor} />
          <Divider /><Divider />
        </div>
      )
    })
  )
}

class Guarantors extends React.Component {
  render() {
    return (
      <div>
        <List>
          <MapGuarantorsData />
        </List>
      </div>
    )
  }
}

export default Guarantors;