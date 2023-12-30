import { useState } from 'react';
import './Home.css';
import { IoMdAdd, IoIosPin } from 'react-icons/io';
import { FaRegDotCircle, FaRoad } from 'react-icons/fa';
import { GiAirplaneDeparture } from 'react-icons/gi';

import GoogleAutoComplete from 'react-google-autocomplete';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('airport');

  const handleTabChange = event => {
    setSelectedTab(event.target.value);
  };
  const handlePlaceSelect = place => {
    console.log(place);
  };
  return (
    <div className="main-conten container">
      <div className="form-book">
        <form action="">
          <div className="head-form ">
            <h3>Đặt xe</h3>
            <div className="bk-tab">
              <label
                className={`btn-switch ${
                  selectedTab === 'airport' ? 'active' : ''
                }`}
              >
                <input
                  type="radio"
                  name="tab"
                  checked={selectedTab === 'airport'}
                  value="airport"
                  onChange={handleTabChange}
                />
                <span>
                  <GiAirplaneDeparture className="icon icon-btn-switch" /> Sân
                  bay
                </span>
              </label>
              <label
                className={`btn-switch ${
                  selectedTab === 'road' ? 'active' : ''
                }`}
              >
                <input
                  type="radio"
                  name="tab"
                  checked={selectedTab === 'road'}
                  value="road"
                  onChange={handleTabChange}
                />
                <span>
                  <FaRoad className="icon icon-btn-switch" /> Đường dài
                </span>
              </label>
            </div>
          </div>
          <label htmlFor="">Bạn đi từ</label>
          <div className="ctrl-input">
            <FaRegDotCircle className="icon icon-input" />
            <GoogleAutoComplete
              apiKey="AIzaSyAfTs6YdTJLhcasLYHleMkwXnKS8CyEOPQ"
              language="vi"
              placeholder="Nhập điểm đón"
              onPlaceSelected={handlePlaceSelect}
              options={{
                types: [],
                componentRestrictions: { country: 'VN' },
              }}
            />

            <button className="butn pause-btn" type="button">
              <IoMdAdd className="icon icon-add-pickup" />
            </button>
          </div>
          <label htmlFor="">Bạn muốn đến :</label>
          <div className="ctrl-input">
            <IoIosPin className="icon icon-input" />
            <GoogleAutoComplete
              apiKey="AIzaSyAfTs6YdTJLhcasLYHleMkwXnKS8CyEOPQ"
              language="vi"
              placeholder="Nhập điểm đến"
              onPlaceSelected={handlePlaceSelect}
              options={{
                types: [],
                componentRestrictions: { country: 'VN' },
              }}
            />
          </div>
        </form>
      </div>
      <div className="banner">
        <div>
          <img
            src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/banner-2023-10.jpg"
            alt="sale"
            className="banner-img"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
