import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
