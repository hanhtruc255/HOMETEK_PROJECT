import React, { useEffect, useState, useContext } from "react";
import classNames from "classnames";
import styles from "./SidebarAccount.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../Pages/Users/layout/Layout";
const SidebarAccount = () => {
  const { setDisplayNotifyPopup } = useContext(AppContext);
  var currentURL = window.location.href;
  var [activeAccountService, setActiveAccountService] =
    useState("account-profile");

  // Chia chuỗi thành mảng bằng ký tự '/'
  useEffect(() => {
    var urlParts = currentURL.split("/");

    // Tìm kiếm vị trí của từ khóa "account" trong mảng
    var accountIndex = urlParts.indexOf("account");
    // Kiểm tra nếu từ khóa "account" tồn tại trong đường dẫn
    if (accountIndex !== -1) {
      // Lấy ra đường dẫn con phía sau "account"
      var childURL = urlParts[accountIndex + 1];
      setActiveAccountService(childURL);

      // Hiển thị kết quả
      console.log("Child URL:", childURL);
    } else {
      console.log('Từ khóa "account" không tồn tại trong đường dẫn');
    }
  }, [currentURL]);
  const [activeLink, setActiveLink] = useState("account-profile");
  return (
    <>
      <div className={styles.sidebar}>
        <ul>
          <li className={styles.wrapperNavLink}>
            <Link
              to={"account-profile"}
              className={
                activeAccountService === "account-profile"
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
                activeAccountService === "orders-management"
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
                activeAccountService === "assist"
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
            <Link
              className={styles.navLink}
              onClick={() => {
                setDisplayNotifyPopup(true);
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
