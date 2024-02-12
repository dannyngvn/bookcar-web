import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
      <td>{status}</td>
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
