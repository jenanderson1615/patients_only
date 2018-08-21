/**
 * Patient data model to be used for the state tree (So far, this data is actually Person data)
 */

import { types } from "mobx-state-tree";

const DemographicsDataModel = {
    patientId: types.maybe(types.number),
    accountId: types.maybe(types.number),
    firstName: types.maybe(types.string),
    lastName: types.maybe(types.string),
    middleInitial: types.maybe(types.string),
    prefix: types.maybe(types.string),
    suffix: types.maybe(types.string),
    maidenName: types.maybe(types.string),
    nickname: types.maybe(types.string),
    birthdate: types.maybe(types.string),
    sex: types.maybe(types.number),
    socialSecurityNumber: types.maybe(types.string),
    maritalStatus: types.maybe(types.number),
    employment: types.maybe(types.number),
    preferredLanguage: types.maybe(types.string),
    relationshipToPrimary: types.maybe(types.string),
    relationshipToSecondary: types.maybe(types.string),
    streetAddress: types.maybe(types.string),
    suite: types.maybe(types.string),
    city: types.maybe(types.string),
    state: types.maybe(types.string),
    zipCode: types.maybe(types.string),
    country: types.maybe(types.string),
    phone1: types.maybe(types.string),
    phone1Type: types.maybe(types.number),
    phone2: types.maybe(types.string),
    phone2Type: types.maybe(types.number),
    phone3: types.maybe(types.string),
    phone3Type: types.maybe(types.number),
    email: types.maybe(types.string),
    accountProviderId: types.maybe(types.number),
    patientProviderId: types.maybe(types.number),
    officeId: types.maybe(types.number),
    feeScheduleId: types.maybe(types.number)
}

export default DemographicsDataModel;
