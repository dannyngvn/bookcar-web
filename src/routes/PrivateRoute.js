import { Routes, Route } from 'react-router-dom';
import React from 'react';

const PrivateRoute = props => {
  return <>{props.children}</>;
};

export default PrivateRoute;
