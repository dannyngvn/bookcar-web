import React from 'react';

const PrivateRoute = props => {
  const token = localStorage.getItem('x-access-token');
  // const userID = localStorage.getItem('userID');
  console.log('private router render');

  if (!token) {
    return ' may khong phai admin ';
  }
  return <>{props.children}</>;
};

export default PrivateRoute;
