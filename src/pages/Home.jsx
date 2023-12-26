import React from 'react';
import './Home.css';
import { IoMdAdd } from 'react-icons/io';
import { FaRegDotCircle } from 'react-icons/fa';
import GoogleAutoComplete from 'react-google-autocomplete';

const Home = () => {
  const handlePlaceSelect = place => {
    console.log(place); // Đây là đối tượng chứa thông tin về địa điểm được chọn
    // Xử lý dữ liệu địa điểm ở đây
  };
  return (
    <div>
      <div className="form-book">
        <form action="">
          <div className="head-form">
            <h3>Đặt xe</h3>
            <div className="bk-tab">
              <label>
                <input
                  type="radio"
                  defaultChecked
                  name="tab"
                  id="tabAirport"
                  defaultValue="airport"
                />
                <span>
                  <i className="ic ic-plane" /> Sân bay
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="tab"
                  id="tabRoad"
                  defaultValue="road"
                />
                <span>
                  <i className="ic ic-road" /> Đường dài
                </span>
              </label>
            </div>
          </div>
          <label htmlFor="">Bạn đi từ</label>
          <div className="ctrl-input">
            <FaRegDotCircle />
            <GoogleAutoComplete
              apiKey="AIzaSyAfTs6YdTJLhcasLYHleMkwXnKS8CyEOPQ" // Thay YOUR_GOOGLE_API_KEY bằng API key của bạn
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
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
