import { Http } from "api/Http";
const Api = new Http("Patients/1/patient");

class PatientApi {
  constructor(api) {
    this.api = api;
  }

  find = async patientId => {
    let res = await this.api.get("/" + patientId);
    return res.data || {};
  };

  alerts = async patientId => {
    let res = await this.api.get("/" + patientId + "/alerts");
    return res.data || [];
  };

  referrals = async patientId => {
    let res = await this.api.get("/" + patientId + "/referrals");
    return res.data || [];
  };

  incidents = async patientId => {
    let res = await this.api.get("/" + patientId + "/incidents");
    return res.data || [];
  };
}

const newApi = new PatientApi(Api);
export default newApi;
