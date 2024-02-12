import React from 'react';

const PrivateRoute = props => {
  const token = localStorage.getItem('token');
  const userID = localStorage.getItem('userID');
  console.log('private router render');

  if (!token || !userID) {
    return ' may khong phai admin ';
  }
  return <>{props.children}</>;
};

export default PrivateRoute;
