import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Price from '../pages/Price';
import AboutUs from '../pages/AboutUs';
import AdminDashboard from '../pages/AdminDashboard';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';

import ListDriver from '../pages/ListDriver';
import ListTrip from '../pages/ListTrip';
import EditTrip from '../pages/EditTrip';
import NewDriver from '../pages/NewDriver';
import DetailDriver from '../pages/DetailDriver';
import AdminOverView from '../pages/AdminOverView';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="bang-gia" element={<Price />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      >
        <Route index element={<AdminOverView />} />

        <Route path="list-driver" element={<ListDriver />} />
        <Route path="list-new-driver" element={<NewDriver />} />
        <Route path="list-trip" element={<ListTrip />} />
        <Route path="edit-trip/:tripId" element={<EditTrip />} />
        <Route path="detail-driver/:UserId" element={<DetailDriver />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
