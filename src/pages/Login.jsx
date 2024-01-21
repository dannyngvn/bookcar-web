// Login.js
import React, { useState, useContext } from 'react';
import './Login.css';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const [userValue, setUserValue] = useState({
    phoneNumber: '',
    password: '',
  });
  const navigate = useNavigate();
  const { hanlerLogin } = useContext(AppContext);
  const isLogin = localStorage.getItem('isLogin');
  console.log(isLogin);
  useEffect(() => {
    if (isLogin) {
      navigate('/admin');
    }
  });

  const useValueChange = e => {
    const { value, name } = e.target;
    setUserValue({
      ...userValue,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    hanlerLogin(event, userValue); // Truyền event vào hàm handleLogin
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
