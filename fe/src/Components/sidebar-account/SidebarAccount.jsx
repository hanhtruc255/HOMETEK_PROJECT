import React, { useState } from "react";
import classNames from "classnames";
import styles from "./SidebarAccount.module.css";
import { Link } from "react-router-dom";
const SidebarAccount = () => {
  const [activeLink, setActiveLink] = useState("account-profile");
  return (
    <>
      <div className={styles.sidebar}>
        <ul>
          <li className={styles.wrapperNavLink}>
            <Link
              to={"account-profile"}
              className={
                activeLink === "account-profile"
                  ? classNames(styles.navLink, styles.activeLink)
                  : classNames(styles.navLink)
              }
              onClick={() => {
                setActiveLink("account-profile");
              }}
            >
              Thông tin tài khoản
            </Link>
          </li>
          <li className={styles.wrapperNavLink}>
            <Link
              to={"orders-management/list-orders"}
              className={
                activeLink === "orders-management"
                  ? classNames(styles.navLink, styles.activeLink)
                  : classNames(styles.navLink)
              }
              onClick={() => {
                setActiveLink("orders-management");
              }}
            >
              Quản lý đơn hàng
            </Link>
          </li>
          <li className={styles.wrapperNavLink}>
            <Link
              to={"assist"}
              className={
                activeLink === "assist"
                  ? classNames(styles.navLink, styles.activeLink)
                  : classNames(styles.navLink)
              }
              onClick={() => {
                setActiveLink("assist");
              }}
            >
              Hỗ trợ
            </Link>
          </li>
          <li className={styles.wrapperNavLink}>
            <Link className={styles.navLink}>Đăng xuất</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarAccount;
