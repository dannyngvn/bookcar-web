import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Price from '../pages/Price';
import AboutUs from '../pages/AboutUs';
import AdminDashboard from '../pages/AdminDashboard';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';

import ListDriver from '../pages/ListDriver';

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
        <Route path="list-driver" element={<ListDriver />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
