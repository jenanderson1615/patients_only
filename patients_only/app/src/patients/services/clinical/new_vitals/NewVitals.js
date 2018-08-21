import React from 'react';
import FormBuilder from 'components/form-builder';
import VitalsFields from "./store/VitalsFields"
import VitalsModel from './store/VitalsModel';

class NewVitals extends React.Component {

  constructor(props) {
    super(props);
    this.vitals = VitalsModel.create();
  }

  onChange = (key, val) => {
    this.vitals.changeField(key, val);
  }

  onSubmit = async () => {
    await this.vitals.saveNewVitals();
    this.props.parentCallBack(this.props.patient.patientId);
  }

  render() {

    return (
      <div>
        <FormBuilder
          data={this.vitals}
          formModel={VitalsFields}
          parentOnChange={this.onChange}
          parentOnSubmit={this.onSubmit}
          parentOnCancel={this.onCancel}
          submitButtonText="This doesn't work yet, exit without submit!" />
      </div>
    )
  }
}

export default NewVitals;