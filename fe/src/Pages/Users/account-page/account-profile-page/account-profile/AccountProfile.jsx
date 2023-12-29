import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./AccountProfile.module.css";
// import FormButton from '../../../../components/form-btn/FormButton';
import FormButton from "../../../../../Components/form-btn/FormButton";
// import rewriteIcon from '../../../../assets/icons/rewrite.svg';
import rewriteIcon from "../../../../../Assets/icons/rewrite.svg";
// import { AccountContext } from '../../AccountPage';
import { AccountContext } from "../../AccountPage";
import { useContext } from "react";
const AccountProfile = () => {
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
    name: "Ngô Thị Châm Anh",
    gender: "male",
    phoneNumber: "0385320575",
    defaultAddress: "109/6, Lê Văn Chí, Linh Trung, Thủ Đức",
    password: "Cham2105@",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.wrapperAccountProfile}>
      <h1 className={styles.heading}>TÀI KHOẢN CỦA BẠN</h1>
      <form action="" method="get">
        <div className={styles.content}>
          <div className={styles.wrapperInforField}>
            <div className={styles.labelInfor}>Họ và tên</div>
            <input
              className={classNames(styles.displayInfor, "inputFocus")}
              type="text"
              value={formData.name}
              disabled={disabledNameField}
              name="name"
              id="name"
              ref={nameRef}
              autofocus={disabledNameField ? false : true}
              onChange={(event) => {
                setFormData({ ...formData, name: event.target.value });
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
                    value={formData.gender === "female" ? true : false}
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
                    value={formData.gender === "male" ? true : false}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.wrapperInforField}>
            <div className={styles.labelInfor}>Sđt</div>
            <input
              className={classNames(styles.displayInfor, "inputFocus")}
              type="phone"
              value={formData.phoneNumber}
              name="phone-number"
              id="phone-number"
              ref={phoneRef}
              disabled={disablePhoneNumberField}
              autofocus={disablePhoneNumberField ? false : true}
              onChange={(event) => {
                setFormData({ ...formData, phoneNumber: event.target.value });
              }}
            />
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
              value={formData.defaultAddress}
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
              value={formData.password}
              disabled={true}
            />
            <Link to="change-password">
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
            onClick={(event) => {
              handleSubmit(event);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default AccountProfile;
