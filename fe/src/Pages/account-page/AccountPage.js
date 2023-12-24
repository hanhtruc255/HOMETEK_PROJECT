import React, { useState, createContext } from 'react';
import styles from './AccountPage.module.css';
import SidebarAccount from '../../Components/sidebar-account/SidebarAccount';
import AssistsPage from './assists-page';
import ManageOrdersPage from './manage-orders-page/ManageOrdersPage';
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
