import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TripItem from '../components/TripItem';
import { BACKEND_URL } from '../ultil/http';

const ListTrip = () => {
  console.log('List trip render');
  const token = localStorage.getItem('token');
  const [listTrip, setListTrip] = useState([]);
  const getListTrip = async () => {
    const response = await axios.get(BACKEND_URL + '/trip/');
    setListTrip(response.data.data);

    return () => {};
  };
  useEffect(() => {
    console.log('ef get trip run');
    getListTrip();
  }, [token]);
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
