import React, { useState, createContext } from 'react';
import styles from './AccountPage.module.css';
import SidebarAccount from '../../components/sidebar-account/SidebarAccount';
import NewAddressPage from './account-profile-page/new-address-page/NewAddressPage';
import AssistsPage from './assists-page/AssistsPage';
import ManageOrdersPage from './manage-orders-page/ManageOrdersPage';
import AccountProfilePage from './account-profile-page/AccountProfilePage';
import ChangePasswordPage from './account-profile-page/change-password-page/ChangePasswordPage';
export const AccountContext = createContext();
const AccountPage = () => {
  const [accountService, setAccountService] = useState(1);

  return (
    <AccountContext.Provider value={{ accountService, setAccountService }}>
      <div className={styles.wrapperAccountPage}>
        <SidebarAccount />
        <div className={styles.mainContent}>
          {accountService === 1 && <ChangePasswordPage />}
          {/* {accountService === 1 && <AccountProfilePage />} */}
          {/* {accountService === 1 && <NewAddressPage />} */}
          {accountService === 2 && <ManageOrdersPage />}
          {accountService === 3 && <AssistsPage />}
        </div>
      </div>
    </AccountContext.Provider>
  );
};

export default AccountPage;
