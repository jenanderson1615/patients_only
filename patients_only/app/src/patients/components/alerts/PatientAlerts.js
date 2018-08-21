/**
 * Component Type: Parent
 *
 * Handles the api request to fetch patient alerts using the patientId prop
 *
 * Returns sub components with a list of alerts
 */
 
import React from 'react';
import PatientAlertDialog from './PatientAlertDialog';
import PatientAlertList from './PatientAlertList';
import Api from '../../store/Api';

// --------------------------------------------

class PatientAlerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: null
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    Api.alerts(this.props.patientId)
      .then(response => {
        this.setState({
          alerts: response.data
        });
      })
  }

  render() {

    let { alerts } = this.state;
    let { isOpen } = this.props;

    if (this.props.showAs === 'list') {
      return (
         <div>{alerts && <PatientAlertList alerts={alerts} />}</div>
      );
    }

    return (
      <div>
        {alerts &&
          <PatientAlertDialog
            {...this.props}
            alerts={alerts}
            isOpen={isOpen} />}
      </div>
    );
  }
}

export default PatientAlerts;