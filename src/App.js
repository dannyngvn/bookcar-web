import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Price from './pages/Price';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bang-gia" element={<Price />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
