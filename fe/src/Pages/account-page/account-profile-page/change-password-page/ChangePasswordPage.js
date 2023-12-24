import React from 'react';
import { Link } from 'react-router-dom';
import FormButton from '../../../../Components/form-btn/FormButton';
import styles from './ChangePasswordPage.module.css';

const ChangePasswordPage = () => {
  return (
    <div className={styles.wrapperChangePasswordPage}>
      <div className={styles.wrapperChangePassword}>
        <h1 className={styles.heading}>Đổi mật khẩu mới</h1>
        <div className={styles.changePasswordContent}>
          <div className={styles.wrapperInputField}>
            <div className={styles.wrapperLabel}>
              <label htmlFor="old-password">Nhập mật khẩu hiện tại</label>
            </div>
            <input
              type="password"
              id="current-password"
              className={styles.inputField}
            />
          </div>
          <div className={styles.wrapperInputField}>
            <div className={styles.wrapperLabel}>
              <label htmlFor="new-password">Nhập mật khẩu mới</label>
            </div>

            <input
              type="password"
              id="new-password"
              className={styles.inputField}
            />
          </div>
          <span className="pwd-direction pwd-direction--new">
            (Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường, 1 chữ in
            hoa, 1 chữ số, 1 ký tự đặc biệt.)
          </span>
          <div className={styles.wrapperInputField}>
            <div className={styles.wrapperLabel}>
              <label htmlFor="repeat-new-password">Nhập lại khẩu mới </label>
            </div>

            <input
              type="password"
              id="repeat-new-password"
              className={styles.inputField}
            />
          </div>
          <div className={styles.footer}>
            <Link>Hủy</Link>
            <FormButton
              text={'Lưu Thông tin'}
              className={styles.changePasswordBtn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
