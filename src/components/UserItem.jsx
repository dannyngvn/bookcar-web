import React from 'react';
import './UserItem.css';

const UserItem = () => {
  return (
    <tr>
      <td>
        <img
          decoding="async"
          className="alignnone"
          src="309829944_1477677376067461_276291726763527414_n.jpg"
          alt
          height={'50px'}
        />
      </td>
      <td>Ho va ten</td>
      <td>Sdt</td>
      <td>Loai xe</td>
      <td>Bien kiem soat</td>
    </tr>
  );
};

export default UserItem;
