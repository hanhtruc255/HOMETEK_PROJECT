import React from 'react';
import styles from './AppBar.module.css';
import { Link } from 'react-router-dom';
import heart from '../../assets/icons/heart-regular.svg';
import cart from '../../assets/icons/cart-shopping-solid.svg';
import user from '../../assets/icons/user-regular.svg';
import search from '../../assets/icons/magnifying-glass-solid.svg';

const AppBar = () => {
  return (
    <div className={styles.appBar}>
      <div className={styles.firstLine}>
        <Link className={styles.homeLink} to={'/'}>
          HOME TEK
        </Link>
        <div className={styles.rightSide}>
          <div className={styles.searchBar}>
            <input
              className={styles.textField}
              type="text"
              placeholder="Bạn muốn tìm gì..."
            />
            <span className={styles.searchIcon}>
              <img className={styles.icon} src={search} alt="search-icon"></img>
            </span>
          </div>
          <div className={styles.iconsContainer}>
            <Link to={'/'}>
              <img className={styles.icon} src={heart} alt="heart-icon"></img>
            </Link>
            <Link to={'/'}>
              <img className={styles.icon} src={cart} alt="cart-icon"></img>
            </Link>
            <Link to={'/'}>
              <img className={styles.icon} src={user} alt="user-icon"></img>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.secondLine}>
        <ul className={styles.listPages}>
          <li className={styles.pageItem}>
            <Link className={styles.pageLink} to={'/'}>
              Về chúng tôi
            </Link>
          </li>
          <li className={styles.pageItem}>
            <Link className={styles.pageLink} to={'/'}>
              Bếp
            </Link>
          </li>
          <li className={styles.pageItem}>
            <Link className={styles.pageLink} to={'/'}>
              Dọn dẹp
            </Link>
          </li>
          <li className={styles.pageItem}>
            <Link className={styles.pageLink} to={'/'}>
              Tiện ích
            </Link>
          </li>
          <li className={styles.pageItem}>
            <Link className={styles.pageLink} to={'/'}>
              Blog
            </Link>
          </li>
          <li className={styles.pageItem}>
            <Link className={styles.pageLink} to={'/'}>
              Liên hệ
            </Link>
          </li>
          <li className={styles.pageItem}>
            <Link className={styles.pageLink} to={'/'}>
              Chính sách
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppBar;
