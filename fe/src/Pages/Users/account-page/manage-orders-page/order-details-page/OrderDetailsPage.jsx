import { React, useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import FormatPriceString from '../../../../../functions/FormatPriceString'
import styles from "./OrderDetailsPage.module.css";
const OrderDetailsPage = () => {
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

  const cancelOrder = async (orderId) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/order/${orderId}`
      );
      console.log("response.data: ", response.data);
      fetchData();
    } catch (error) {
      console.error("error: ", error);
    }
  };

  const completeOrder = async (orderId) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/complete/order/${orderId}`
        // transformOrderStatus
      );
      console.log("response.data: ", response.data);
      fetchData();
    } catch (error) {
      console.error("error: ", error);
    }
  };

  const renderProductsTable = (products) => {
    if (products) {
      return products.map((product) => {
        return (
          <tr className={styles.bodyRow}>
            <td>1</td>
            <td>{product.name}</td>
            <td>{product.productId}</td>
            <td>{product.sale_price}</td>
            <td>{product.quantity}</td>
            <td>{product.sale_price * product.quantity}</td>
          </tr>
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
    console.log("products: ", products);
    renderProductsTable(products);
  }, [orderData, products]);
  return (
    <div className={styles.wrapperOrderDetailsPage}>
      <div className={styles.wrapperOrderDetails}>
        <div className={styles.heading}>CHI TIẾT ĐƠN HÀNG</div>
        <div>
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
            <div className={styles.detailValue}>
              {FormatPriceString(orderData.finalAmount)}
            </div>
          </div>
        </div>
        {orderData.orderStatus === "Chờ xác nhận" && (
          <button
            className={styles.cancelOrderBtn}
            onClick={() => {
              cancelOrder(orderId);
              history("/account/orders-management/list-orders");
            }}
          >
            Hủy đơn
          </button>
        )}
        {orderData.orderStatus === "Đang vận chuyển" && (
          <button
            className={styles.cancelOrderBtn}
            onClick={() => {
              completeOrder(orderId);
              history("/account/orders-management/list-orders");
            }}
          >
            Đã nhận hàng
          </button>
        )}

        {orderData.orderStatus === "Hoàn tất" && (
          <button
            className={styles.cancelOrderBtn}
            onClick={() => {
              completeOrder(orderId);
              history("rating-order");
            }}
          >
            Đánh giá
          </button>
        )}
      </div>
      <div className={styles.wrapperShippingInfor}>
        <div className={styles.shippingInforItem}>
          <div className={styles.heading}>THÔNG TIN NGƯỜI NHẬN</div>
          <div className={styles.wrapperShippingInforContent}>
            <div className={styles.reciverName}>{orderData.customerName}</div>
            <div className={styles.address}>{orderData.deliveryAddress}</div>
            <div className={styles.phoneNumber}>
              {"Tel: " + orderData.deliveryPhoneNumber}
            </div>
          </div>
        </div>

        <div className={styles.shippingInforItem}>
          <div className={styles.heading}>PHƯƠNG THỨC VẬN CHUYỂN</div>
          <div className={styles.wrapperShippingInforContent}>
            <div className={styles.shippingMethod}>Giao hàng nhanh</div>
          </div>
        </div>

        <div className={styles.shippingInforItem}>
          <div className={styles.heading}>PHƯƠNG THỨC THANH TOÁN</div>
          <div className={styles.wrapperShippingInforContent}>
            <div className={styles.shippingMethod}>
              {orderData.paymentMethod}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperTotalBill}>
        <div className={styles.wrapperOrderDetail}>
          <table className={styles.tableOrdersDetail}>
            <thead className={styles.tableHeading}>
              <tr className={styles.headingRow}>
                <th className={styles.col1}>STT</th>
                <th className={styles.col2}>Tên sản phẩm</th>
                <th className={styles.col3}>Mã sản phẩm</th>
                <th className={styles.col4}>Giá bán</th>
                <th className={styles.col5}>Số lượng</th>
                <th className={styles.col6}>Thành tiền</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {renderProductsTable(products)}
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
