import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoMdAdd, IoIosPin } from 'react-icons/io';
import { FaRegDotCircle, FaUser, FaPhoneAlt, FaRoad } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { CiCalendarDate } from 'react-icons/ci';
import { FaCar } from 'react-icons/fa6';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Autocomplete from 'react-google-autocomplete';
import SwitchButton from '../components/SwitchButton';
import { PiMoneyFill } from 'react-icons/pi';
import { BACKEND_URL } from '../ultil/http';
import { GiAirplaneDeparture } from 'react-icons/gi';
import DotStaus from '../components/DotStaus';

const EditTrip = () => {
  console.log('edit trip');
  const [tripValue, setTripvalue] = useState({ price: 0 });
  const params = useParams();
  const { tripId } = params;
  const getListTrip = async () => {
    const response = await axios.get(BACKEND_URL + `/trip/${tripId}`);
    console.log(response.data.data);
    setTripvalue(response.data.data);
    setPoint({ ...point, pickUpPoint: response.data.data.pickUpPoint });

    return () => {};
  };
  useEffect(() => {
    getListTrip();
    console.log('ef get trip run');
  }, [tripId]);

  const [point, setPoint] = useState({
    lap: false,
    vat: false,
    dropOffPoint: {
      latitude: '21.2176148',
      longitude: '105.7929915',
    },

    vehicleType: '4 chỗ hatchback',
  });

  const [selectedTab, setSelectedTab] = useState('airport');

  const handleTabChange = event => {
    setSelectedTab(event.target.value);
    if (selectedTab === 'airport') {
      setTripvalue({
        ...tripValue,
        dropOffAddress: '',
        dropOffPoint: {
          latitude: '',
          longitude: '',
        },
      });
      setPoint({
        ...point,
        dropOffAddress: '',
        dropOffPoint: {
          latitude: '',
          longitude: '',
        },
      });
    } else {
      setTripvalue({
        ...tripValue,
        dropOffAddress: 'Sân bay nội bài',
        dropOffPoint: {
          latitude: '21.2176148',
          longitude: '105.7929915',
        },
      });
      setPoint({
        ...point,
        dropOffAddress: 'Sân bay nội bài',
        dropOffPoint: {
          latitude: '21.2176148',
          longitude: '105.7929915',
        },
      });
    }
  };
  const handlePlaceSelectPickUp = async (place, inputRef) => {
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
    setPoint({
      ...point,
      [name]: value,
    });
  };
  useEffect(() => {
    if (point.pickUpPoint && point.dropOffPoint) {
      const getPrice = async () => {
        try {
          console.log(point);
          const response = await axios.post(
            'http://localhost:4000/api/v1/client/price/',
            point
          );

          setTripvalue({
            ...tripValue,
            tripPrice: response.data.price,
            price: response.data.price,
          });

          console.log(response.data); // Hiển thị dữ liệu từ phản hồi
        } catch (error) {
          console.error('Error:', error);
        }
      };

      getPrice();
    }
  }, [point]);
  const navigate = useNavigate();
  const onSubmitForm = async event => {
    event.preventDefault();

    try {
      const response = await axios.patch(BACKEND_URL + `/trip/edit`, tripValue);

      navigate('/admin/list-trip');

      // Kiểm tra trạng thái HTTP của response
    } catch (error) {
      // Xử lý lỗi trong trường hợp có lỗi kết nối hoặc lỗi từ server
      console.error('An error occurred:', error);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="head-form ">
        <h3>Chỉnh sửa</h3>
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
              <GiAirplaneDeparture className="icon icon-btn-switch" /> Sân bay
            </span>
          </label>
          <label
            className={`btn-switch ${selectedTab === 'road' ? 'active' : ''}`}
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
        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 5 }}>
          <DotStaus status={tripValue.status} />
          {tripValue.status === 'waiting' && <p>Chưa xác nhận</p>}
          {tripValue.status === 'pending' && <p>Đã xác nhận</p>}
          {tripValue.status === 'complete' && <p>Đã hoàn thành</p>}
          {tripValue.status === 'processing' && <p>Tài xế đang thực hiện</p>}
        </div>
      </div>
      <label htmlFor="">Bạn đi từ</label>
      <div className="ctrl-input">
        <FaRegDotCircle className="icon icon-input icon-violet " />
        <Autocomplete
          value={tripValue.pickUpAddress}
          onChange={e => {
            setTripvalue({
              ...tripValue,
              pickUpAddress: e.target.value,
            });
          }}
          apiKey="AIzaSyDIfSyryL0vRpxCCDilpmgnYhC98A_E8EQ"
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
          value={tripValue.dropOffAddress}
          onChange={e => {
            setTripvalue({
              ...tripValue,
              dropOffAddress: e.target.value,
            });
          }}
          apiKey="AIzaSyDIfSyryL0vRpxCCDilpmgnYhC98A_E8EQ"
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
              value={tripValue.pickUpTime}
              locale="vi"
              inputProps={{
                placeholder: `${tripValue.date} : ${tripValue.pickUpTime}`,
              }}
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
          <p>Cước phí:</p>
        </div>
        <div className="price">{tripValue.price.toLocaleString('en')} VNĐ</div>
      </div>
      <div className="margin-vetical ">thong tin khach hang</div>
      <div className="option-trip  margin-vetical ">
        <div className="type-car choise-option">
          <FaUser className="icon icon-input icon-violet" />
          <input
            value={tripValue.clientName}
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
        value={tripValue.note}
        placeholder="Thêm ghi chú !"
        className="add-note margin-vetical "
        name="note"
        onChange={onTripValueChange}
        cols="30"
        rows="10"
      ></textarea>
      <select
        value={tripValue.status}
        name="status"
        id="vehicleType"
        className="select-type-car"
        onChange={onTripValueChange}
      >
        <option value="pending">Xác nhận</option>
        <option value="waiting">Chờ xử lý</option>
        <option value="complete">Hoàn thành</option>
        <option value="processing">Đang thực hiện</option>
      </select>
      <button className="btn-book-now" type="submit">
        Chỉnh sửa
      </button>
    </form>
  );
};

export default EditTrip;
