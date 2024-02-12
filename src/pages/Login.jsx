// Login.js
import React, { useState } from 'react';
import './Login.css';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

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
  const hanlerLogin = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://192.168.1.108:4000/api/v1/auth/login',
        userValue,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const token = response.data.accessToken;
      const userID = response.data.id;

      localStorage.setItem('token', token);
      localStorage.setItem('userID', userID);
      localStorage.setItem('isLogin', true);

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
