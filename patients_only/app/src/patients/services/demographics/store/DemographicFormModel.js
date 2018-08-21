import referenceSet from 'services/references/StaticReferenceHelper'


const DemographicFormModel = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "middleInitial",
    label: "Middle Initial",
    type: "text",
    hidden: true
  },
  {
    name: "prefix",
    label: "Prefix",
    type: "text",
    required: false,
    gridItemProps: { xs: 12, sm: 3 }
  },
  {
    name: "suffix",
    label: "Suffix",
    type: "text",
    required: false,
    gridItemProps: { xs: 12, sm: 3 }
  },
  {
    name: "maidenName",
    label: "Maiden Name",
    type: "text",
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "nickname",
    label: "Nickname",
    type: "text",
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "birthdate",
    label: "Birth Date",
    type: "date",
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "sex",
    label: "Sex",
    type: "select",
    options: referenceSet.sex,
    required: false,
    isInt: true,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "socialSecurityNumber",
    label: "Social Security",
    type: "text",
    hidden: true
  },
  {
    name: "maritalStatus",
    label: "Marital Status",
    type: "select",
    hidden: true
  },
  {
    name: "employment",
    label: "Employment",
    type: "select",
    hidden: true
  },
  {
    name: "preferredLanguage",
    label: "Preferred Language",
    type: "text",
    hidden: true
  },
  {
    name: "relationshipToPrimary",
    label: "Relationship to Primary",
    type: "select",
    hidden: true
  },
  {
    name: "relationshipToSecondary",
    label: "Relationship to Secondary",
    type: "select",
    hidden: true
  },
  {
    name: "streetAddress",
    label: "Street Address",
    type: "text",
    required: false,
    gridItemProps: { xs: 12, sm: 9 }
  },
  {
    name: "suite",
    label: "Suite/Apt. Number",
    type: "text",
    required: false,
    gridItemProps: { xs: 12, sm: 3 }
  },
  {
    name: "country",
    label: "Country",
    type: "text",
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "zipCode",
    label: "Zip Code",
    type: "zip",
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "city",
    label: "City",
    type: "text",
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "state",
    label: "State",
    type: "text",
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "phone1",
    label: "Phone Number 1",
    type: "phone",
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "phone1Type",
    label: "Phone Number 1 Type",
    type: "select",
    options: referenceSet.phoneTypes,
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "phone2",
    label: "Phone Number 2",
    type: "phone",
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "phone2Type",
    label: "Phone Number 2 Type",
    type: "select",
    options: referenceSet.phoneTypes,
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "phone3",
    label: "Phone Number 3",
    type: "phone",
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "phone3Type",
    label: "Phone Number 3 Type",
    type: "select",
    options: referenceSet.phoneTypes,
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    required: false
  },
  {
    name: "accountProviderId",
    label: "Account Provider",
    type: "select",
    options: [],
    required: false,
    gridItemProps: { xs: 12, sm: 6 },
    hidden: false
  },
  {
    name: "patientProviderId",
    label: "Patient Provider",
    type: "select",
    options: [],
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "officeId",
    label: "Office",
    type: "select",
    options: [],
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
  {
    name: "feeScheduleId",
    label: "Fee Schedule",
    type: "select",
    options: [],
    required: false,
    gridItemProps: { xs: 12, sm: 6 }
  },
];

export default DemographicFormModel;
