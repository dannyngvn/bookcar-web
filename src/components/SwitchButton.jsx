import React, { useState } from 'react';
import './SwitchButton.css';

const SwitchButton = props => {
  const { option, tripValue, setTripvalue, name, setPoint, point } = props;
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = event => {
    const { name } = event.target;

    setIsOn(prevState => !prevState);
    setPoint({
      ...point,
      [name]: !isOn,
    });
    setTripvalue({
      ...tripValue,
      [name]: !isOn,
    });
  };
  return (
    <div className="switch-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={isOn}
          onChange={toggleSwitch}
          name={name}
        />
        <span className="slider round"></span>
      </label>
      <p>{option}</p>
    </div>
  );
};

export default SwitchButton;
