import { Link } from "react-router-dom";
import "./OrderUpdate.scss";
const OrderUpdate = () => {
  return (
    <>
      <div className="rate-title">
        <button className="btn title-btn">
          <i className="bi bi-chevron-left"></i>
        </button>
        <span className="bg-secondary-subtle p-2 mx-2 rounded">
          Chỉnh sửa trạng thái đơn hàng
        </span>
      </div>
      <div className="rate-customer d-flex justify-content-between border-bottom py-2">
        <h3 className="fw-bolder">Mai Thuong</h3>
        <span className="bg-warning-subtle p-2">Đang vận chuyển</span>
      </div>
      <div className="rate-content">
        <div className="row border-bottom mb-3">
          <div className="col-lg-6">
            <div className="address">Địa chỉ giao hàng</div>
            <div>KTX khu B</div>
          </div>
          <div className="col-lg-6">
            <div className="payment">Phương thức thanh toán</div>
            <div>Thanh toán khi nhận hàng</div>
          </div>
        </div>
        <h4 className="fw-bold">Chi tiết đơn hàng</h4>
        <table className="table table-hover table-bordered table-striped">
          <thead className="table-active">
            <tr>
              <th>Sản phẩm</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="product-name fw-bold">
                  {" "}
                  Nồi chiên không dầu Philip
                </div>
                <div className="type small">Phân loại: Đen</div>
              </td>
              <td className="fw-bold">2.300.000đ</td>
              <td className="fw-bold">1</td>
              <td className="fw-bold">2.300.000đ</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}></td>
              <td className="text-uppercase fw-bold">Tổng</td>
              <td className="fw-bold">2.300.000đ</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="rate-update">
        <h4 className="fw-bold">Cập nhật trạng thái đơn hàng</h4>
        <div className="row">
          <div className="col-lg-2">
            <select className="form-select">
              <option>Đã hủy</option>
              <option>Đã xác nhận</option>
              <option>Hoàn thành</option>
              <option>Chờ xác nhận</option>
              <option>Đang vận chuyển</option>
            </select>
          </div>
          <div className="col">
            <button className="btn edit-btn">Cập nhật</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderUpdate;
