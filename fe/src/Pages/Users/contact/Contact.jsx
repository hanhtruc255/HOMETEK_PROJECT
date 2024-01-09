import { React, useContext, useEffect } from "react";
import classNames from "classnames";
import FormButton from "../../../Components/form-btn/FormButton";
import GgMap from "../../../Components/gg-map/GgMap";
import styles from "./Contact.module.css";
import BannerContact from "../../../Assets/images/banners/banner-contact.png";
import phone from "../../../Assets/icons/telephone.svg";
import mail from "../../../Assets/icons/envelope.svg";
import geoAlt from "../../../Assets/icons/geo-alt-fill.svg";
import { AppContext } from "../layout/Layout";
const Contact = () => {
  const { setDisplayFooter } = useContext(AppContext);
  useEffect(() => {
    setDisplayFooter(true);
  }, []);
  return (
    <>
      <div className={styles.bannerWrapper}>
        <img src={BannerContact} alt="" className={styles.banner} />
      </div>
      <div className={styles.wrapperConTact}>
        <div className={styles.contactContent}>
          <div className={styles.firstContentWrapper}>
            <div className={styles.firstContent}>
              <div className={styles.wrapperIcon}>
                <img src={geoAlt} alt="" className={styles.icon} />{" "}
              </div>
              <p className={styles.content}>
                Số 669, QL1, Khu phố 3, Phường Linh Xuân, Quận Thủ Đức, Tp. Hồ
                Chí Minh
              </p>
            </div>

            <div className={styles.firstContent}>
              <div className={styles.wrapperIcon}>
                <img src={phone} alt="" className={styles.icon} />{" "}
              </div>
              <p className={styles.content}>0377 373 281</p>
            </div>

            <div className={styles.firstContent}>
              <div className={styles.wrapperIcon}>
                <img src={mail} alt="" className={styles.icon} />{" "}
              </div>
              <p className={styles.content}>hometek@gmail.com</p>
            </div>
          </div>

          <div className={styles.secondContentWrapper}>
            <form action="">
              <h4>Liên hệ với chúng tôi</h4>
              <div class="form-floating pb-3">
                <input
                  required
                  class={classNames("form-control", styles.myFormControl)}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Họ Và Tên"
                />
                <label for="name">Họ Và Tên</label>
              </div>

              <div class="form-floating pb-3">
                <input
                  required
                  class={classNames("form-control", styles.myFormControl)}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <label for="email">Email</label>
              </div>

              <div>
                <textarea
                  required
                  rows="7"
                  cols="40"
                  class={classNames(styles.textAreaFormControl)}
                  id="content"
                  name="content"
                  type="text"
                  placeholder="Vui lòng nhập nội dung mà bạn cần liên hệ với chúng tôi tại đây!"
                />
              </div>
              <FormButton text={"Gửi Liên Hệ"} className={styles.contactBtn} />
            </form>
          </div>
        </div>

        <div className={styles.map}>
          <GgMap />
        </div>
      </div>
    </>
  );
};

export default Contact;
