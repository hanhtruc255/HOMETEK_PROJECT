import React, { useContext } from 'react';
import styles from './SidebarAccount.module.css';
import { Link } from 'react-router-dom';
import { AccountContext } from '../../pages/account-page/AccountPage';
const SidebarAccount = () => {
  const { setAccountService } = useContext(AccountContext);
  return (
    <>
      <div className={styles.sidebar}>
        <ul>
          <li>
            <Link
              onClick={() => {
                setAccountService(1);
              }}
            >
              Thông tin tài khoản
            </Link>
          </li>
          <li>
            {' '}
            <Link
              onClick={() => {
                setAccountService(2);
              }}
            >
              Quản lý đơn hàng
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setAccountService(3);
              }}
            >
              Hỗ trợ
            </Link>
          </li>
          <li>
            {' '}
            <Link
              onClick={() => {
                setAccountService(4);
              }}
            >
              Đăng xuất
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarAccount;
