import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Order.scss";
function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/order");
        const data = await response.json();
        setOrders(data); // Set state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="order-filter">
        <div className="mb-3 row">
          <div className="col-lg-8 my-2">
            <input className="form-control" />
          </div>
          <div className="col-lg-4">
            <button className="btn search-btn mx-2">Tìm kiếm</button>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-lg-2 col-form-label">Sắp xếp theo: </label>
          <div className="col-lg-2">
            <select className="form-select">
              <option>Ngày</option>
              <option>Tháng</option>
              <option>Năm</option>
            </select>
          </div>
          <label className="col-lg-2 col-form-label">Tình trạng: </label>
          <div className="col-lg-2 my-2 row ">
            <select className="form-select">
              <option>Đã hủy</option>
              <option>Đã xác nhận</option>
              <option>Hoàn thành</option>
              <option>Chờ xác nhận</option>
              <option>Đang vận chuyển</option>
            </select>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-danger">Xóa bộ lọc</button>
          </div>
        </div>
      </div>
      <div className="product-table table-responsive">
        <table className="table table-hover table-bordered table-striped">
          <thead className="table-active">
            <tr>
              <th>STT</th>
              <th>Mã đơn hàng</th>
              <th>Khách hàng</th>
              <th>Số điện thoại</th>
              <th>Tổng giá</th>
              <th>Ngày</th>
              <th>Tình trạng</th>
            </tr>
          </thead>
          <tbody>
            {orders?.length > 0 &&
              orders?.map((item, index) => {
                return (
                  <tr key={item.categoryId}>
                    <td>{index + 1}</td>
                    <td>{item.orderId}</td>
                    <td>{item.deliveryInfor.customerName}</td>
                    <td>{item.deliveryInfor.deliveryPhoneNumber}</td>
                    <td>{item.finalAmount}</td>
                    <td>01/01/2024</td>
                    <td>
                      <button className="btn btn-danger">Đã hủy</button>
                      <Link className="btn edit-btn mx-2" to={"cap-nhat"}>
                        Sửa
                      </Link>
                      <button className="btn btn-danger">Xóa</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Order;
