import { CarpoolListing } from './components/CarpoolListing';
import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { UserDashboard } from './components/UserDashboard';
import { RideRequest } from './components/RideRequest';
import { ViewListings } from './components/ViewListings';
import { EditProfile } from './components/EditProfile';
import { RequestASeat } from './components/RequestASeat';


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  {
    path: '/carpoollisting-sample',
    element: <CarpoolListing />   
  },
  {
    path: '/user-dashboard',
    element: <UserDashboard />   
  },
  {
    path: '/ride-request',
    element: <RideRequest />   
  },
  {
    path: '/view-listings',
    element: <ViewListings />   
  },
  {
    path: '/edit-profile',
    element: <EditProfile />   
  },
  {
    path: '/request-a-seat',
    element: <RequestASeat />   
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
