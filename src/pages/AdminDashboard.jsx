// AdminDashboard.js
import React from 'react';
import './AdminDashboard.css';
import { NavLink, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  console.log('admin render');
  return (
    <div className="container main-conten">
      <div className="left-colum">
        <NavLink to="/admin/list-driver"> Danh sách tài xế</NavLink>
        <NavLink to="/admin/list-trip"> Danh sách chuyến đi</NavLink>
        <NavLink to="/admin/list-new-driver"> Danh sách tài xế mới</NavLink>
      </div>
      <div className="right-colum">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
