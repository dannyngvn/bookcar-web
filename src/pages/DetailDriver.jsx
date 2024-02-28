import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { BACKEND_URL } from '../ultil/http';
import './DetailDriver.css';

const DetailDriver = () => {
  const [driverValue, setDriverTripvalue] = useState({});
  const params = useParams();
  const { UserId } = params;
  const navigate = useNavigate();
  const getDriver = async () => {
    const response = await axios.get(BACKEND_URL + `/admin/${UserId}`);
    console.log(response.data.data);
    setDriverTripvalue(response.data.data);
  };
  const onUserValueChange = event => {
    const { value, name } = event.target;

    //   Dynamic key in object
    setDriverTripvalue({
      ...driverValue,
      [name]: value,
    });
  };
  useEffect(() => {
    getDriver();
  }, [UserId]);
  const onSubmitForm = async event => {
    event.preventDefault();
    console.log('cap nhat driver');

    try {
      const response = await axios.patch(
        BACKEND_URL + `/admin/edit-driver`,
        driverValue
      );

      navigate('/admin/list-trip');

      // Kiểm tra trạng thái HTTP của response
    } catch (error) {
      // Xử lý lỗi trong trường hợp có lỗi kết nối hoặc lỗi từ server
      console.error('An error occurred:', error);
    }
  };
  return (
    <div className="main-detail-driver">
      <div className="left-detal-driver">
        <form onSubmit={onSubmitForm}>
          <h2>Hồ sơ tài xế {driverValue.fullName}</h2>
          <label htmlFor="phoneNumber">Số điện thoại</label>
          <input
            className="input"
            type="number"
            placeholder="Số Điện Thoại"
            value={driverValue.phoneNumber}
            onChange={onUserValueChange}
            name="phoneNumber"
            id="phoneNumber"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            value={driverValue.email}
            onChange={onUserValueChange}
            name="email"
            className="input"
            id="email"
          />
          <label htmlFor="vehicle">Phương tiện</label>
          <input
            className="input"
            type="text"
            placeholder="Phương tiện"
            value={driverValue.vehicle}
            onChange={onUserValueChange}
            name="vehicle"
            id="vehicle"
          />
          <label htmlFor="licensePlates">Biển kiểm soát</label>
          <input
            className="input"
            type="text"
            placeholder="Biển kiểm soát"
            value={driverValue.licensePlates}
            onChange={onUserValueChange}
            name="licensePlates"
            id="licensePlates"
          />
          <label htmlFor="accountBalance">Ví tiền</label>
          <input
            className="input"
            type="number"
            onChange={onUserValueChange}
            placeholder="Ví"
            value={driverValue.accountBalance}
            name="accountBalance"
            id="accountBalance"
          />
          <label htmlFor="vehicleType">Trạng thái tài khoản</label>
          <select
            className="input"
            name="status"
            id="vehicleType"
            onChange={onUserValueChange}
          >
            <option value="not activated">Chưa kích hoạt</option>
            <option value="activated">Kích hoạt</option>
            <option value="ban">Khóa tài khoản </option>
          </select>
          <button type="submit">Chỉnh sửa</button>
        </form>
      </div>
      <div className="right-detal-driver">
        <div>
          <h4>Ảnh đại diện</h4>
          <img
            src={`http://localhost:4000/${driverValue.imageDriver}`}
            alt="avatart"
          />
        </div>
        <div>
          <h4>Ảnh phương tiện</h4>
          <img
            src={`http://localhost:4000/${driverValue.imageCar}`}
            alt="avatart"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailDriver;
