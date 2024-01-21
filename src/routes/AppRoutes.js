import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Price from '../pages/Price';
import AboutUs from '../pages/AboutUs';
import AdminDashboard from '../pages/AdminDashboard';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="bang-gia" element={<Price />} />
      <Route path="aboutus" element={<AboutUs />} />
      <route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
