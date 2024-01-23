import './App.css';
import { useState } from 'react';
import AppContext from './context/AppContext';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const navigate = useNavigate();

  const hanlerLogin = async (event, userValue) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/auth/login',
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
    <AppContext.Provider value={{ hanlerLogin }}>
      <Header />
      <AppRoutes />
    </AppContext.Provider>
  );
}

export default App;
