import React from 'react';
import './UserItem.css';

const UserItem = ({ username, phoneNumber, vehicle, licensePlates }) => {
  console.log('User Item render');
  return (
    <tr>
      <td>
        <img
          decoding="async"
          className="alignnone"
          src="309829944_1477677376067461_276291726763527414_n.jpg"
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
