import { types, getSnapshot, flow, applySnapshot } from "mobx-state-tree";
import DemographicsDataModel from "./DemographicsDataModel";
import PatientApi from "./DemographicsApi";
import mstIsNumber from "utils/MSTIsNumber";
import moment from "moment";

const PatientModel = types
  .model("PatientModel", DemographicsDataModel)

  .actions(self => ({
    afterFind() {
      self.fixBirthdate();
    },

    fixBirthdate() {
      if (self.birthdate)
        self.birthdate = moment.utc(self.birthdate).format("YYYY-MM-DD");
    },

    update(key, val) {
      self[key] = mstIsNumber(self, key, val);
    },

    updateAddress(fullResults) {
      self.city = fullResults.city;
      self.state = fullResults.state;
      self.zipCode = fullResults.zip;
    },

    preSave() {
      if (self.birthdate)
        self.birthdate = moment.utc(self.birthdate).format();
    },

    saveNewPatient: flow(function*() {
      self.preSave();
      try {
        return yield PatientApi.create(getSnapshot(self));
      } catch (error) {
        console.log("Error adding new patient to the api from model", error);
      }
    }),

    updatePatient: flow(function*() {
      self.preSave();
      try {
        return yield PatientApi.update(getSnapshot(self));
      } catch (error) {
        console.log("Error updating patient to the api from model", error);
      }
    }),

    loadPatient: flow(function*() {
      try {
        const response = yield PatientApi.fetchPatients();
        applySnapshot(self, response.response[0]);
      } catch (error) {
        console.log("Failed to fetch patient", error);
      }
    })
  }))

  .views(self => ({
    getSubtitle() {
      return self.firstName + " " + self.lastName;
    }
  }));

export default PatientModel;
