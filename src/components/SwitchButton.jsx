import React, { useState } from 'react';
import './SwitchButton.css';

const SwitchButton = props => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };
  return (
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
        <span className="slider round"></span>
      </label>
      <p>{props.option}</p>
    </div>
  );
};

export default SwitchButton;
