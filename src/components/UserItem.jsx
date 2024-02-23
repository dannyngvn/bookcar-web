import React from 'react';
import './UserItem.css';
import { useNavigate, Link } from 'react-router-dom';

const UserItem = ({
  username,
  phoneNumber,
  vehicle,
  licensePlates,
  imageDriver,
  UserId,
}) => {
  const navigate = useNavigate();
  const navigateEditUser = () => {
    navigate(`/admin/detail-driver/${UserId}`);
  };

  return (
    <tr onClick={navigateEditUser}>
      <td>
        <img
          decoding="async"
          className="alignnone"
          src={`http://localhost:4000/${imageDriver}`}
          alt="avatart"
          height={'50px'}
        />
      </td>
      <td>{username}</td>
      <td>{phoneNumber}</td>
      <td>{vehicle}</td>
      <td>{licensePlates}</td>
    </tr>
  );
};

export default UserItem;
