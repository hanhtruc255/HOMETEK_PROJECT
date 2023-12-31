import React, { useState, createContext, useEffect, useContext } from "react";
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
import { AppContext } from "../layout/Layout";
export const AccountContext = createContext();

const AccountPage = () => {
  const { setDisplayFooter } = useContext(AppContext);
  useEffect(() => {
    setDisplayFooter(false);
  }, []);

  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [isAccountNotifyModalVisible, setIsAccountNotifyModalVisible] =
    useState(false);
  const [accountNotifyModalType, setAccountNotifyModalType] = useState("");
  const [singleAddressData, setSingleAddressData] = useState();
  const toggleIsAddressModalVisible = () => {
    setIsAddressModalVisible(!isAddressModalVisible);
  };
  const [isAccountPopupVisible, setIsAccountPopupVisible] = useState(false);
  return (
    <AccountContext.Provider
      value={{
        singleAddressData,
        setSingleAddressData,
        isAddressModalVisible,
        toggleIsAddressModalVisible,
        setIsAccountNotifyModalVisible,
        setAccountNotifyModalType,
        setIsAccountPopupVisible,
      }}
    >
      <div className={styles.wrapperAccountPage}>
        {isAccountPopupVisible && (
          <WrapperModal id="account-modal"></WrapperModal>
        )}
        <div className={styles.wrapperSidebar}>
          <SidebarAccount />
        </div>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
        {/* Display the notify when  update new address success*/}
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

        {/* This play list address popup */}
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
