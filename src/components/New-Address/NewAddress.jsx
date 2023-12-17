import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './NewAddress.module.scss';
import InputField from '../input-field/InputField';
import FormButton from '../form-btn/FormButton';
import { Link } from 'react-router-dom';
import SidebarAccount from '../sidebar-account/SidebarAccount';

const NewAddress = () => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
      )
      .then((result) => {
        setCities(result.data);
      });
  }, []);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setDistricts([]);
    setWards([]);

    if (e.target.value !== '') {
      const cityDistricts = cities.filter(
        (city) => city.Id === e.target.value,
      )[0].Districts;
      setDistricts(cityDistricts);
    }
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setWards([]);

    if (e.target.value !== '') {
      const districtWards = districts.filter(
        (district) => district.Id === e.target.value,
      )[0].Wards;
      setWards(districtWards);
    }
  };

  return (
    <div className={styles.wrapperAccountPage}>
      <SidebarAccount />
      <div className={styles.container}>
        <div>
          <h1>ĐỊA CHỈ MỚI</h1>
          <br />
        </div>
        <form action="" className={styles.wrapperForm}>
          <div className={styles.inputContainer}>
            <div className={styles.inputItem}>
              <label htmlFor="name">
                Họ và tên
                <span
                  style={{
                    color: 'red',
                    textAlign: 'center',
                    paddingLeft: '3px',
                  }}
                >
                  *
                </span>
              </label>
              <InputField
                type="text"
                name="name"
                id="name"
                placeholder="Nhập họ và tên"
              />
            </div>

            <div className={styles.inputItem}>
              <label htmlFor="phone-number">
                Số điện thoại
                <span
                  style={{
                    color: 'red',
                    textAlign: 'center',
                    paddingLeft: '3px',
                  }}
                >
                  *
                </span>
              </label>
              <InputField
                type="text"
                name="phone-number"
                id="phone-number"
                placeholder="Nhập số điện thoại"
              />
            </div>
          </div>

          <div className={styles.selectContainer}>
            <div className={styles.selectItem}>
              <label htmlFor="city">
                Tỉnh/Thành Phố
                <span
                  style={{
                    color: 'red',
                    textAlign: 'center',
                    paddingLeft: '3px',
                  }}
                >
                  *
                </span>
              </label>
              <select
                className="form-select form-select-sm mb-3"
                id="city"
                aria-label=".form-select-sm"
                value={selectedCity}
                onChange={handleCityChange}
                required
              >
                <option value="" selected>
                  Chọn tỉnh thành
                </option>
                {cities.map((city) => (
                  <option key={city.Id} value={city.Id}>
                    {city.Name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.selectItem}>
              <label htmlFor="district">
                Quận/Huyện
                <span
                  style={{
                    color: 'red',
                    textAlign: 'center',
                    paddingLeft: '3px',
                  }}
                >
                  *
                </span>
              </label>
              <select
                className="form-select form-select-sm mb-3"
                id="district"
                aria-label=".form-select-sm"
                value={selectedDistrict}
                onChange={handleDistrictChange}
                required
              >
                <option value="" selected>
                  Chọn quận huyện
                </option>
                {districts.map((district) => (
                  <option key={district.Id} value={district.Id}>
                    {district.Name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.selectItem}>
              <label htmlFor="ward">
                Phường/Xã
                <span
                  style={{
                    color: 'red',
                    textAlign: 'center',
                    paddingLeft: '3px',
                  }}
                >
                  *
                </span>
              </label>
              <select
                className="form-select form-select-sm"
                id="ward"
                aria-label=".form-select-sm"
                required
              >
                <option value="" selected>
                  Chọn phường xã
                </option>
                {wards.map((ward) => (
                  <option key={ward.Id} value={ward.Id}>
                    {ward.Name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="specific-address" style={{ fontSize: '20px' }}>
              Địa Chỉ Cụ Thể
              <span
                style={{
                  color: 'red',
                  textAlign: 'center',
                  paddingLeft: '3px',
                }}
              >
                *
              </span>
            </label>
            <InputField
              type="text"
              name="specific-address"
              id="specific-address"
              placeholder="Nhập địa chỉ cụ thể"
              style={{ width: '90%' }}
            />
          </div>

          <div>
            <label
              htmlFor="default-address"
              className={styles.checkboxContainer}
            >
              <input type="checkbox" name="checkbox" />
              Đặt làm địa chỉ mặc định
            </label>
          </div>

          <div className={styles.wrapperButton}>
            <FormButton
              text={'Hoàn Thành'}
              style={{
                width: 'fit-content',
                paddingLeft: '10px',
                paddingRight: '10px',
                margin: '0',
                fontSize: '20px',
              }}
            />

            <Link className={styles.navLink}>Quay lại</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAddress;
