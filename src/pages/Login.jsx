// Login.js
import React, { useState } from 'react';
import './Login.css';
import { BACKEND_URL } from '../ultil/http';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  console.log('login render');
  const [userValue, setUserValue] = useState({
    phoneNumber: '',
    password: '',
  });
  const navigate = useNavigate();

  const isLogin = localStorage.getItem('isLogin');

  useEffect(() => {
    if (isLogin) {
      navigate('/admin');
    }
    return () => {};
  });

  const useValueChange = e => {
    const { value, name } = e.target;
    setUserValue({
      ...userValue,
      [name]: value,
    });
  };

  function hashPassword(password) {
    // Sử dụng SHA-256 để mã hóa mật khẩu
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    return hashedPassword;
  }

  const hashedPassword = hashPassword(userValue.password);
  const hanlerLogin = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(
        BACKEND_URL + '/auth/login',
        { ...userValue, password: hashedPassword },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;
      const decodedAccessTokenToken = jwtDecode(accessToken);
      const userID = decodedAccessTokenToken.userId;
      console.log(response)


      localStorage.setItem('x-access-token', accessToken);
      localStorage.setItem('x-refresh-token', refreshToken);
      localStorage.setItem('isLogin', true);
      localStorage.setItem('userID', userID);

      navigate('/admin');
    } catch (error) {
      console.log(error);
      console.log('Error response:', error.response);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={hanlerLogin}>
        <label>
          Username:
          <input
            name="phoneNumber"
            type="text"
            value={userValue.username}
            onChange={useValueChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={userValue.password}
            onChange={useValueChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
