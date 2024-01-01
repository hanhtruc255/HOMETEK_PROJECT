import { React, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import classNames from "classnames";
import styles from "./AccountProfile.module.css";
import FormButton from "../../../../../Components/form-btn/FormButton";
import rewriteIcon from "../../../../../Assets/icons/rewrite.svg";
import { AccountContext } from "../../AccountPage";
import { useContext } from "react";
import SendOtp from "../../../../../functions/SendOtp";
import CheckPhoneNumberFormat from "../../../../../functions/CheckPhoneNumberFormat.js";
import axios from "axios";
const AccountProfile = () => {
  const [currentUserData, setCurrentUserData] = useState({});
  const history = useNavigate();
  const [isPhoneNumberDirectionVisible, setIsPhoneNumberDirectionVisible] =
    useState(false);
  const fetchCurrentCusData = async () => {
    try {
      await axios
        .get("http://localhost:3001/account/search", {
          params: { userId: window.localStorage.getItem("userId") },
        })
        .then((res) => {
          console.log("GET CURRENT USER DATA SUCCESSFULLY");
          setCurrentUserData(res.data[0]);
        });
    } catch (error) {
      const errorMsg = error.response.data.message;
      alert(errorMsg);
    }
  };

  useEffect(() => {
    fetchCurrentCusData();
  }, []);
  const { isAddressModalVisible, toggleIsAddressModalVisible } =
    useContext(AccountContext);
  const [disabledNameField, setDisabledNameField] = useState(true);
  const [disablePhoneNumberField, setDisablePhoneNumberField] = useState(true);

  const nameRef = useRef();
  const phoneRef = useRef();

  const focusInputField = (refName) => {
    refName.current.focus();
  };

  const [formData, setFormData] = useState({
    userName: currentUserData.userName,
    gender: currentUserData.gender,
    phone: currentUserData.phone,
  });

  const [isFormDataValid, setIsFormValid] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("formData: ", formData);
    if (!CheckPhoneNumberFormat(formData.phone) && !formData.userName) {
      alert("Vui lòng nhập đúng tên và số điện thoại!");
      return;
    }
    if (formData.userName || formData.phone || formData.gender) {
      console.log("START UPDATE!");
      try {
        await axios
          .patch(
            `http://localhost:3001/customer/${window.localStorage.getItem(
              "userId"
            )}`,
            formData
          )
          .then((res) => {
            console.log("UPDATE USER INFOR SUCCESS");
            alert("Cập nhật tài khoản thành công!");
          });
      } catch (error) {
        const errorMsg = error.response.data.message;
        alert(errorMsg);
      }
    }
  };
  return (
    <div className={styles.wrapperAccountProfile}>
      <h1 className={styles.heading}>TÀI KHOẢN CỦA BẠN</h1>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className={styles.content}>
          <div className={styles.wrapperInforField}>
            <div className={styles.labelInfor}>Họ và tên</div>
            <input
              className={classNames(styles.displayInfor, "inputFocus")}
              type="text"
              placeholder={currentUserData.userName}
              disabled={disabledNameField}
              name="name"
              id="name"
              ref={nameRef}
              autofocus={disabledNameField ? false : true}
              onChange={(event) => {
                setFormData({ ...formData, userName: event.target.value });
              }}
            />
            <img
              className={styles.changeInforIcon}
              src={rewriteIcon}
              onClick={() => {
                setDisabledNameField(false);
                setTimeout(() => {
                  focusInputField(nameRef);
                }, 0);
              }}
            />
          </div>

          <div className={styles.wrapperInforField}>
            <div className={styles.labelInfor}>Giới tính</div>
            <div className={`${styles.displayInfor} ${styles.displayGender}`}>
              <div className={styles.wrapperGenderField}>
                <div className={styles.genderField}>
                  <label className={styles.labelGender} for="gender-female">
                    Nữ
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="gender-female"
                    value={false}
                    onChange={(event) => {
                      setFormData({ ...formData, gender: event.target.value });
                    }}
                  />
                </div>

                <div className={styles.genderField}>
                  <label className={styles.labelGender} for="gender-male">
                    Nam
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="gender-male"
                    value={true}
                    onChange={(event) => {
                      setFormData({ ...formData, gender: event.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.wrapperInforField}>
            <div className={styles.labelInfor}>Số điện thoại</div>
            <div className={styles.wrapperInput}>
              <input
                className={classNames(styles.displayInfor, "inputFocus")}
                type="phone"
                name="phone-number"
                id="phone-number"
                ref={phoneRef}
                placeholder={currentUserData.phone}
                disabled={disablePhoneNumberField}
                autofocus={disablePhoneNumberField ? false : true}
                onChange={(event) => {
                  const newPhone = event.target.value;
                  setFormData({ ...formData, phone: newPhone });
                  setIsPhoneNumberDirectionVisible(
                    !CheckPhoneNumberFormat(newPhone)
                  );
                }}
              />
              {isPhoneNumberDirectionVisible && (
                <span className="notification-text">
                  Số điện thoại bạn nhập không hợp lệ
                </span>
              )}
            </div>

            <img
              className={styles.changeInforIcon}
              src={rewriteIcon}
              onClick={() => {
                setDisablePhoneNumberField(false);
                setTimeout(() => {
                  focusInputField(phoneRef);
                }, 0);
              }}
            />
          </div>

          <div className={styles.wrapperInforField}>
            <div className={styles.labelInfor}>Địa chỉ</div>

            <input
              className={styles.displayInfor}
              type="text"
              value={currentUserData.address}
              disabled={true}
            />

            <Link onClick={() => toggleIsAddressModalVisible()}>
              <img
                src={rewriteIcon}
                alt="rewrite-icon"
                className={styles.changeInforIcon}
              />
            </Link>
          </div>

          <div className={styles.wrapperInforField}>
            <div className={styles.labelInfor}>Đổi mật khẩu</div>
            <input
              className={styles.displayInfor}
              type="password"
              value={""}
              disabled={true}
              placeholder="*********"
            />
            <Link
              onClick={async () => {
                try {
                  await axios
                    .get("http://localhost:3001/account/search", {
                      params: { userId: window.localStorage.getItem("userId") },
                    })
                    .then((res) => {
                      console.log("CHECK USER SUCCESSFULLY");
                      console.log("res: ", res);
                      history("/account/account-profile/change-password");
                    });
                } catch (error) {
                  const errorMsg = error.response.data.message;
                  alert(errorMsg);
                }
              }}
            >
              <img
                src={rewriteIcon}
                alt="rewrite-icon"
                className={styles.changeInforIcon}
              />
            </Link>
          </div>
        </div>
        <div className={styles.footer}>
          <FormButton
            text={"Cập nhật Thông tin"}
            type="submit"
            className={styles.accountBtn}
          />
        </div>
      </form>
    </div>
  );
};

export default AccountProfile;
