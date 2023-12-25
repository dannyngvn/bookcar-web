import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="container header">
        <div>
          <img
            src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/logo-1.png"
            alt="logo"
          />
        </div>
        <div className="right-header">
          <img
            src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/ic_phone-y.png"
            alt="call"
            className="logo-phone"
          />
          <div className="call-now">Goi xe ngay</div>
          <a className="phone-number" href="tel:+912222821">
            0912222821
          </a>
        </div>
      </div>
      <div className="main-menu">
        <div className="container main-item">
          <NavLink
            exact
            to="/"
            activeClassName="active-item"
            className="item-menu"
          >
            Home
          </NavLink>

          <NavLink
            exact
            to="/"
            activeClassName="active-item"
            className="item-menu"
          >
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
