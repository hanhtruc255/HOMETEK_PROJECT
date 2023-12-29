import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ManageOrdersTable.module.css";
import classNames from "classnames";
// import orderStatusData from '../../../../test-data/orderStatusData.json';
// import { useTable } from 'react-table';
// import FormButton from '../../../../components/form-btn/FormButton';
import FormButton from "../../../../../Components/form-btn/FormButton";
// import { Link } from 'react-router-dom';

const ManageOrdersTable = () => {
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

  const sampleOrderData = [
    {
      orderId: "ORD123",
      customerName: "Trương Thị Tuyết Mai",
      phone: "0932660227",
      address: "33/3 đường số 1, phường 4, quận Gò Vấp, TPHCM",
      payment: " Thanh toán khi nhận hàng",
      products: [
        {
          productId: "NCKDE2",
          name: "Nồi chiên không dầu 5L Explore 6 NCKDE2",
          image:
            "./data/image/Noichienkhongdau/vn-e6af1-520k-fr1-1500x1500.jpg",
          price: 3590000,
          sale_price: 2140000,
          quantity: 2,
        },
      ],
      totalAmount: 4280000,
      status: "Đã xác nhận",
      createdAt: "2023-12-25T08:00:00.000Z",
    },
    {
      orderId: "ORD203",
      customerName: "Trương Tú Anh",
      phone: "0977456189",
      address: "432 Lê Văn Thọ, Phường 16, Quận Gò Vấp, TPHCM",
      payment: " Thanh toán khi nhận hàng",
      products: [
        {
          productId: "CTTM2",
          name: "Công tắc cảm ứng LifeSmart Nature Switch CTTM2",
          image: "./data/image/Congtacthongminh/CTTM_LifeSmart_1.png",
          price: 2405000,
          sale_price: 1850000,
          quantity: 1,
        },
        {
          productId: "LTM2",
          name: "Loa thông minh Google Home",
          image:
            "./data/image/Noichienkhongdau/vn-e6af1-520k-fr1-1500x1500.jpg",
          price: 2260000,
          sale_price: 2000000,
          quantity: 1,
        },
      ],
      totalAmount: 3850000,
      status: "Chưa xác nhận",
      createdAt: "2023-12-26T08:00:00.000Z",
    },
    {
      orderId: "ORD243",
      customerName: "Trần Anh Minh",
      phone: "078322465",
      address: "699 Nguyễn Ảnh Thủ, Tân Chánh Hiệp, Quận 12, TPHCM",
      payment: " Thanh toán khi nhận hàng",
      products: [
        {
          productId: "MTB2",
          name: "Máy đựng sữa rửa tay tạo bọt Xiaomi X101",
          image: "./data/image/Congtacthongminh/CTTM_LifeSmart_1.png",
          price: 2405000,
          sale_price: 1900000,
          quantity: 1,
        },
        {
          productId: "RBE1",
          name: "Hộp đựng đũa khử khuẩn UV thông minh AOKAEN",
          image:
            "./data/image/Noichienkhongdau/vn-e6af1-520k-fr1-1500x1500.jpg",
          price: 2260000,
          sale_price: 1900000,
          quantity: 1,
        },
      ],
      totalAmount: 3800000,
      status: "Đã hủy",
      createdAt: "2023-12-26T08:00:00.000Z",
    },
  ];
  const [orderStatus, setOrderStatus] = useState("Tất cả");
  const changeOrderStatus = (newOrderStatus) => {
    setOrderStatus(newOrderStatus);
  };
  const history = useNavigate();
  return (
    <>
      <div className={styles.wrapperBtn}>
        <FormButton
          text={"Tất cả"}
          className={classNames(
            styles.orderStateBtn,
            orderStatus === "Tất cả" ? styles.selectedBtn : ""
          )}
          onClick={() => {
            changeOrderStatus("Tất cả");
          }}
        />
        <FormButton
          text={"Chờ xác nhận"}
          className={classNames(
            styles.orderStateBtn,
            orderStatus === "Chờ xác nhận" ? styles.selectedBtn : ""
          )}
          onClick={() => {
            changeOrderStatus("Chờ xác nhận");
          }}
        />
        <FormButton
          text={"Chờ lấy hàng"}
          className={classNames(
            styles.orderStateBtn,
            orderStatus === "Chờ lấy hàng" ? styles.selectedBtn : ""
          )}
          onClick={() => {
            changeOrderStatus("Chờ lấy hàng");
          }}
        />
        <FormButton
          text={"Đang vận chuyển"}
          className={classNames(
            styles.orderStateBtn,
            orderStatus === "Đang vận chuyển" ? styles.selectedBtn : ""
          )}
          onClick={() => {
            changeOrderStatus("Đang vận chuyển");
          }}
        />
        <FormButton
          text={"Hoàn tất"}
          className={classNames(
            styles.orderStateBtn,
            orderStatus === "Hoàn tất" ? styles.selectedBtn : ""
          )}
          onClick={() => {
            changeOrderStatus("Hoàn tất");
          }}
        />
        <FormButton
          text={"Đã hủy"}
          className={classNames(
            styles.orderStateBtn,
            orderStatus === "Đã hủy" ? styles.selectedBtn : ""
          )}
          onClick={() => {
            changeOrderStatus("Đã hủy");
          }}
        />
      </div>
      <div className={styles.wrapperOrders}>
        <div className={styles.wrapperSingleOrder}>
          <div className={styles.headingOrder}>
            <div className={styles.wrapperHeadingTextAndBtn}>
              <h4 className={styles.headingText}>SẢN PHẨM</h4>
              <button className={styles.headingBtn}>CHAT NGAY</button>
            </div>
            <span className={styles.orderStatusText}>CHỜ XÁC NHẬN</span>
          </div>
          <div className={styles.wrapperProducts}>
            <div className={styles.wrapperSingleProduct}>
              <div className={styles.productImage}>
                <img
                  src="\images\Banchaidanang\61+Xv57yh0L._AC_SX679_.jpg"
                  alt=""
                  className={styles.productImg}
                />
              </div>
              <div className={styles.productInfo}>
                <p className={styles.productName}>
                  Nồi chiên không dầu Philips 4.1 lít HD9252/90
                </p>
                <span className={styles.productClassify}>Phân loại: Đen</span>
                <span className={styles.productQuantity}>X1</span>
              </div>
              <div className={styles.productPrice}>
                <div className={styles.wrapperPrice}>
                  <span className={styles.productPriceThrough}>2.320.000đ</span>
                  <span className={styles.productPriceShow}>2.320.000đ</span>
                </div>
              </div>
            </div>
            <div className={styles.wrapperSingleProduct}>
              <div className={styles.productImage}>
                <img
                  src="\images\Banchaidanang\61+Xv57yh0L._AC_SX679_.jpg"
                  alt=""
                  className={styles.productImg}
                />
              </div>
              <div className={styles.productInfo}>
                <p className={styles.productName}>
                  Nồi chiên không dầu Philips 4.1 lít HD9252/90
                </p>
                <span className={styles.productClassify}>Phân loại: Đen</span>
                <span className={styles.productQuantity}>X1</span>
              </div>
              <div className={styles.productPrice}>
                <div className={styles.wrapperPrice}>
                  <span className={styles.productPriceThrough}>2.320.000đ</span>
                  <span className={styles.productPriceShow}>2.320.000đ</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapperTotalAmount}>
            Tổng số tiền: <span className={styles.totalAmount}>4.540.000đ</span>
          </div>
          <div className={styles.wrapperFooterBtn}>
            <FormButton
              text={"Xem chi tiết đơn hàng"}
              className={classNames(styles.footerBtn, styles.detailBtn)}
              onClick={() => {
                history("/account/orders-management/order-details");
              }}
            />
            <FormButton
              text={"Hủy đơn"}
              className={classNames(styles.footerBtn, styles.cancelBtn)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageOrdersTable;
