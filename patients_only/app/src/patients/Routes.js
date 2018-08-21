import PatientHome from "./components/patient_home/PatientHome";
import Guarantors from "./components/guarantors/Guarantors";
import OrdersPage from './services/clinical/new_order/OrdersPage';
import PatientSearchApp from './services/patient_search/PatientSearchApp';

const Routes = [
  {
    path: "/patients/:patientId/patient_home",
    component: PatientHome,
    exact: true
  },
  {
    path: "/patients/search",
    component: PatientSearchApp,
    exact: true
  },
  {
    path: "/patients/:patientId/guarantors",
    component: Guarantors,
    exact: true
  },
  {
    path: "/patients/:patientId/orders",
    component: OrdersPage,
    exact: true
  }
];

export default Routes;
