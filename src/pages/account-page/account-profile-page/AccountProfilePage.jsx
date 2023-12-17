import React from 'react';
import styles from './AccountProfilePage.module.css';
import { Link } from 'react-router-dom';
import FormButton from '../../../components/form-btn/FormButton';

const AccountProfilePage = () => {
  return (
    <div className={styles.wrapperAccountProfilePage}>
      <div className={styles.wrapperAccountProfile}>
        <h1 className={styles.heading}>TÀI KHOẢN CỦA BẠN</h1>
        <div className={styles.content}>
          <div className={styles.wrapperInforField}>
            <div className={styles.labelInfor}>Họ và tên</div>
            <div className={styles.displayInfor}>Ngô Thị Châm Anh</div>
            <Link>Sửa</Link>
          </div>

          <div className={styles.wrapperInforField}>
            <div className={styles.labelInfor}>Giới tính</div>
            <div className={`${styles.displayInfor} ${styles.displayGender}`}>
              <div className={styles.wrapperGenderField}>
                <div className={styles.genderField}>
                  <span className={styles.labelGender}>Nữ</span>
                  <input type="radio" name="gender" id="gender" />
                </div>

                <div className={styles.genderField}>
                  <span className={styles.labelGender}>Nam</span>
                  <input type="radio" name="gender" id="gender" />
                </div>
              </div>
            </div>
            <Link>Sửa</Link>
          </div>

          <div className={styles.wrapperInforField}>
            <div className={styles.labelInfor}>Email</div>
            <div className={styles.displayInfor}>ngothichamanh@gmail.com</div>
            <Link>Sửa</Link>
          </div>

          <div className={styles.wrapperInforField}>
            <div className={styles.labelInfor}>Địa chỉ</div>
            <div className={styles.displayInfor}>
              109/9, Lê Văn Chí, Linh Trung, Thủ Đức
            </div>
            <Link>Sửa</Link>
          </div>

          <div className={styles.wrapperInforField}>
            <div className={styles.labelInfor}>Đổi mật khẩu</div>
            <div className={styles.displayInfor}>********</div>
            <Link>Sửa</Link>
          </div>
        </div>
        <div className={styles.footer}>
          <Link>Hủy</Link>
          <FormButton text={'Lưu Thông tin'} className={styles.accountBtn} />
        </div>
      </div>
    </div>
  );
};

export default AccountProfilePage;
