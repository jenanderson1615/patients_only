import { types, flow, getSnapshot } from "mobx-state-tree";
import Api from "./Api";
import PatientModel from "../services/demographics/store/DemographicsModel";

const PatientStore = types
  .model("Store", {
    patientModel: types.maybe(PatientModel),
    editPatient: types.maybe(PatientModel),
    newPatient: types.maybe(PatientModel),
    loading: false
  })

  .actions(self => {
    return {
      afterCreate() {
        self.patientModel = PatientModel.create();
        self.editPatient = PatientModel.create();
        self.newPatient = PatientModel.create();
      },

      setId(patientId) {
        localStorage.setItem("patientId", patientId);
        self.patientModel.patientId = patientId;
        self.editPatient.patientId = patientId;
      },

      find: flow(function*() {
        try {
          let patientId = localStorage.getItem("patientId");
          if (!patientId) return;
          self.loading = true;
          let patient = yield Api.find(patientId);
          self.patientModel = patient;
          self.editPatient = patient;
          self.newPatient.accountId = self.patientModel.accountId;
          self.patientModel.afterFind();
          self.loading = false;
        } catch (error) {
          console.log("Error fetching patient", error);
        }
      }),

      patientCard: flow(function*() {
        if (
          !self.patientModel ||
          self.patientModel.patientId === null ||
          self.patientModel.patientId < 1
        ) {
          yield self.find();
          console.log("finding patient...");
        }
        console.log("sending snapshot...");
        return getSnapshot(self.patientModel);
      })
    };
  });

export default PatientStore;
