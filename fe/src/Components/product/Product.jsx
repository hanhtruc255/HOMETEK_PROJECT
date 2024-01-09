import { React, useState } from "react";
import styles from "./Product.module.css";
import classNames from "classnames";
import * as Icon from "react-bootstrap-icons";
// import cartIcon from '../../assets/icons/cart-shopping.svg';
// import heartIcon from '../../assets/icons/heart-icon.svg';
import cartIcon from "../../Assets/icons/cart-shopping.svg";
const Product = ({ handleBuyNowBtn, handleAddToCartBtn, ...props }) => {
  function formatPrice(price) {
    return (
      price
        .toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
        .replace(/,/g, ".") + "đ"
    );
  }

  const [heartIconActive, setHeartIconActive] = useState(false);
  return (
    <div className={styles.product} {...props}>
      <div className={styles.productImage}>
        <img src={props.imgSrc} alt="" className={styles.productImg} />
      </div>
      <div className={styles.productName}>
        <h3 className={styles.name}>{props.productName}</h3>
      </div>

      {}
      {/* {formatPrice(props.productPriceThrough)} */}

      <div className={styles.wrapBlockPriceAndBtn}>
        <div className={styles.productPriceThrough}>
          {props.productPriceThrough && formatPrice(props.productPriceThrough)}
        </div>

        <div className={styles.productPriceShow}>
          {formatPrice(props.productPriceShow)}
        </div>
        <div className={styles.blockBoxBtn}>
          <button className={styles.mainBtn} onClick={handleBuyNowBtn}>
            Mua ngay
          </button>
          <div className={styles.blockIconBtn}>
            <img
              src={cartIcon}
              alt=""
              className={classNames(styles.productIcon, styles.productIconCart)}
              onClick={handleAddToCartBtn}
            />
            {!heartIconActive && (
              <Icon.Heart
                className={classNames(
                  styles.productIcon,
                  styles.productIconHeart
                )}
                onClick={(event) => {
                  event.stopPropagation();
                  setHeartIconActive(!heartIconActive);
                }}
              />
            )}
            {heartIconActive && (
              <Icon.HeartFill
                className={classNames(
                  styles.productIcon,
                  styles.productIconHeartActive
                )}
                onClick={(event) => {
                  event.stopPropagation();
                  setHeartIconActive(!heartIconActive);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
