// AdminDashboard.js
import React from 'react';
import './AdminDashboard.css';
import { NavLink, Outlet } from 'react-router-dom';
import ListDriver from '../pages/ListDriver';

const AdminDashboard = () => {
  return (
    <div className="container main-conten">
      <div className="left-colum">
        <NavLink to="/admin/list-driver"> Danh sách tài xế</NavLink>
      </div>
      <div className="right-colum">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
