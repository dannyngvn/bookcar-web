import { useEffect, useState } from 'react';
import UserItem from '../components/UserItem';
import axios from 'axios';
import { BACKEND_URL } from '../ultil/http';

const NewDriver = () => {
  const [listNewDriver, setListNewDriver] = useState([]);
  const refreshToken = async () => {
    console.log('refresh token');
    let refreshToken = localStorage.getItem('x-refresh-token');

    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/refresh_token`,
        {},
        {
          headers: {
            'x-refresh-token': refreshToken,
          },
        }
      );
      localStorage.setItem('x-access-token', response.data.accessToken);
      return response.data.accessToken;
    } catch (error) {
      console.error('Lỗi khi refresh token:', error);
    }
  };
  const getListDriver = async () => {
    try {
      let accessToken = localStorage.getItem('x-access-token');
    let refreshToken = localStorage.getItem('x-refresh-token');
        const response = await axios.get(`${BACKEND_URL}/admin/new-driver`, {
            headers: {
                'x-access-token': accessToken,
                'x-refresh-token': refreshToken,
            },
        });
        setListNewDriver(response.data.data);
    } catch (error){
      console.log('Error:', error);
      console.log('Error response:', error.response);
  
      if (error.response && error.response.status) {
        if (error.response.status === 402) {
          localStorage.removeItem('x-access-token');
          localStorage.removeItem('x-refresh-token');
          console.log('rf token het han');
          alert("Đây là một thông báo! hết phiên đăng nhập");
        }
        if (error.response.status === 401) {
          console.log('het han');
          await refreshToken();
          await getListDriver();
        }
      } else {
        console.error('An unexpected error occurred:', error);
      }
    }
};
  useEffect(() => {
    getListDriver()
    return () => {};
  }, []);
  return (
    <>
      <h2>Tài xế mới đăng ký</h2>
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
    </>
  );
};

export default NewDriver;
