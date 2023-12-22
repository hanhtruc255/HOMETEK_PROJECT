import { Link } from "react-router-dom";
import "./Voucher.scss";
function Voucher() {
  const vouchers = [
    {
      voucherCode: "SISKLFN",
      voucherValue: "50%",
      startDate: "20/12/2023",
      endDate: "22/12/2023",
    },
    {
      voucherCode: "SISKLFN",
      voucherValue: "50%",
      startDate: "20/12/2023",
      endDate: "22/12/2023",
    },
    {
      voucherCode: "SISKLFN",
      voucherValue: "50%",
      startDate: "20/12/2023",
      endDate: "22/12/2023",
    },
  ];
  return (
    <>
      <div className="voucher-filter">
        <div className="mb-3 row">
          <label className="col-lg-2 col-form-label">Mã voucher: </label>
          <div className="col-lg-6 my-2">
            <input className="form-control" />
          </div>
          <div className="col-lg-4">
            <button className="btn search-btn">Tìm kiếm</button>
            <Link className="btn add-btn mx-2" to={"them"}>
              Thêm mã
            </Link>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-lg-2 col-form-label">Sắp xếp theo: </label>
          <div className="col-lg-2">
            <select className="form-select">
              <option>Khuyến mãi</option>
            </select>
          </div>
          <label className="col-lg-2 col-form-label">Tình trạng: </label>
          <div className="col-lg-2 my-2">
            <select className="form-select">
              <option>Còn hiệu lực</option>
            </select>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-danger">Xóa bộ lọc</button>
          </div>
        </div>
      </div>
      <div className="voucher-table table-responsive">
        <table className="table table-hover table-bordered table-striped">
          <thead className="table-active">
            <tr>
              <th>STT</th>
              <th>Mã code</th>
              <th>Khuyến mãi</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
              <th>Tình trạng</th>
            </tr>
          </thead>
          <tbody>
            {vouchers?.length > 0 &&
              vouchers?.map((item, index) => {
                return (
                  <tr key={item.categoryId}>
                    <td>{index + 1}</td>
                    <td>{item.voucherCode}</td>
                    <td>{item.voucherValue}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td>
                      <button className="btn active-btn">Còn hiệu lực</button>
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

export default Voucher;
