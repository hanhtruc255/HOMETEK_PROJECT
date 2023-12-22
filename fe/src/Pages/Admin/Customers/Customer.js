import { Link } from "react-router-dom";
import "./Customer.scss";

const Customer = () => {
  const customers = [
    {
      name: "Mai Thuong",
      phoneNumber: "01243434343",
    },
    {
      name: "Mai Thuong",
      phoneNumber: "01243434343",
    },
    {
      name: "Mai Thuong",
      phoneNumber: "01243434343",
    },
    {
      name: "Mai Thuong",
      phoneNumber: "01243434343",
    },
  ];
  return (
    <>
      <div className="customer-filter">
        <div className="mb-3 row">
          <label className="col-lg-2 form-col-label">Từ khóa</label>
          <div className="col-lg-6 my-2">
            <input
              className="form-control"
              placeholder="Nhập tên khách hàng, số điện thoại..."
            />
          </div>
          <div className="col-lg-4">
            <button className="btn search-btn mx-2">Tìm kiếm</button>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-lg-2 col-form-label">Sắp xếp theo: </label>
          <div className="col-lg-6 my-2">
            <select className="form-select">
              <option>Gần đây nhất</option>
              <option>Củ nhất</option>
            </select>
          </div>
          <div className="col-lg-4">
            <button className="btn btn-danger mx-2">Xóa bộ lọc</button>
            <Link className="btn add-customer-btn" to={"them"}>
              Thêm khách hàng
            </Link>
          </div>
        </div>
      </div>
      <div className="customer-table table-responsive">
        <table className="table table-hover table-bordered table-striped">
          <thead className="table-active">
            <tr>
              <th>STT</th>
              <th>Tên Khách Hàng</th>
              <th>Số điện thoại</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers?.length > 0 &&
              customers?.map((item, index) => {
                return (
                  <tr key={item.categoryId}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td className="col-6">{item.phoneNumber}</td>
                    <td>
                      <Link className="btn block-btn" to={"update"}>
                        Khóa
                      </Link>
                      <button className="btn btn-danger mx-2">Xóa</button>
                      <button
                        className="btn detail-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#customer-detail"
                      >
                        Chi tiết
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* hiển thị cusomer detail */}
      <div class="modal fade" id="customer-detail">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header customer-name">
              <h1 class="modal-title fs-5">
                <label className="fw-bold">Tên: </label>
                <span> Mai thương</span>
              </h1>
            </div>
            <div class="modal-body">
              <div className="customer-email">
                <label className="fw-bold">Email: </label>
                <span>thihuong@hmailcom</span>
              </div>
              <div className="customer-phone-number">
                <label className="fw-bold">Số điện thoại: </label>
                <span>012001220120</span>
              </div>
              <div className="customer-gender">
                <label className="fw-bold">Giới tính: </label>
                <span>Nữ</span>
              </div>
              <div className="customer-birth-date">
                <label className="fw-bold">Ngày sinh: </label>
                <span>02/8/2003</span>
              </div>
              <div className="customer-address">
                <label className="fw-bold">Địa chỉ: </label>
                <span>109/6, Lê Văn Chí, Linh Trung, Thủ Đức</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Customer;
