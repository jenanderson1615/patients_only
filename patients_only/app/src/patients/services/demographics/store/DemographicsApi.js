import { Http } from "api/Http";

const Api = new Http("Patients/1/patient");

class PatientsApi {
  constructor(api) {
    this.api = api;
  }

  create = async patient => {
    let res = await this.api.post("", patient);
    return res.data || {};
  };

  update = async patient => {
    let res = await this.api.patch("/" + patient.patientId, patient);
    return res.data || {};
  };
}

const newApi = new PatientsApi(Api);
export default newApi;
