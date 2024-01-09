import React from "react";
import classNames from "classnames";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import send from "../../Assets/icons/icon-send.svg";
import FormButton from "../form-btn/FormButton";

const Footer = () => {
  return (
    <>
      <div className={styles.wrapperFooter}>
        <div className={styles.wrapperFooterContent}>
          <div
            className={classNames(styles.wrapperFooterItem, styles.firstItem)}
          >
            <Link
              to={"/"}
              className={classNames(
                styles.headingContent,
                styles.homeLink,
                styles.headingContentLink
              )}
            >
              HOMETEK
            </Link>
            <p className={styles.itemDescription}>
              HomeTek là một nền tảng trực tuyến cung cấp đồ gia dụng thông minh
              và tiện ích, chúng tôi cam kết mang đến cho khách hàng những sản
              phẩm chất lượng và dịch vụ tốt nhất.
            </p>
          </div>

          <div className={styles.wrapperFooterItem}>
            <Link
              to={"/about-us"}
              className={classNames(
                styles.headingContent,
                styles.headingContentLink
              )}
            >
              Về Chúng Tôi
            </Link>
            <Link
              to={"/about-us"}
              className={classNames(
                styles.itemDescription,
                styles.itemDescriptionLink
              )}
            >
              Giới Thiệu
            </Link>

            <Link
              to={"/chinh-sach"}
              className={classNames(
                styles.itemDescription,
                styles.itemDescriptionLink
              )}
            >
              Chính Sách
            </Link>

            <Link
              to={"/blog-page"}
              className={classNames(
                styles.itemDescription,
                styles.itemDescriptionLink
              )}
            >
              Tin Tức
            </Link>
          </div>

          <div className={styles.wrapperFooterItem}>
            <Link
              to={"/contact"}
              className={classNames(
                styles.headingContent,
                styles.headingContentLink
              )}
            >
              Liên Hệ
            </Link>
            <p className={classNames(styles.itemDescription)}>
              Địa chỉ: AAA/88/HCM
            </p>

            <p className={classNames(styles.itemDescription)}>
              Email: hometek@gmail.com
            </p>

            <p className={classNames(styles.itemDescription)}>
              Số điện thoại: 0933322678
            </p>
          </div>

          <div className={styles.wrapperFooterItem}>
            <h4 className={styles.headingContent}>Đăng Ký Nhận Bản Tin</h4>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder="Nhập Email của bạn"
              />
              <img src={send} alt="" className={styles.sendIcon} />
            </div>
            <div className={styles.formButton}>
              <FormButton
                text={"Subscribe"}
                style={{
                  width: "fit-content",
                  padding: "8px 17px",
                  borderRadius: "15px",
                  fontWeight: "lighter",
                  boxShadow: "4px 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  margin: "10px 0",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondLine}>
        <h4 className={styles.secondLineDescription}>
          HOME TEK © 2023 - Đồ công nghệ gia dụng chính hãng
        </h4>
      </div>
    </>
  );
};
export default Footer;
