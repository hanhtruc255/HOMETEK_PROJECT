import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./ListAddressModal.module.css";
import { Link } from "react-router-dom";
// import FormButton from '../../form-btn/FormButton';
import FormButton from "../../form-btn/FormButton";
// import { AccountContext } from '../../../pages/account-page/AccountPage';
import { AccountContext } from "../../../Pages/Users/account-page/AccountPage";
const listAddressSampleData = {
  default: {
    customerName: "Châm Anh",
    deliveryAddress: "123 Lê văn chí, phường 5, quận tân bình, TP.Hồ Chí Minh",
    deliveryPhoneNumber: "0123456789",
  },
  otherAddresses: [
    {
      customerName: "Châm Anh",
      deliveryAddress: "321 phạm văn đồng, phường 10, tp xxx",
      deliveryPhoneNumber: "0987654321",
    },
    {
      customerName: "Châm Anh",
      deliveryAddress: "567 hồng bàng, phường 7, quận 5, tp xxx",
      deliveryPhoneNumber: "0876543456",
    },
  ],
};
const ListAddressModal = () => {
  const history = useNavigate();

  const { singleAddressData, setSingleAddressData } =
    useContext(AccountContext);
  const { toggleIsAddressModalVisible } = useContext(AccountContext);
  return (
    <div className={styles.wrapperListAddressModal}>
      <div className={styles.mainContent}>
        <h4 className={styles.heading}>Địa chỉ của tôi</h4>
        <div className={styles.listAddress}>
          <div className={classNames(styles.adrress, styles.defaultAddress)}>
            <div className={styles.radio}>
              <input
                type="radio"
                name="set-default-address"
                id="default-address"
              />
            </div>
            <div className={styles.adrressContent}>
              <div className={styles.userInfor}>
                <span className={styles.customerName}>
                  {listAddressSampleData.default.customerName}
                </span>
                <span>|</span>
                <span className={styles.customerPhone}>
                  {listAddressSampleData.default.deliveryPhoneNumber}
                </span>
              </div>
              <p className={styles.userAddress}>
                {listAddressSampleData.default.deliveryAddress}
              </p>
            </div>
            <Link
              to={"account-profile/new-address"}
              className={styles.updateAddressLink}
              onClick={() => {
                setSingleAddressData(listAddressSampleData.default);
                toggleIsAddressModalVisible();
                console.log("address: ", singleAddressData);
              }}
            >
              Cập nhật
            </Link>
          </div>
          {/* Map through the array of addresses */}
          {listAddressSampleData.otherAddresses.map((item) => (
            <div className={styles.adrress}>
              <div className={styles.radio}>
                <input type="radio" name="set-default-address" />
              </div>
              <div className={styles.adrressContent}>
                <div className={styles.userInfor}>
                  <span className={styles.customerName}>
                    {item.customerName}
                  </span>
                  <span>|</span>
                  <span className={styles.customerPhone}>
                    {item.deliveryPhoneNumber}
                  </span>
                </div>
                <p className={styles.userAddress}>{item.deliveryAddress}</p>
              </div>
              <Link
                to={"account-profile/new-address"}
                className={styles.updateAddressLink}
                onClick={() => {
                  setSingleAddressData(item);
                  toggleIsAddressModalVisible();
                  console.log("address: ", singleAddressData);
                }}
              >
                Cập nhật
              </Link>
            </div>
          ))}
          <button
            className={styles.addAddressBtn}
            onClick={() => {
              toggleIsAddressModalVisible();
              history("account-profile/new-address");
            }}
          >
            + Thêm địa chỉ
          </button>
        </div>
        <div className={styles.footer}>
          <FormButton
            className={classNames(styles.btn, styles.cancelBtn)}
            text={"Hủy"}
            onClick={() => toggleIsAddressModalVisible()}
          />
          <FormButton
            className={classNames(styles.btn, styles.confirmBtn)}
            text={"Xác nhận"}
          />
        </div>
      </div>
    </div>
  );
};

export default ListAddressModal;
