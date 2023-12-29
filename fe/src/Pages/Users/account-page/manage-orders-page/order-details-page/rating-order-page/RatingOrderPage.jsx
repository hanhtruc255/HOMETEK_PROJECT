import React from "react";
import ReactStars from "react-rating-stars-component";
import styles from "./RatingOrderPage.module.css";
// import cameraIcon from '../../../../../assets/icons/camera.svg';
import cameraIcon from "../../../../../../Assets/icons/camera.svg";
// import FormButton from '../../../../../components/form-btn/FormButton';
import FormButton from "../../../../../../Components/form-btn/FormButton";
const thirdExample = {
  size: 40,
  count: 5,
  isHalf: false,
  value: 5,
  color: "grey",
  activeColor: "orange",
  onChange: (newValue) => {
    console.log(`Example 3: new value is ${newValue}`);
  },
};
const RatingOrderPage = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className={styles.wrapperRatingOrderPage}>
      <div className={styles.wrapperOrderDetails}>
        <div className={styles.heading}>Đánh giá đơn hàng</div>
        <div className={styles.wrapperOrderDetail}>
          <div className={styles.detailName}>Mã đơn hàng: </div>
          <div className={styles.detailValue}>0000001</div>
        </div>
        <div className={styles.wrapperOrderDetail}>
          <div className={styles.detailName}>Ngày mua: </div>
          <div className={styles.detailValue}>28/11/2023</div>
        </div>
        <div className={styles.wrapperOrderDetail}>
          <div className={styles.detailName}>Trạng thái: </div>
          <div className={styles.detailValue}>Hoàn tất</div>
        </div>
        <div className={styles.wrapperOrderDetail}>
          <div className={styles.detailName}>Tổng tiền: </div>
          <div className={styles.detailValue}>500.000đ</div>
        </div>
      </div>
      <div className={styles.wrapperRating}>
        <div className={styles.ratingSection}>
          <div className={styles.orderImage}>
            <img
              src="/images/Banchaidanang/61+Xv57yh0L._AC_SX679_.jpg"
              alt=""
              className={styles.orderImg}
            />
          </div>
          <div className={styles.ratingContent}>
            <div className={styles.productName}>
              Nồi chiên không dầu(NCKD01)
            </div>
            <ReactStars {...thirdExample} />

            <span className={styles.specialText}>Đánh giá chi tiết</span>
            <textarea name="" id="" className={styles.textArea}></textarea>
          </div>
        </div>
        <div className={styles.addImageSection}>
          <button className={styles.wrapperAddImageBtn}>
            <img src={cameraIcon} alt="" />
            <span className={styles.addImageText}>Thêm hình ảnh</span>
          </button>
        </div>
      </div>
      <div className={styles.wrapperRating}>
        <div className={styles.ratingSection}>
          <div className={styles.orderImage}>
            <img
              src="/images/Banchaidanang/61+Xv57yh0L._AC_SX679_.jpg"
              alt=""
              className={styles.orderImg}
            />
          </div>
          <div className={styles.ratingContent}>
            <div className={styles.productName}>
              Nồi chiên không dầu(NCKD01)
            </div>
            <ReactStars {...thirdExample} />

            <span className={styles.specialText}>Đánh giá chi tiết</span>
            <textarea name="" id="" className={styles.textArea}></textarea>
          </div>
        </div>
        <div className={styles.addImageSection}>
          <button className={styles.wrapperAddImageBtn}>
            <img src={cameraIcon} alt="" />
            <span className={styles.addImageText}>Thêm hình ảnh</span>
          </button>
        </div>
      </div>
      <div className={styles.wrapperSendBtn}>
        <FormButton text="GỬI" className={styles.sendBtn} />
      </div>
    </div>
  );
};

export default RatingOrderPage;
