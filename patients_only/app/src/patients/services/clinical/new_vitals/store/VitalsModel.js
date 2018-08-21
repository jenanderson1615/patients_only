import { types, getSnapshot, flow} from 'mobx-state-tree';
import VitalsDataModel from './DataModel';

const VitalsModel = types
  .model('VitalsModel',VitalsDataModel)

  .actions(self => ({

    changeField(key, val) {
      self[key] = val;
    },

    saveNewVitals: flow(function* () {
      try {
        console.log("Vitals Api Call");
      } catch (error) {
        console.log('Error adding new patient to the api from model',error);
      }
    }),    

  }))

export default VitalsModel;