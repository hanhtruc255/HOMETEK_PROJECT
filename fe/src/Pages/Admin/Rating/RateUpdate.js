import { Link } from "react-router-dom";
import "./RateUpdate.scss";
const RateUpdate = () => {
  return (
    <>
      <div className="rate-title mb-3">
        <button className="btn title-btn">
          <i className="bi bi-chevron-left"></i>
        </button>
        <span className="bg-secondary-subtle p-2 mx-2 rounded fw-bold">
          Cập nhật tình trạng đánh giá
        </span>
      </div>
      <div className="rate-customer d-flex justify-content-between border-bottom mb-3">
        <h3 className="fw-bolder">Mai Thương</h3>
        <span className="bg-warning-subtle p-2 fw-bold">Đang chờ duyệt</span>
      </div>
      <div className="rate-content">
        <div className="rate-content-title fw-bold fs-5 mb-3">
          Chi tiết đánh giá
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-bordered table-striped">
            <thead className="table-active">
              <tr>
                <th>Đánh giá</th>
                <th>Sản phẩm</th>
                <th>Rating</th>
                <th>Ngày</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>asaksladnsdklsdsdmlsd ksakán akakskạ</td>
                <td>Nồi chiên</td>
                <td>4</td>
                <td>
                  12/12/2023 <i className="bi bi-check-square"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="rate-update d-flex">
        <div className="col-lg-2">
          <select className="form-select">
            <option>Đã duyệt</option>
            <option>Đang chờ</option>
          </select>
        </div>
        <button className="btn edit-btn ms-2">Cập nhật</button>
      </div>
    </>
  );
};
export default RateUpdate;
