import React from 'react';

const PrivateRoute = props => {
  const token = localStorage.getItem('token');
  const userID = localStorage.getItem('userID');

  if (!token || !userID) {
    console.log(userID);
    console.log(token);
    return ' may khong phai admin ';
  }
  return <>{props.children}</>;
};

export default PrivateRoute;
