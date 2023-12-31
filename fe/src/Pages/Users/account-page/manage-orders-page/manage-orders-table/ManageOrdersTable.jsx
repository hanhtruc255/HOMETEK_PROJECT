import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ManageOrdersTable.module.css";
import "../../../../../styles/TableStyle.css";
import classNames from "classnames";
import axios from "axios";
// import orderStatusData from '../../../../test-data/orderStatusData.json';
// import { useTable } from 'react-table';
// import FormButton from '../../../../components/form-btn/FormButton';
import FormButton from "../../../../../Components/form-btn/FormButton";
import SingleOrder from "../../../../../Components/single-order/SingleOrder";
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

  const [orderStatus, setOrderStatus] = useState("Tất cả");
  const changeOrderStatus = (newOrderStatus) => {
    setOrderStatus(newOrderStatus);
  };
  const history = useNavigate();

  const [ordersData, setOrdersData] = useState([]);
  const fetchData = async () => {
    try {
      const [orders] = await Promise.all([
        fetch("http://localhost:3001/order"),
      ]);

      if (!orders.ok) {
        throw new Error("Orders response was not ok");
      }

      const data = await orders.json();

      setOrdersData(data);
    } catch (error) {}
  };

  useEffect(() => {
    console.log("RELOAD");
    fetchData();
    renderListOrdersUi();
  }, []);

  useEffect(() => {
    console.log("orders: ", ordersData);
  }, [ordersData]);

  const renderListOrdersUi = () => {
    ordersData.map((order) => {
      if (orderStatus === "Tất cả") {
        return (
          <SingleOrder
            type={"Tất cả"}
            order={order}
            handleClickDetailBtn={() => {
              navigateOrderDetailPageAtId(order.orderId);
            }}
          />
        );
      } else {
        if (order.orderStatus === orderStatus) {
          if (orderStatus === "Chờ xác nhận") {
            return (
              <SingleOrder
                order={order}
                type={orderStatus}
                handleClickMainBtn={() => {
                  cancelOrder(order.orderId);
                }}
                handleClickDetailBtn={() => {
                  navigateOrderDetailPageAtId(order.orderId);
                }}
              />
            );
          }
          return (
            <SingleOrder
              order={order}
              type={orderStatus}
              handleClickDetailBtn={() => {
                navigateOrderDetailPageAtId(order.orderId);
              }}
            />
          );
        }
      }
    });
  };

  const navigateOrderDetailPageAtId = (orderId) => {
    history(`/account/orders-management/order-details/${orderId}`);
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
        {ordersData.map((order) => {
          if (orderStatus === "Tất cả") {
            return (
              <SingleOrder
                type={"Tất cả"}
                order={order}
                handleClickDetailBtn={() => {
                  navigateOrderDetailPageAtId(order.orderId);
                }}
              />
            );
          } else {
            if (order.orderStatus === orderStatus) {
              if (orderStatus === "Chờ xác nhận") {
                return (
                  <SingleOrder
                    order={order}
                    type={orderStatus}
                    handleClickMainBtn={() => {
                      cancelOrder(order.orderId);
                    }}
                    handleClickDetailBtn={() => {
                      navigateOrderDetailPageAtId(order.orderId);
                    }}
                  />
                );
              } else if (orderStatus === "Đang vận chuyển") {
                return (
                  <SingleOrder
                    order={order}
                    type={orderStatus}
                    handleClickMainBtn={() => {
                      completeOrder(order.orderId);
                    }}
                    handleClickDetailBtn={() => {
                      navigateOrderDetailPageAtId(order.orderId);
                    }}
                  />
                );
              }
              return (
                <SingleOrder
                  order={order}
                  type={orderStatus}
                  handleClickDetailBtn={() => {
                    navigateOrderDetailPageAtId(order.orderId);
                  }}
                />
              );
            }
          }
        })}
      </div>
    </>
  );
};

export default ManageOrdersTable;
