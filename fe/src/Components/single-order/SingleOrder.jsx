import React from "react";
import classNames from "classnames";
import styles from "./SingleOrder.module.css";
import FormButton from "../form-btn/FormButton";
import { useNavigate } from "react-router-dom";
import FormatPriceString from "../../functions/FormatPriceString";
const SingleOrder = ({
  type,
  order,
  handleClickMainBtn,
  handleClickDetailBtn,
}) => {
  const products = order.orderProducts;
  const history = useNavigate();
  return (
    <div className={styles.wrapperSingleOrder}>
      <div className={styles.headingOrder}>
        <div className={styles.wrapperHeadingTextAndBtn}>
          <h4 className={styles.headingText}>SẢN PHẨM</h4>
          <button className={styles.headingBtn}>CHAT NGAY</button>
        </div>
        <span className={styles.orderStatusText}>{type}</span>
      </div>
      <div className={styles.wrapperProducts}>
        {products.map((product) => {
          return (
            <div className={styles.wrapperSingleProduct}>
              <div className={styles.productImage}>
                <img src={product.image} alt="" className={styles.productImg} />
              </div>
              <div className={styles.productInfo}>
                <p className={styles.productName}>{product.name}</p>
                <span className={styles.productClassify}>Phân loại: Đen</span>
                <span className={styles.productQuantity}>
                  {"X" + product.quantity}
                </span>
              </div>
              <div className={styles.productPrice}>
                <div className={styles.wrapperPrice}>
                  <span className={styles.productPriceThrough}>
                    {FormatPriceString(product.price)}
                  </span>
                  <span className={styles.productPriceShow}>
                    {FormatPriceString(product.sale_price)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.wrapperTotalAmount}>
        Tổng số tiền:{" "}
        <span className={styles.totalAmount}>
          {FormatPriceString(order.finalAmount)}
        </span>
      </div>
      <div className={styles.wrapperFooterBtn}>
        <>
          <FormButton
            text={"Xem chi tiết đơn hàng"}
            className={classNames(styles.footerBtn, styles.detailBtn)}
            onClick={handleClickDetailBtn}
          />
          {type === "Chờ xác nhận" && (
            <FormButton
              text={"Hủy đơn"}
              className={classNames(styles.footerBtn, styles.cancelBtn)}
              onClick={handleClickMainBtn}
            />
          )}
          {type === "Đang vận chuyển" && (
            <FormButton
              text={"Đã nhận hàng"}
              className={classNames(styles.footerBtn)}
              onClick={handleClickMainBtn}
            />
          )}
          {type === "Hoàn tất" && (
            <FormButton
              text={"Đánh giá"}
              className={classNames(styles.footerBtn)}
              onClick={handleClickMainBtn}
            />
          )}
        </>
      </div>
    </div>
  );
};

export default SingleOrder;
