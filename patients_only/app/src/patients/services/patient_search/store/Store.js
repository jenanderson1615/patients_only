import { extendObservable, runInAction } from "mobx";

class Store {
  /**
   * @param {Array|Null} patients
   * @param {Boolean} loading
   * @param {String} keyword
   * @param {Boolean} searched Used to show/hide no results found in ui
   */
  constructor() {
    extendObservable(this, {
      patients: null,
      loading: false,
      keyword: "",
      searched: false,

      // search: async keyword => {
      //   this.loading = true;

      //   let patients = await Api.search(keyword);

      //   runInAction(() => {
      //     this.loading = false;
      //     this.searched = true;
      //     this.set(patients);
      //   });
      // },

      // find: async patientId => {
      //   this.loading = true;

      //   let patient = await Api.find(patientId);
      //   this.loading = false;
      //   return patient;
      // },

      set: patients => {
        this.patients = patients;
      },

      setKeyword: keyword => {
        this.keyword = keyword;
      },

      clearSearch: () => {
        this.keyword = "";
        this.searched = false;
        this.set(null);
      }
    });
  }
}

const PatientSearchStore = new Store();
export default PatientSearchStore;
