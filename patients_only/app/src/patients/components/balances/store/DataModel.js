import { types } from 'mobx-state-tree';

const DataModel = {
    patientId: types.maybe(types.number),
    patient_balance: '$100.00',
    insurance: '$50.00',
    unapplied: '$25.00',
    account: '$150.00'
}

export default DataModel;
