import React from 'react';
import { createContext, useState, useRef } from 'react';

import styles from './AccountProfilePage.module.css';
import { Link, Outlet } from 'react-router-dom';

export const AccountProfileContext = createContext();
const AccountProfilePage = () => {
  return (
    <AccountProfileContext.Provider>
      <div className={styles.wrapperAccountProfilePage}>
        <Outlet />
      </div>
    </AccountProfileContext.Provider>
  );
};

export default AccountProfilePage;
