import { useState } from 'react';
import './Home.css';
import { IoMdAdd, IoIosPin } from 'react-icons/io';
import { FaRegDotCircle, FaRoad, FaUser, FaPhoneAlt } from 'react-icons/fa';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { CiCalendarDate } from 'react-icons/ci';
import { FaCar } from 'react-icons/fa6';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import GoogleAutoComplete from 'react-google-autocomplete';
import SwitchButton from '../components/SwitchButton';
import { PiMoneyFill } from 'react-icons/pi';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('airport');

  const handleTabChange = event => {
    setSelectedTab(event.target.value);
  };
  const handlePlaceSelect = place => {
    console.log(place);
  };
  return (
    <div className="main-conten container  ">
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
            <FaRegDotCircle className="icon icon-input icon-violet " />
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
          <div className="ctrl-input ">
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
          <div className="option-trip  margin-vetical">
            <SwitchButton option={'2 chieu'} />
            <SwitchButton option={'VAT'} />
          </div>
          <div className="option-trip">
            <div>
              <label htmlFor="cars">Loai xe:</label>
              <div className="type-car">
                <FaCar className="icon icon-input icon-violet" />
                <select name="cars" id="cars" className="select-type-car">
                  <option value="volvo">4 cho</option>
                  <option value="saab">7 cho </option>
                  <option value="mercedes">45 cho</option>
                  <option value="audi">100 cho</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="cars">Ngay di:</label>
              <div className="type-car">
                <CiCalendarDate className="icon icon-input icon-violet " />
                <Datetime inputProps={{ placeholder: 'Chọn ngày và giờ' }} />
              </div>
            </div>
          </div>
          <div className="line-form"></div>
          <div className="option-trip ">
            <div className="display-flex-container total">
              <PiMoneyFill className="icon  icon-violet" />
              <p>Cuoc phi</p>
            </div>
            <div className="price">0d</div>
          </div>
          <div>thong tin khach hang</div>
          <div className="option-trip ">
            <div className="type-car">
              <FaUser className="icon icon-input icon-violet" />
              <input
                type="text"
                className="select-type-car"
                placeholder="ho va ten"
              />
            </div>
            <div className="type-car">
              <FaPhoneAlt className="icon icon-input icon-violet" />
              <input
                type="number"
                className="select-type-car"
                placeholder="so dien thoai"
              />
            </div>
          </div>

          <div>+ them ghi chu</div>
          <input type="text" placeholder="Ghi chu" />
          <button type="button">{`DAT XE >>`}</button>
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
