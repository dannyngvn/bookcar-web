import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="container header">
        <div>
          <img src={`https://backend-bookcar.onrender.com/logo-1.png`} alt="logo" />
        </div>
        <div className="right-header">
          <img
            src={`https://backend-bookcar.onrender.com/ic_phone-y.png`}
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
            exact="true"
            to="/"
            // activeClassName="active-item"
            className="item-menu"
          >
            Trang chủ
          </NavLink>

          <NavLink
            exact="true"
            to="bang-gia"
            // activeClassName="active-item"
            className="item-menu"
          >
            Bảng giá
          </NavLink>
          <NavLink
            exact="true"
            to="aboutus"
            // activeClassName="active-item"
            className="item-menu"
          >
            Về chúng tôi
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
