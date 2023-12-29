import React from "react";
import styles from "./NewAddressPage.module.css";
// import InputField from '../../../../components/input-field/InputField';
import InputField from "../../../../../Components/input-field/InputField";
// import FormButton from '../../../../components/form-btn/FormButton';
import FormButton from "../../../../../Components/form-btn/FormButton";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
// import { AccountContext } from '../../AccountPage';
import { AccountContext } from "../../AccountPage";
const NewAddressPage = () => {
  const {
    singleAddressData,
    setIsAccountNotifyModalVisible,
    setAccountNotifyModalType,
  } = useContext(AccountContext);
  console.log("singleAddressData: ", singleAddressData);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // const [newAddressData, setNewAddressData] = useState({
  //   name: singleAddressData.customerName,
  //   phoneNumber: singleAddressData.deliveryPhoneNumber,
  //   addressDetail: singleAddressData.deliveryAddress,
  // })
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      )
      .then((result) => {
        setCities(result.data);
      });
  }, []);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setDistricts([]);
    setWards([]);

    if (e.target.value !== "") {
      const cityDistricts = cities.filter(
        (city) => city.Id === e.target.value
      )[0].Districts;
      setDistricts(cityDistricts);
    }
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setWards([]);

    if (e.target.value !== "") {
      const districtWards = districts.filter(
        (district) => district.Id === e.target.value
      )[0].Wards;
      setWards(districtWards);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsAccountNotifyModalVisible(true);
    setAccountNotifyModalType("address");
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>ĐỊA CHỈ MỚI</h1>
      </div>
      <form action="" className={styles.wrapperForm} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <div className={styles.inputItem}>
            <label htmlFor="name" className={styles.labelInput}>
              Họ và tên
              <span
                style={{
                  color: "red",
                  textAlign: "center",
                  paddingLeft: "3px",
                }}
              >
                *
              </span>
            </label>
            <InputField
              className="inputFocus"
              type="text"
              name="name"
              id="name"
              placeholder="Nhập họ và tên"
              value={singleAddressData ? singleAddressData.customerName : ""}
            />
          </div>

          <div className={styles.inputItem}>
            <label htmlFor="phone-number" className={styles.labelInput}>
              Số điện thoại
              <span
                style={{
                  color: "red",
                  textAlign: "center",
                  paddingLeft: "3px",
                }}
              >
                *
              </span>
            </label>
            <InputField
              className="inputFocus"
              type="text"
              name="phone-number"
              id="phone-number"
              placeholder="Nhập số điện thoại"
              value={
                singleAddressData ? singleAddressData.deliveryPhoneNumber : ""
              }
            />
          </div>
        </div>

        <div className={styles.selectContainer}>
          <div className={styles.selectItem}>
            <label htmlFor="city" className={styles.labelInput}>
              Tỉnh/Thành Phố
              <span
                style={{
                  color: "red",
                  textAlign: "center",
                  paddingLeft: "3px",
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
            <label htmlFor="district" className={styles.labelInput}>
              Quận/Huyện
              <span
                style={{
                  color: "red",
                  textAlign: "center",
                  paddingLeft: "3px",
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
            <label htmlFor="ward" className={styles.labelInput}>
              Phường/Xã
              <span
                style={{
                  color: "red",
                  textAlign: "center",
                  paddingLeft: "3px",
                }}
              >
                *
              </span>
            </label>
            <select
              className="form-select form-select-sm mb-3"
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

        <div className={styles.specificAddress}>
          <label
            htmlFor="specific-address"
            style={{ fontSize: "20px" }}
            className={styles.labelInput}
          >
            Địa Chỉ Cụ Thể
            <span
              style={{
                color: "red",
                textAlign: "center",
                paddingLeft: "3px",
              }}
            >
              *
            </span>
          </label>
          <InputField
            className="inputFocus"
            type="text"
            name="specific-address"
            id="specific-address"
            placeholder="Nhập địa chỉ cụ thể"
            value={singleAddressData ? singleAddressData.deliveryAddress : ""}
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label
            htmlFor="default-address"
            className={styles.checkboxContainer}
            for="set-default-address"
          >
            <input
              type="checkbox"
              name="set-default-address-checkbox"
              id="set-default-address"
            />
            Đặt làm địa chỉ mặc định
          </label>
        </div>

        <div className={styles.wrapperButton}>
          <FormButton
            className={styles.submitBtn}
            text={"Hoàn Thành"}
            type="submit"
          />

          <Link className={styles.navLink} to={"/account/account-profile"}>
            Quay lại
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NewAddressPage;
