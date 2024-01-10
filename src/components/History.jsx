import React from 'react';

const History = props => {
  const { clientName, clientPhone, dropOffAddress } = props;
  return (
    <p>
      Khách hàng :{clientName} {clientPhone} đã đặt xe !
    </p>
  );
};

export default History;
