import React from 'react';
import styles from './Product.module.css';
import data from '../../data_update/data/product.json';
import cartIcon from '../../assets/icons/cart-shopping.svg';
import heartIcon from '../../assets/icons/heart-icon.svg';
const Product = (props) => {
  function formatPrice(price) {
    return (
      price
        .toLocaleString('en-US', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
        .replace(/,/g, '.') + 'đ'
    );
  }
  var testImage =
    '../../../src/data_update/data/images/Noicomthongminh/noi-com-dien-thong-minh-viomi-4l-1 (4).jpg';
  return (
    <div className={styles.product}>
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
          {props.productPriceThrough && (
            <p>{formatPrice(props.productPriceThrough)}</p>
          )}
        </div>

        <div className={styles.productPriceShow}>
          <p>{formatPrice(props.productPriceShow)}</p>
        </div>
        <div className={styles.blockBoxBtn}>
          <button className={styles.mainBtn}>Mua ngay</button>
          <div className={styles.blockIconBtn}>
            <span>
              <img
                src={cartIcon}
                alt=""
                className={`${styles.productIcon} ${styles.productIconCart}`}
              />
            </span>
            <span>
              <img
                src={heartIcon}
                alt=""
                className={`${styles.productIcon} ${styles.productIconHeart}`}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
