import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import ReactStars from "react-rating-stars-component";
import styles from "./RatingOrderPage.module.css";
import cameraIcon from "../../../../../../Assets/icons/camera.svg";
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
  const [value, setValue] = useState(0);
  const history = useNavigate();
  const params = useParams();
  const orderId = params.id;
  const [orderData, setOrderData] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const [order] = await Promise.all([
        fetch(`http://localhost:3001/order/${orderId}`),
      ]);

      if (!order.ok) {
        throw new Error("Order response was not ok");
      }

      const data = await order.json();

      setOrderData(data[0]);
    } catch (error) {}
  };
  const renderListRating = (products) => {
    if (products) {
      return products.map((product) => {
        return (
          <div className={styles.wrapperRating}>
            <div className={styles.ratingSection}>
              <div className={styles.orderImage}>
                <img src={product.image} alt="" className={styles.orderImg} />
              </div>
              <div className={styles.ratingContent}>
                <div className={styles.productName}>{product.name}</div>
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
        );
      });
    }
  };
  useEffect(() => {
    console.log("RELOAD");
    fetchData();
  }, []);

  useEffect(() => {
    console.log("order: ", orderData);
    setProducts(orderData.orderProducts);
  }, [orderData, products]);
  return (
    <div className={styles.wrapperRatingOrderPage}>
      <div className={styles.wrapperOrderDetails}>
        <div className={styles.heading}>Đánh giá đơn hàng</div>
        <div className={styles.wrapperOrderDetail}>
          <div className={styles.detailName}>Mã đơn hàng: </div>
          <div className={styles.detailValue}>{orderData.orderId}</div>
        </div>
        <div className={styles.wrapperOrderDetail}>
          <div className={styles.detailName}>Ngày mua: </div>
          <div className={styles.detailValue}>{orderData.createdAt}</div>
        </div>
        <div className={styles.wrapperOrderDetail}>
          <div className={styles.detailName}>Trạng thái: </div>
          <div className={styles.detailValue}>{orderData.orderStatus}</div>
        </div>
        <div className={styles.wrapperOrderDetail}>
          <div className={styles.detailName}>Tổng tiền: </div>
          <div className={styles.detailValue}>{orderData.finalAmount}</div>
        </div>
      </div>
      {renderListRating(products)}
      {/* <div className={styles.wrapperRating}>
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
      </div> */}
      <div className={styles.wrapperSendBtn}>
        <FormButton text="GỬI" className={styles.sendBtn} />
      </div>
    </div>
  );
};

export default RatingOrderPage;
