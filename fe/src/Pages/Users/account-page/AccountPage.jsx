import React, { useState, createContext } from "react";
import styles from "./AccountPage.module.css";
// import SidebarAccount from '../../components/sidebar-account/SidebarAccount';
import SidebarAccount from "../../../Components/sidebar-account/SidebarAccount";

import { Outlet } from "react-router-dom";

// import WrapperModal from '../../components/modals/WrapperModal';
import WrapperModal from "../../../Components/modals/WrapperModal";
// import ListAddressModal from '../../components/modals/list-address-modal/ListAddressModal';
import ListAddressModal from "../../../Components/modals/list-address-modal/ListAddressModal";
// import AccountModal from '../../components/modals/account-modal/AccountModal';
import AccountModal from "../../../Components/modals/account-modal/AccountModal";
export const AccountContext = createContext();
const AccountPage = () => {
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [isAccountNotifyModalVisible, setIsAccountNotifyModalVisible] =
    useState(false);
  const [accountNotifyModalType, setAccountNotifyModalType] = useState("");
  const [singleAddressData, setSingleAddressData] = useState();
  const toggleIsAddressModalVisible = () => {
    setIsAddressModalVisible(!isAddressModalVisible);
  };

  return (
    <AccountContext.Provider
      value={{
        singleAddressData,
        setSingleAddressData,
        isAddressModalVisible,
        toggleIsAddressModalVisible,
        setIsAccountNotifyModalVisible,
        setAccountNotifyModalType,
      }}
    >
      <div className={styles.wrapperAccountPage}>
        <SidebarAccount />
        <div className={styles.mainContent}>
          <Outlet />
        </div>
        {isAccountNotifyModalVisible && (
          <WrapperModal>
            <AccountModal
              headingText={
                accountNotifyModalType === "address"
                  ? "Cập nhật địa chỉ thành công"
                  : "Cập nhật mật khẩu thành công"
              }
            />
          </WrapperModal>
        )}
        {isAddressModalVisible && (
          <WrapperModal className="otp-form-modal">
            <ListAddressModal />
          </WrapperModal>
        )}
      </div>
    </AccountContext.Provider>
  );
};

export default AccountPage;
