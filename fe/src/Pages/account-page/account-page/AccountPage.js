import React, { useState, createContext } from 'react';
import styles from './AccountPage.module.scss';
import NewAddressPage from './account-profile-page/new-address-page/NewAddressPage';
import AssistsPage from './assists-page/AssistsPage';
export const AccountContext = createContext();
const AccountPage = () => {
  const [accountService, setAccountService] = useState(1);

  return (
    <AccountContext.Provider value={{ accountService, setAccountService }}>
      <div className={styles.wrapperAccountPage}>
        <SidebarAccount />
        <div className={styles.mainContent}>
          {accountService === 1 && <NewAddressPage />}
          {accountService === 2 && <AssistsPage />}
        </div>
      </div>
    </AccountContext.Provider>
  );
};

export default AccountPage;
