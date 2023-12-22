import { Link } from "react-router-dom";
import "./Rate.scss";

const Rate = () => {
  const rates = [
    {
      customerName: "Lan Phuong",
      productName: "abc",
      rateContent: "danh gia danh gisa kajdadj kaks  adkdk djas",
      rateScore: 4,
    },
    {
      customerName: "Lan Phuong",
      productName: "abc",
      rateContent: "danh gia danh gisa kajdadj kaks  adkdk djas",
      rateScore: 4,
    },
    {
      customerName: "Lan Phuong",
      productName: "abc",
      rateContent: "danh gia danh gisa kajdadj kaks  adkdk djas",
      rateScore: 4,
    },
    {
      customerName: "Lan Phuong",
      productName: "abc",
      rateContent: "danh gia danh gisa kajdadj kaks  adkdk djas",
      rateScore: 4,
    },
    {
      customerName: "Lan Phuong",
      productName: "abc",
      rateContent: "danh gia danh gisa kajdadj kaks  adkdk djas",
      rateScore: 4,
    },
  ];
  return (
    <>
      <div className="rate-filter">
        <div className="mb-3 row">
          <label className="col-lg-2 col-form-label">Tên sản phẩm: </label>
          <div className="col-lg-8 my-2">
            <input className="form-control" placeholder="Nhập tên sản phẩm" />
          </div>
          <div className="col-lg-2">
            <button className="btn search-btn mx-2">Tìm kiếm</button>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-lg-2 col-form-label">Sắp xếp theo: </label>
          <div className="col-lg-3">
            <select className="form-select">
              <option>Rating cao</option>
              <option>Rating thấp</option>
            </select>
          </div>
          <label className="col-lg-2 col-form-label">Tình trạng: </label>
          <div className="col-lg-3">
            <select className="form-select">
              <option>Đã hoàn tất</option>
            </select>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-danger">Xóa bộ lọc</button>
          </div>
        </div>
      </div>
      <div className="rate-table table-responsive">
        <table className="table table-hover table-bordered table-striped">
          <thead className="table-active">
            <tr>
              <th>STT</th>
              <th>Khách hàng</th>
              <th>Tên sản phẩm</th>
              <th>Đánh giá</th>
              <th>Rating</th>
              <th>Tình trạng</th>
            </tr>
          </thead>
          <tbody>
            {rates?.length > 0 &&
              rates?.map((item, index) => {
                return (
                  <tr key={item.categoryId}>
                    <td>{index + 1}</td>
                    <td>{item.customerName}</td>
                    <td>{item.productName}</td>
                    <td>{item.rateContent}</td>
                    <td>{item.rateScore}</td>
                    <td>
                      <button className="btn active-btn">Đã hoàn tất</button>
                      <Link className="btn edit-btn mx-2" to={"cap-nhat"}>
                        Cập nhật
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
};
export default Rate;
