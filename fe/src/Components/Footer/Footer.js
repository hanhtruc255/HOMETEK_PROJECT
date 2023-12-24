import React from 'react';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';
import send from '../../assets/icons/icon-send.svg';
import FormButton from './FormButton';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>HOME TEK</h1>
        <p>
          TheFaceHolic.com cung cấp thông tin giá, mô tả, hình ảnh và thông tin
          chi tiết của sản phẩm Chăm sóc da mặt, Chăm sóc cơ thể, Trang điểm,
          Chăm sóc tóc và da đầu, Nước hoa, Bộ sản phẩm làm đẹp, Mỹ phẩm nam, Mỹ
          Phẩm Khác...{' '}
        </p>
      </div>

      <div>
        <h3>
          <Link to={'/'}>Về Chúng Tôi</Link>
        </h3>
        <p>
          <Link to={'/'}>Giới Thiệu</Link>
        </p>

        <p>
          <Link to={'/'}>Chính Sách</Link>
        </p>

        <p>
          <Link to={'/'}>Tin Tức</Link>
        </p>
      </div>

      <div>
        <h3>
          <Link to={'/'}>Liên Hệ</Link>
        </h3>
        <p>Địa chỉ: AAA/88/HCM</p>

        <p>Email: hometek@gmail.com</p>

        <p>Số điện thoại: 0933322678</p>
      </div>

      <div>
        <h3>Đăng Ký Nhận Bản Tin</h3>
        <input type="text" placeholder="Nhập Email của bạn" />
        <img src={send} alt="" />
        <FormButton
          text={'Subscribe'}
          style={{
            width: 'fit-content',
            padding: '10px',
            borderRadius: '20px',
            fontWeight: 'lighter',
            boxShadow: '4px 4px 8px 0 rgba(0, 0, 0, 0.2)',
            margin: '0',
          }}
        />
      </div>
    </div>
  );
};
export default Footer;
