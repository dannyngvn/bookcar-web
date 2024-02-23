import { useEffect, useState } from 'react';
import UserItem from '../components/UserItem';
import axios from 'axios';
import { BACKEND_URL } from '../ultil/http';

const NewDriver = () => {
  const [listNewDriver, setListNewDriver] = useState([]);
  useEffect(() => {
    console.log('Effect runs');
    const driverApi = BACKEND_URL + '/admin/new-driver';

    axios
      .get(driverApi)
      .then(response => {
        setListNewDriver(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
    console.log(listNewDriver);
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
        {listNewDriver.map(user => {
          const {
            username,
            phoneNumber,
            vehicle,
            licensePlates,
            _id,
            imageDriver,
          } = user;
          return (
            <UserItem
              username={username}
              phoneNumber={phoneNumber}
              vehicle={vehicle}
              licensePlates={licensePlates}
              key={_id}
              imageDriver={imageDriver}
              UserId={_id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default NewDriver;
