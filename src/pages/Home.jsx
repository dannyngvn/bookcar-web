import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { IoMdAdd, IoIosPin } from 'react-icons/io';
import { FaRegDotCircle, FaRoad, FaUser, FaPhoneAlt } from 'react-icons/fa';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { CiCalendarDate } from 'react-icons/ci';
import { FaCar } from 'react-icons/fa6';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Autocomplete from 'react-google-autocomplete';
import SwitchButton from '../components/SwitchButton';
import { PiMoneyFill } from 'react-icons/pi';
// import moment from 'moment';
import 'moment/locale/vi';

const Home = () => {
  const [tripValue, setTripvalue] = useState({
    clientPhone: '',
    clientName: '',
    date: '',
    pickUpTime: '',
    pickUpAddress: '',
    pickUpPoint: {
      latitude: '',
      longitude: '',
    },
    dropOffAddress: '',
    dropOffPoint: {
      latitude: '',
      longitude: '',
    },
    lap: '',
    price: '',
    tripPrice: '',
    vehicleType: '',
    originator: '6557bc7f946da18233fd727b',
    note: '',
    status: 'waiting',
  });

  const [point, setPoint] = useState({
    lap: false,
    VAT: false,
  });

  const [price, setPrice] = useState('0');
  // const [loading, setLoading] = useState(false);

  const [selectedTab, setSelectedTab] = useState('airport');

  const handleTabChange = event => {
    setSelectedTab(event.target.value);
  };
  const handlePlaceSelectPickUp = async place => {
    setPoint(prevPointValue => ({
      ...prevPointValue,
      pickUpPoint: {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      },
    }));
    setTripvalue(prevTripValue => ({
      ...prevTripValue,
      pickUpAddress: place.formatted_address,
      pickUpPoint: {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      },
    }));
  };
  const handlePlaceSelectdropOffPoint = async place => {
    setPoint(prevPointValue => ({
      ...prevPointValue,

      dropOffPoint: {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      },
    }));
    setTripvalue(prevTripValue => ({
      ...prevTripValue,
      dropOffAddress: place.formatted_address,
      dropOffPoint: {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      },
    }));
    console.log('first');
  };
  const handleDateTimeChange = newDateTime => {
    if (newDateTime && typeof newDateTime === 'object') {
      const formattedDate = newDateTime.format('DD-MM-YYYY'); // Định dạng ngày
      const formattedTime = newDateTime.format('HH:mm'); // Định dạng thời gian

      setTripvalue({
        ...tripValue,
        date: formattedDate,
        pickUpTime: formattedTime,
      });
    }
  };

  const onTripValueChange = event => {
    const { value, name } = event.target;

    //   Dynamic key in object
    setTripvalue({
      ...tripValue,
      [name]: value,
    });
  };
  useEffect(() => {
    const getPrice = async () => {
      if (point.pickUpPoint && point.dropOffPoint) {
        try {
          console.log(point);
          const response = await axios.post(
            'http://localhost:4000/api/v1/client/price/',
            point
          );
          setPrice(response.data.price);
          console.log(response.data); // Hiển thị dữ liệu từ phản hồi
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    getPrice();
  }, [point]); // `getPrice` sẽ được gọi lại khi point thay đổi

  // const onSubmitForm = event => {
  //   event.preventDefault();

  //   // setProductValues({
  //   //   productName: '',
  //   //   productImage: '',
  //   //   productPrice: '',
  //   // });
  // };
  // useEffect(() => {
  //   ;

  //   getPrice();
  // }, [point.dropOffPoint]);
  return (
    <div className="main-conten container  ">
      <div className="form-book">
        <form>
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
                  defaultValue={'airport'}
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
                  value={'road'}
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
            <Autocomplete
              apiKey="AIzaSyAfTs6YdTJLhcasLYHleMkwXnKS8CyEOPQ"
              language="vi"
              placeholder="Nhập điểm đón"
              onPlaceSelected={handlePlaceSelectPickUp}
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
            <Autocomplete
              apiKey="AIzaSyAfTs6YdTJLhcasLYHleMkwXnKS8CyEOPQ"
              language="vi"
              placeholder="Nhập điểm đến"
              onPlaceSelected={handlePlaceSelectdropOffPoint}
              options={{
                types: [],
                componentRestrictions: { country: 'VN' },
              }}
            />
          </div>
          <div className="option-trip  margin-vetical">
            <SwitchButton
              option={'2 chieu'}
              tripValue={tripValue}
              setTripvalue={setTripvalue}
              name={'lap'}
              setPoint={setPoint}
              point={point}
            />
            <SwitchButton
              option={'vat'}
              tripValue={tripValue}
              setTripvalue={setTripvalue}
              name={'vat'}
              setPoint={setPoint}
              point={point}
            />
          </div>
          <div className="option-trip">
            <div className="choise-option">
              <label htmlFor="cars">Loại xe:</label>
              <div className="type-car">
                <FaCar className="icon icon-input icon-violet" />
                <select
                  name="vehicleType"
                  id="vehicleType"
                  className="select-type-car"
                  onChange={onTripValueChange}
                >
                  <option value="4 chỗ hatchback">4 chỗ hatchback</option>
                  <option value="4 chỗ sedan">4 chỗ sedan</option>
                  <option value="7 chỗ">7 chỗ </option>
                  <option value="9 chỗ">9 chỗ</option>
                  <option value="16 chỗ">16 chỗ</option>
                  <option value="29 chỗ">29 chỗ</option>
                </select>
              </div>
            </div>
            <div className="choise-option">
              <label htmlFor="cars">Ngay di:</label>
              <div className="type-car">
                <CiCalendarDate className="icon icon-input icon-violet " />
                <Datetime
                  locale="vi"
                  inputProps={{ placeholder: 'Chọn ngày và giờ' }}
                  onChange={handleDateTimeChange}
                  dateFormat="DD-MM-YYYY"
                  timeFormat="HH:mm"
                />
              </div>
            </div>
          </div>
          <div className="line-form"></div>
          <div className="option-trip ">
            <div className="display-flex-container total">
              <PiMoneyFill className="icon  icon-violet" />
              <p>Cuoc phi</p>
            </div>
            <div className="price">{price.toLocaleString('en')} VNĐ</div>
          </div>
          <div className="margin-vetical ">thong tin khach hang</div>
          <div className="option-trip  margin-vetical ">
            <div className="type-car choise-option">
              <FaUser className="icon icon-input icon-violet" />
              <input
                type="text"
                className="select-type-car "
                placeholder="ho va ten"
                name="clientName"
                onChange={onTripValueChange}
              />
            </div>
            <div className="type-car choise-option">
              <FaPhoneAlt className="icon icon-input icon-violet" />
              <input
                type="number"
                className="select-type-car"
                placeholder="so dien thoai"
                value={tripValue.clientPhone}
                name="clientPhone"
                onChange={onTripValueChange}
              />
            </div>
          </div>

          <div>+ them ghi chu</div>
          <textarea
            placeholder="Thêm ghi chú !"
            className="add-note margin-vetical "
            name="note"
            onChange={onTripValueChange}
            cols="30"
            rows="10"
          ></textarea>
          <button className="btn-book-now" type="submit">{`Đặt xe >>`}</button>
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
