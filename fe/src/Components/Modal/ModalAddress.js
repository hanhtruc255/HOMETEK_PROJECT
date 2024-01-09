import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';


const ModalAddress = ({ closeModal,  onSubmitAddress }) => {
  const [isDefaultChecked, setIsDefaultChecked] = useState(false);
  const [cityName, setCityName] = useState('');
  const [addressInfo, setAddressInfo] = useState({
    fullName: '',
    phone: '',
    city: '',
    district: '',
    ward: '',
    detailAddress: '',
    isDefault: false,
  });

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const host = "https://provinces.open-api.vn/api/";

  const callAPI = (api, target) => {
    return axios.get(api)
      .then((response) => {
        renderData(response.data, target);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  };

  const callApiDistrict = () => {
    return axios.get(host + "p/" + addressInfo.city + "?depth=2")
      .then((response) => {
        renderData(response.data.districts, "district");
      });
  };

  const callApiWard = () => {
    return axios.get(host + "d/" + addressInfo.district + "?depth=2")
      .then((response) => {
        renderData(response.data.wards, "ward");
      });
  };

  const getCityName = async () => {
    try {
      const response = await axios.get(host + 'p/' + addressInfo.city);
      setCityName(response.data.name);
    } catch (error) {
      console.error('Error getting city name:', error.message);
    }
  };

  const renderData = (array, target) => {
    let updatedData = array.map(element => ({
      id: element.code,
      name: element.name
    }));
    if (target === "city") {
      setCities(updatedData);
    } else if (target === "district") {
      setDistricts(updatedData);
    } else if (target === "ward") {
      setWards(updatedData);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'isDefault') {
      setIsDefaultChecked(checked);
    } else if (name === 'city' || name === 'district' || name === 'ward') {
      setAddressInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    } else {
      setAddressInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    if (onSubmitAddress) {
      const updatedAddressInfo = {
        ...addressInfo,
        isDefault: isDefaultChecked,
      };
      onSubmitAddress(updatedAddressInfo);
    }
    closeModal();
  };

  useEffect(() => {
    callAPI(host, "city");
  }, []);

  useEffect(() => {
    if (addressInfo.city) {
      callApiDistrict();
    }
  }, [addressInfo.city]);

  useEffect(() => {
    if (addressInfo.district) {
      callApiWard();
    }
  }, [addressInfo.district]);
console.log(">>>", addressInfo)
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);

  return (
    <>
        <div className='modal_wrapper'></div>
        <div className='modal_container'>
            <h2>Địa chỉ mới</h2>
            <div className='new_add1'> 
              <label>Họ và tên<span>* </span><br/><input name='fullName' value={addressInfo.fullName} onChange={handleChange} /></label>
              <label>Số điện thoại<span>* </span><br/><input name='phone' value={addressInfo.phone} onChange={handleChange} /></label>
            </div>
            <div className='new_add2'>
        <label>
          Tỉnh/ Thành phố<span>* </span>
          <br />
          <select name='city' value={addressInfo.city} onChange={handleChange}>
            <option value=''>Chọn tỉnh thành</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id} data-id={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Quận/ Huyện<span>* </span>
          <br />
          <select name='district' value={addressInfo.district} onChange={handleChange}>
            <option value=''>Chọn quận huyện</option>
            {districts.map((district) => (
              <option key={district.id} value={district.id} data-id={district.id}>
                {district.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Phường/ Xã<span>* </span>
          <br />
          <select name='ward' value={addressInfo.ward} onChange={handleChange}>
            <option value=''>Chọn phường xã</option>
            {wards.map((ward) => (
              <option key={ward.id} value={ward.id} data-id={ward.id}>
                {ward.name}
              </option>
            ))}
          </select>
        </label>
      </div>
            <div className='new_add3'> 
              <label>Địa chỉ cụ thể<span>* </span><br/><input type='text' className='spe' name='detailAddress' value={addressInfo.detailAddress} onChange={handleChange}/></label>
            </div>
            <div className='new_add4'> 
              <label className='specheck'>
              <input type='checkbox' name='isDefault' checked={isDefaultChecked} onChange={handleChange} />
              <span>Đặt làm địa chỉ mặc định</span></label>
            </div>
            <center>
              <button className='spebut' onClick={handleSubmit}>Hoàn Thành</button>
              <button onClick={closeModal}>Quay lại</button>
            </center>
        </div>
        </>
  );
};

export default ModalAddress;