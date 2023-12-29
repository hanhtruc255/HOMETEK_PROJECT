import React from "react";
import classNames from "classnames";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
// import send from '../../assets/icons/icon-send.svg';
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
              className={classNames(styles.headingContent, styles.homeLink)}
            >
              HOME TEK
            </Link>
            <p className={styles.itemDescription}>
              TheFaceHolic.com cung cấp thông tin giá, mô tả, hình ảnh và thông
              tin chi tiết của sản phẩm Chăm sóc da mặt, Chăm sóc cơ thể, Trang
              điểm, Chăm sóc tóc và da đầu, Nước hoa, Bộ sản phẩm làm đẹp, Mỹ
              phẩm nam, Mỹ Phẩm Khác...
            </p>
          </div>

          <div className={styles.wrapperFooterItem}>
            <Link to={"/about-us"} className={styles.headingContent}>
              Về Chúng Tôi
            </Link>
            <Link to={"/"} className={classNames(styles.itemDescription)}>
              Giới Thiệu
            </Link>

            <Link to={"/"} className={classNames(styles.itemDescription)}>
              Chính Sách
            </Link>

            <Link to={"/"} className={classNames(styles.itemDescription)}>
              Tin Tức
            </Link>
          </div>

          <div className={styles.wrapperFooterItem}>
            <Link to={"/"} className={styles.headingContent}>
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

      <div className={styles.secondline}>
        <h4 className={styles.secondlineDescription}>
          HOME TEK © 2023 - Đồ công nghệ gia dụng chính hãng
        </h4>
      </div>
    </>
  );
};
export default Footer;
