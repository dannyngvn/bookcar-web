import React, { useState, useEffect } from 'react';
import './DotStaus.css';

const DotStaus = ({ status }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    // Thiết lập setInterval để thay đổi trạng thái của dot sau mỗi 500ms
    const intervalId = setInterval(() => {
      setIsBlinking(prevState => !prevState);
    }, 500);

    return () => clearInterval(intervalId); // Xóa bỏ interval khi component bị unmounted
  }, []);

  return (
    <div className={`dot ${status} ${isBlinking ? 'blinking' : ''}`}>
      <div className="shadow"></div>
    </div>
  );
};

export default DotStaus;
