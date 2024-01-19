import React from 'react';
import './Price.css';
const Price = () => {
  return (
    <div className=" container">
      <h1 className="i-title">
        [BẢNG GIÁ] đặt xe taxi sân bay Nội Bài 1 chiều, 2 chiều giá rẻ
      </h1>
      <h2 className="desc-title">BẢNG GIÁ DỊCH VỤ XE ĐƯA ĐÓN NỘI BÀI HÀ NỘI</h2>
      <div className="price-tb">
        <table>
          <thead>
            <tr>
              <th style={{ width: 200 }}>Loại xe</th>
              <th>Hà Nội – Nội Bài</th>
              <th>Nội Bài – Hà Nội</th>
              <th>Hai chiều</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  decoding="async"
                  className="alignnone"
                  src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/4seats.png"
                  alt
                  width={270}
                  height={120}
                />
                <p />
                <h3>
                  <p className="smooth" title href="#">
                    Xe 4 chỗ Hatbach
                  </p>
                </h3>
              </td>
              <td>195.000 đ</td>
              <td>260.000 đ</td>
              <td>455.000 đ</td>
            </tr>
            <tr>
              <td>
                <img
                  decoding="async"
                  title
                  src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/5seats.png"
                  alt
                />
                <p />
                <h3>
                  <p className="smooth" title href="#">
                    Xe 4 chỗ có cốp
                  </p>
                </h3>
              </td>
              <td>200.000 đ</td>
              <td>270.000 đ</td>
              <td>470.000 đ</td>
            </tr>
            <tr>
              <td>
                <img
                  decoding="async"
                  title
                  src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/7seats.png"
                  alt
                />
                <p />
                <h3>
                  <p className="smooth" title href="#">
                    Xe 7 chỗ
                  </p>
                </h3>
              </td>
              <td>285.000 đ</td>
              <td>305.000 đ</td>
              <td>590.000 đ</td>
            </tr>
            <tr>
              <td>
                <img
                  decoding="async"
                  title
                  src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/16seats.png"
                  alt
                />
                <p />
                <h3>
                  <p className="smooth" title href="#">
                    Xe 16 chỗ
                  </p>
                </h3>
              </td>
              <td>Liên hệ</td>
              <td>Liên hệ</td>
              <td>Liên hệ</td>
            </tr>
            <tr>
              <td>
                <img
                  decoding="async"
                  title
                  src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/29seats.png"
                  alt
                />
                <p />
                <h3>
                  <p className="smooth" title href="#">
                    Xe 29 chỗ
                  </p>
                </h3>
              </td>
              <td>Liên hệ</td>
              <td>Liên hệ</td>
              <td>Liên hệ</td>
            </tr>
            <tr>
              <td>
                <img
                  decoding="async"
                  title
                  src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/45seats.png"
                  alt
                />
                <p />
                <h3>
                  <p className="smooth" title href="#">
                    Xe 45 chỗ
                  </p>
                </h3>
              </td>
              <td>Liên hệ</td>
              <td>Liên hệ</td>
              <td>Liên hệ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="i-title">
        [BẢNG GIÁ] đặt xe taxi đi tỉnh 1 chiều , 2 chiều giá rẻ
      </h1>
      <h2 className="desc-title">BẢNG GIÁ DỊCH VỤ XE ĐƯA ĐÓN DU LỊCH</h2>
      <div className="price-tb">
        <table>
          <thead>
            <tr>
              <th style={{ width: 200 }}>Loại xe</th>
              <th>Đi tỉnh 1 chiều</th>
              <th>Đi tỉnh 2 chiều</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  decoding="async"
                  className="alignnone"
                  src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/4seats.png"
                  alt
                  width={270}
                  height={120}
                />
                <p />
                <h3>
                  <p className="smooth" title href="#">
                    Xe 4 chỗ Hatbach
                  </p>
                </h3>
              </td>
              <td>8.000đ / 1km</td>
              <td> Bằng 50% chiều đi</td>
            </tr>
            <tr>
              <td>
                <img
                  decoding="async"
                  title
                  src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/5seats.png"
                  alt
                />
                <p />
                <h3>
                  <p className="smooth" title href="#">
                    Xe 4 chỗ có cốp
                  </p>
                </h3>
              </td>
              <td>9.000đ / 1km</td>
              <td> Bằng 50% chiều đi</td>
            </tr>
            <tr>
              <td>
                <img
                  decoding="async"
                  title
                  src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/7seats.png"
                  alt
                />
                <p />
                <h3>
                  <p className="smooth" title href="#">
                    Xe 7 - 9 chỗ
                  </p>
                </h3>
              </td>
              <td>11.000đ / 1km</td>
              <td> Bằng 50% chiều đi</td>
            </tr>
            <tr>
              <td>
                <img
                  decoding="async"
                  title
                  src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/16seats.png"
                  alt
                />
                <p />
                <h3>
                  <p className="smooth" title href="#">
                    Xe 16 chỗ
                  </p>
                </h3>
              </td>
              <td>14.000đ / 1km</td>
              <td> Bằng 50% chiều đi</td>
            </tr>
            <tr>
              <td>
                <img
                  decoding="async"
                  title
                  src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/29seats.png"
                  alt
                />
                <p />
                <h3>
                  <p className="smooth" title href="#">
                    Xe 29 chỗ
                  </p>
                </h3>
              </td>
              <td>15.000đ / 1km</td>
              <td> Bằng 50% chiều đi</td>
            </tr>
            <tr>
              <td>
                <img
                  decoding="async"
                  title
                  src="https://noibai.flatsome.id.vn/wp-content/uploads/2023/11/45seats.png"
                  alt
                />
                <p />
                <h3>
                  <p className="smooth" title href="#">
                    Xe 45 chỗ
                  </p>
                </h3>
              </td>
              <td>Liên hệ</td>
              <td>Liên hệ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Price;
