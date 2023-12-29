import React from 'react';
import styles from './OrderDetailsPage.module.css';
const OrderDetailsPage = () => {
  return (
    <div className={styles.wrapperOrderDetailsPage}>
      <div className={styles.wrapperOrderDetails}>
        <div className={styles.heading}>CHI TIẾT ĐƠN HÀNG</div>
        <div>
          <div className={styles.wrapperOrderDetail}>
            <div className={styles.detailName}>Mã đơn hàng: </div>
            <div className={styles.detailValue}>0000002</div>
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
            <div className={styles.detailValue}>500.000đ"</div>
          </div>
        </div>
        <button className={styles.cancelOrderBtn}>Hủy đơn</button>
      </div>
      <div className={styles.wrapperShippingInfor}>
        <div className={styles.shippingInforItem}>
          <div className={styles.heading}>THÔNG TIN NGƯỜI NHẬN</div>
          <div className={styles.wrapperShippingInforContent}>
            <div className={styles.reciverName}>Ngô Thị Châm Anh</div>
            <div className={styles.address}>Trường đại học kinh tế luật</div>
            <div className={styles.phoneNumber}>Tel: 012345678</div>
          </div>
        </div>

        <div className={styles.shippingInforItem}>
          <div className={styles.heading}>PHƯƠNG THỨC VẬN CHUYỂN</div>
          <div className={styles.wrapperShippingInforContent}>
            <div className={styles.shippingMethod}>Giao hàng tiêu chuẩn</div>
          </div>
        </div>

        <div className={styles.shippingInforItem}>
          <div className={styles.heading}>PHƯƠNG THỨC THANH TOÁN</div>
          <div className={styles.wrapperShippingInforContent}>
            <div className={styles.shippingMethod}>
              Thanh toán khi nhận hàng
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperTotalBill}>
        <div className={styles.wrapperOrderDetails}>
          <div className={styles.wrapperOrderDetail}>
            <div className={styles.detailName}>Mã đơn hàng: </div>
            <div className={styles.detailValue}>0000002</div>
          </div>

          <div className={styles.wrapperOrderDetail}>
            <div className={styles.detailName}>Tổng tiền: </div>
            <div className={styles.detailValue}>500.000đ"</div>
          </div>

          <div className={styles.wrapperOrderDetail}>
            <div className={styles.detailName}>Số lượng: </div>
            <div className={styles.detailValue}>1</div>
          </div>
        </div>
        <div className={styles.wrapperOrderDetail}>
          <table className={styles.tableOrdersDetail}>
            <thead className={styles.tableHeading}>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Mã sản phẩm</th>
                <th>Ngày bán</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              <tr className={styles.bodyRow}>
                <td>1</td>
                <td>Nồi chiên không dầu</td>
                <td>NCKD01</td>
                <td>500.000đ</td>
                <td>1</td>
                <td>500.000đ</td>
              </tr>
              <tr className={styles.bodyRow}>
                <td>2</td>
                <td>Nồi chiên không dầu</td>
                <td>NCKD01</td>
                <td>500.000đ</td>
                <td>1</td>
                <td>500.000đ</td>
              </tr>
              <tr className={styles.bodyRow}>
                <td>3</td>
                <td>Nồi chiên không dầu</td>
                <td>NCKD01</td>
                <td>500.000đ</td>
                <td>1</td>
                <td>500.000đ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.wrapperCalculateTotalBill}>
          <div className={styles.wrapperBillDetail}>
            <div className={styles.detailName}>Thành Tiền: </div>
            <div className={styles.detailValue}>500.000đ</div>
          </div>
          <div className={styles.wrapperBillDetail}>
            <div className={styles.detailName}>Voucher: </div>
            <div className={styles.detailValue}>-100.000đ</div>
          </div>
          <div className={styles.wrapperBillDetail}>
            <div className={styles.detailName}>Phí Vận Chuyển: </div>
            <div className={styles.detailValue}>0đ</div>
          </div>
          <div className={styles.wrapperBillDetail}>
            <div className={styles.detailName}>Tổng Số Tiền(Gồm VAT): </div>
            <div className={styles.detailValue}>4.515.000đ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
