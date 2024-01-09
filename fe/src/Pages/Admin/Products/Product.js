import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Product.scss";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/Cua_hang");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); 
 
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
        <div className="mb-4 row">
          <label className="col-lg-2 col-form-label">Khoảng giá: </label>
          <div className="col-lg-2">
            <select className="form-select">
              <option>Cao đến thấp</option>
              <option>Thấp đến cao</option>
            </select>
          </div>
          <label className="col-lg-2">Sắp xếp theo: </label>
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
