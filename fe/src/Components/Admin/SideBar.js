import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
const SideBar = () => {
  return (
    <>
      <div className="sidebar-admin col-auto col-md-3 col-xl-2 px-0">
        <Link
          to="/"
          className="sidebar-home pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-3 d-none d-sm-inline text-center w-100 text-uppercase">
            Home tek
          </span>
        </Link>
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <NavLink
                to="/admin/don-hang"
                className={({ isActive }) => {
                  return `align-middle px-0 ${isActive && "active"}`;
                }}
              >
                <i className="fs-4 bi-newspaper"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">
                  Quản lý đơn hàng
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/blog"
                className={({ isActive }) => {
                  return `align-middle px-0 ${isActive && "active"}`;
                }}
              >
                <i className="fs-4 bi-backpack"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">Quản lý Blog</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/san-pham"
                className={({ isActive }) => {
                  return `align-middle px-0 ${isActive && "active"}`;
                }}
              >
                <i className="fs-4 bi-list"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">
                  Quản lý sản phẩm
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/khach-hang"
                className={({ isActive }) => {
                  return `align-middle px-0 ${isActive && "active"}`;
                }}
              >
                <i className="fs-4 bi-person"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">
                  Quản lý khách hàng
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/danh-gia"
                className={({ isActive }) => {
                  return `align-middle px-0 ${isActive && "active"}`;
                }}
              >
                <i className="fs-4 bi-flag"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">
                  Quản lý đánh giá
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/khuyen-mai"
                className={({ isActive }) => {
                  return `align-middle px-0 ${isActive && "active"}`;
                }}
              >
                <i className="fs-4 bi-archive"></i>{" "}
                <span className="ms-1 d-none d-sm-inline">
                  Quản lý khuyến mãi
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
