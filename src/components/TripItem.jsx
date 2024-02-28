import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DotStaus from './DotStaus';

const TripItem = ({
  clientName,
  pickUpAddress,
  date,
  pickUpTime,
  status,
  tripPrice,
  id,
}) => {
  const navigate = useNavigate();
  const navigateEditTrip = () => {
    navigate(`/admin/edit-trip/${id}`);
  };
  // console.log('TripItem render');
  return (
    <tr onClick={navigateEditTrip}>
      <td>{clientName}</td>
      <td>{pickUpAddress}</td>
      <td>{date}</td>
      <td>{pickUpTime}</td>
      <td style={{ display: 'flex', gap: 5 }}>
        <DotStaus status={status} />
        {status === 'processing' && 'Đang thực hiện'}
        {status === 'waiting' && 'Chưa xác nhận'}
        {status === 'pending' && 'Đã xác nhận'}
        {status === 'complete' && 'Đã hoàn thành'}
      </td>
      <td>
        {tripPrice.toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND',
        })}
      </td>
    </tr>
  );
};

export default TripItem;
