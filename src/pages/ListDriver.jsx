import { useEffect, useState } from 'react';
import UserItem from '../components/UserItem';
import axios from 'axios';

const ListDriver = () => {
  const [listDriver, setListDriver] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('http://localhost:4000/api/v1/trip/', {
        headers: {
          'x-access-token': ` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhbm55bmd2biIsImZ1bGxOYW1lIjoiTmd1eeG7hW4gUXVhbmcgVMO5bmciLCJ2ZWhpY2xlVHlwZSI6NSwidmVoaWNsZSI6InZpb3MiLCJsaWNlbnNlUGxhdGVzIjoiMzBBOTk5OSIsImFjY291bnRCYWxhbmNlIjo1MzY0MTYsImlhdCI6MTcwNTk3NDE1MSwiZXhwIjoxNzA1OTgwMjYxfQ.pu7CfayqZ66nIQCZ72a2Ci-Rak_7Yifb-M_Gs9OzSdU`,
        },
      });
    };
    getUser();
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
        <UserItem />
      </tbody>
    </table>
  );
};

export default ListDriver;
