import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TripItem from '../components/TripItem';
import { BACKEND_URL } from '../ultil/http';
// import { useNavigate } from 'react-router-dom';

const ListTrip = () => {
  
  const [listTrip, setListTrip] = useState([]);
  // const navigate = useNavigate();
  const refreshToken = async () => {
    console.log('refresh token');
    
    let refreshToken = localStorage.getItem('x-refresh-token');
    
    try {
      
      const response = await axios.post(
        `${BACKEND_URL}/auth/refresh_token`,
        { refreshToken},
        {
          headers: {
            
            'x-refresh-token': refreshToken,
          },
        }
      );
      
      
      localStorage.setItem('x-access-token', response.data.accessToken);
      return response.data.accessToken
    } catch (error) {
      console.error('Lỗi khi refresh token:', error);
    }
  };

  const getListTrip = async () => {
    try {
      let accessToken = localStorage.getItem('x-access-token');
      let refreshToken = localStorage.getItem('x-refresh-token');
  
      const response = await axios.get(BACKEND_URL + '/trip', {
        headers: {
          'x-access-token': accessToken,
          'x-refresh-token': refreshToken,
        },
      });
  
      const data = response.data.data;
      setListTrip(data);
    } catch (error) {
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
          await getListTrip();
        }
      } else {
        console.error('An unexpected error occurred:', error);
      }
    }
  };
  
 
  useEffect(() => {
    console.log('ef get trip run');
    getListTrip();
  }, []);
  return (
    <>
      <h2>Danh sách chuyến đi</h2>
      <table>
        <thead>
          <tr>
            <th>Khách hàng</th>
            <th>Điểm đón</th>
            <th>Ngày đón</th>
            <th>Giờ Đón</th>
            <th>Tình trạng</th>
            <th>Tổng</th>
          </tr>
        </thead>
        <tbody>
          {listTrip.map(trip => {
            const {
              clientName,
              pickUpAddress,
              date,
              pickUpTime,
              status,
              tripPrice,
              _id,
            } = trip;
            return (
              <TripItem
                clientName={clientName}
                pickUpAddress={pickUpAddress}
                date={date}
                pickUpTime={pickUpTime}
                status={status}
                tripPrice={tripPrice}
                key={_id}
                id={_id}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListTrip;
