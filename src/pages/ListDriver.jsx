import { useEffect, useState } from 'react';
import UserItem from '../components/UserItem';
import axios from 'axios';

const ListDriver = () => {
  console.log('list driver render');
  const [listDriver, setListDriver] = useState([]);
  // const token = localStorage.getItem('token');

  useEffect(() => {
    console.log('Effect runs');
    const driverApi = 'http://192.168.1.108:4000/api/v1/admin/driver';

    axios
      .get(driverApi)
      .then(response => {
        setListDriver(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
    return () => {};
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: 200 }}>Ảnh đại diện</th>
          <th>Họ và tên</th>
          <th>Số điện thoại</th>
          <th>Loại xe</th>
          <th>Biển kiểm soát</th>
        </tr>
      </thead>
      <tbody>
        {listDriver.map(user => {
          const { username, phoneNumber, vehicle, licensePlates, _id } = user;
          return (
            <UserItem
              username={username}
              phoneNumber={phoneNumber}
              vehicle={vehicle}
              licensePlates={licensePlates}
              key={_id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ListDriver;
