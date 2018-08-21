const CreatePatient = patientId => {
  localStorage.setItem("patientId", patientId);
  let store = PatientModel.create();
  return store.patientModel;
};
