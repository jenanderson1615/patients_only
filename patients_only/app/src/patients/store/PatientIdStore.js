const storageKey = "patientId";
const PatientIdStorage = {
  setId: id => localStorage.setItem(storageKey, id),
  getId: () => localStorage.getItem(storageKey)
};

export default PatientIdStorage;
