class PatientApi {
  constructor() {
  }

  find = async patientId => {
    let res = {
      firstName: "Tom",
      lastName: "Test"
    }
    return res || {};
  };
}

const newApi = new PatientApi();
export default newApi;
