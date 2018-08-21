import { types } from 'mobx-state-tree';

const VitalsDataModel = {
    date: types.maybe(types.Date),
    height: types.maybe(types.string),
    weight: types.maybe(types.string),
    systolic: types.maybe(types.string),
    diastolic: types.maybe(types.string),
    heartRate: types.maybe(types.string),
    temperature: types.maybe(types.string)
}

export default VitalsDataModel;