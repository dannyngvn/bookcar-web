import React from 'react';
import './History.css';

const History = props => {
  const { clientName, clientPhone, dropOffAddress } = props;
  return (
    <p className="client-book-history">
      Khách hàng: {clientName} {clientPhone} đã đặt xe !
    </p>
  );
};

export default History;
