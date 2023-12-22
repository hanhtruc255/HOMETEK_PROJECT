import { Link } from "react-router-dom";
import "./Product.scss";

const Product = () => {
  const products = [
    {
      id: "NCKDE1",
      name: "Nồi chiên không dầu 3.5L Explore 6 NCKDE1",
      price: 1550000,
      sale_price: 1350000,
      category: "Bếp",
      sub_category: "Nồi chiên không dầu",
      brand_name: "Electrolux",
      description:
        " - Không khí nóng nhanh mang lại kết cấu sắc nét hoàn hảo.\n- Điều khiển kỹ thuật số dễ sử dụng và các chương trình cài đặt sẵn.\n- 8 chương trình cài đặt sẵn giúp nấu ăn dễ dàng và hiệu quả.",
      tech_detail:
        "Sản phẩm: Nồi chiên không dầu \n Loại cài đặt: Đứng tự do \n Công suất (L): 3,5 L \n Phạm vi nhiệt độ (° C): 80-200 \n Tần số (Hz): 50-60 \n Điện áp (V): 220-240 \n Tổng công suất (W):1500 \n Chiều rộng: 355mm \n Chiều sâu: 270mm \n Chiều cao: 330mm \n Trọng lượng tịnh của sản phẩm (kg) 5,4 KG",
      image: "./data/image/Noichienkhongdau/e5af1-710s-angl-1500x1500.png",
      sub_image: [
        "./data/image/Noichienkhongdau/e5af1-710s-angl-pr-1500x1500.png",
        "./data/image/Noichienkhongdau/e5af1-710s-cp-1500x1500.jpg",
        "./data/image/Noichienkhongdau/e5af1-710s-fr-1500x1500-min.jpg",
      ],
      note: "",
      created_at: "07/10/2023",
      modified_at: "",
    },
    {
      id: "NCKDE2",
      name: "Nồi chiên không dầu 5L Explore 6 NCKDE2",
      price: 3590000,
      sale_price: 2140000,
      category: "Bếp",
      sub_category: "Nồi chiên không dầu ",
      brand_name: "Electrolux",
      description:
        " - Không khí nóng nhanh mang lại kết cấu sắc nét hoàn hảo.\n- Điều khiển kỹ thuật số dễ sử dụng và các chương trình cài đặt sẵn.\n- Giỏ an toàn với máy rửa chén để dễ dàng vệ sinh.Nồi chiên nhỏ gọn cũng có thể quay và nướng.",
      tech_detail:
        "Sản phẩm: Nồi chiên không dầu \n Loại cài đặt: Đứng tự do \n Công suất (L): 5 L \n Phạm vi nhiệt độ (° C): 80-200 \n Chiều rộng: 297,5mm \n Chiều sâu: 378,3mm \n Chiều cao: 350 mm \n Trọng lượng tịnh của sản phẩm (kg): 6.18 kg",
      image: "./data/image/Noichienkhongdau/vn-e6af1-520k-fr1-1500x1500.jpg",
      sub_image: [
        "./data/image/Noichienkhongdau/e5af1-710s-angl-pr-1500x1500.png",
        "./data/image/Noichienkhongdau/e5af1-710s-cp-1500x1500.jpg",
        "./data/image/Noichienkhongdau/e5af1-710s-fr-1500x1500-min.jpg",
      ],
      note: "Sản phẩm khuyến mãi",
      created_at: "07/10/2023",
      modified_at: "",
    },

    {
      id: "NCKDS1",
      name: "Nồi chiên không dầu 6L Sunhouse NCKDS1",
      price: 1590000,
      sale_price: 1500000,
      category: "Bếp",
      sub_category: "Nồi chiên không dầu ",
      brand_name: "Sunhouse",
      description:
        " Công nghệ Rapid Air \n - Giòn bên ngoài, mềm bên trong \n -Giảm đến 80% lượng chất béo, bảo vệ sức khỏe \n -Thân nồi inox siêu bền, chống bám bẩn, dễ lau chùi \n -Dung tích lớn 6L, nướng gà vịt nguyên con tiện lợi \n -Chống dính cao cấp siêu bền, an toàn tuyệt đối \n Tự ngắt khi quá tải nhiệt, an toàn sử dụng",
      tech_detail:
        "Màu sắc: Đen \n Chất liệu vỏ nồi:Inox chống trầy xước - Nhựa PP siêu bền \n Chất liệu ruột nồi: Thép sơn chống dính \n Dung tích: 6 L \n Công suất: 1750 W \n Điện áp: 220V~/ 50Hz \n Hẹn giờ: Có \n Màn hình:Không \n Bảng điều khiển: Núm xoay \n Đặc điểm khác \n - Dung tích lớn chiên gà vịt nguyên con \n - Công nghệ Rapid Air tiên tiến \n - Giảm 80% lượng mỡ thừa, tốt cho sức khỏe \n Thương hiệu: SUNHOUSE \n Xuất xứ: Trung Quốc \n Trọng lượng: 5.85 kg \n Kích thước đóng hộp: 350x280x380mm \n Bảo hành: 12 tháng",
      image: "./data/image/Noichienkhongdau/0(192).png",
      sub_image: [
        "./data/image/Noichienkhongdau/3(539).jpg",
        "./data/image/Noichienkhongdau/4(514).jpg",
        "./data/image/Noichienkhongdau/10(30).jpg",
      ],
      note: "",
      created_at: "08/10/2023",
      modified_at: "",
    },
  ];
  return (
    <>
      <div className="product-filter">
        <div className="mb-3 row">
          <label className="col-lg-2 col-form-label">Tên sản phẩm: </label>
          <div className="col-lg-6 my-2 col-sm-12">
            <input className="form-control" placeholder="Nhập tên sản phẩm" />
          </div>
          <div className="col-lg-4">
            <button className="btn search-btn">Tìm kiếm</button>
            <Link className="btn add-btn mx-2" to={"them"}>
              Thêm sản phẩm
            </Link>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-lg-2 col-form-label">Khoảng giá: </label>
          <div className="col-lg-2">
            <select className="form-select">
              <option>Cao đến thấp</option>
              <option>Thấp đến cao</option>
            </select>
          </div>
          <label className="col-lg-2 col-form-label">Sắp xếp theo: </label>
          <div className="col-lg-2">
            <select className="form-select">
              <option>Mới nhất</option>
              <option>Củ nhất</option>
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
              <th>ID Sản Phẩm</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá</th>
              <th>Ngày tạo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products?.length > 0 &&
              products?.map((item, index) => {
                return (
                  <tr key={item.categoryId}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td className="col-4">{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.created_at}</td>
                    <td>
                      <Link className="btn edit-btn" to={"cap-nhat"}>
                        Sửa
                      </Link>
                      <button className="btn btn-danger mx-2">Xóa</button>
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
export default Product;
