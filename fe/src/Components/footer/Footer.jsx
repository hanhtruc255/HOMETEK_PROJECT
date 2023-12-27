import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import send from "../../Assets/icons/icon-send.svg";
import FormButton from "../form-btn/FormButton";

const Footer = () => {
  return (
    <>
      <div className={styles.firstLine}>
        <div>
          <h1 className={styles.paddingBottom}>
            <Link to={"/homepage"} className={styles.link}>
              HOME TEK
            </Link>
          </h1>
          <p>
            TheFaceHolic.com cung cấp thông tin giá, mô tả, hình ảnh và thông
            tin chi tiết của sản phẩm Chăm sóc da mặt, Chăm sóc cơ thể, Trang
            điểm, Chăm sóc tóc và da đầu, Nước hoa, Bộ sản phẩm làm đẹp, Mỹ phẩm
            nam, Mỹ Phẩm Khác...
          </p>
        </div>

        <div className={styles.item}>
          <h4 className={styles.paddingBottom}>
            <Link to={"/about-us"} className={styles.link}>
              Về Chúng Tôi
            </Link>
          </h4>
          <p className={styles.paddingBottom}>
            <Link to={"/"} className={styles.link}>
              Giới Thiệu
            </Link>
          </p>

          <p className={styles.paddingBottom}>
            <Link to={"/"} className={styles.link}>
              Chính Sách
            </Link>
          </p>

          <p className={styles.paddingBottom}>
            <Link to={"/"} className={styles.link}>
              Tin Tức
            </Link>
          </p>
        </div>

        <div className={styles.item}>
          <h4 className={styles.paddingBottom}>
            <Link to={"/contact"} className={styles.link}>
              Liên Hệ
            </Link>
          </h4>
          <p className={styles.paddingBottom}>Địa chỉ: AAA/88/HCM</p>

          <p className={styles.paddingBottom}>Email: hometek@gmail.com</p>

          <p className={styles.paddingBottom}>Số điện thoại: 0933322678</p>
        </div>

        <div className={styles.item}>
          <h4 className={styles.paddingBottom}>Đăng Ký Nhận Bản Tin</h4>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              placeholder="Nhập Email của bạn"
            />
            <img src={send} alt="" className={styles.button} />
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
                margin: "5px",
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.secondline}>
        <h5 className={styles.secondLineContent}>
          HOME TEK © 2023 - Đồ công nghệ gia dụng chính hãng
        </h5>
      </div>
    </>
  );
};
export default Footer;
