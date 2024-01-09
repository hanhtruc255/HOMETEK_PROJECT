import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import "./Header.scss";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg my-2">
      <div className="container-fluid align-items-baseline border-bottom">
        <Breadcrumb />
        <div className="search">
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-dark-subtle border-0"
              placeholder="Tìm kiếm..."
            />
            <div class="input-group-append">
              <button class="search-btn" type="button">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav flex-row">
          <li class="nav-item dropdown mx-1">
            <Link class="nav-link position-relative dropdown-toggle">
              <i class="bi bi-bell"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
              </span>
            </Link>
          </li>
          <li class="nav-item dropdown mx-1">
            <Link class="nav-link dropdown-toggle">
              <i class="bi bi-envelope"></i>

              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
              </span>
            </Link>
          </li>
          <div className="top-bar-split"></div>
          <li class="nav-item dropdown">
            <button class="btn dropdown-toggle" data-bs-toggle="dropdown">
              <span class="me-2 d-none d-lg-inline">Admin Hometek</span>
              <img
                className={"rounded-circle"}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLRSqDuV04Ez4grCkotEG2P5__IYUHAx-mp_Ewml_dnZ9vkPxc7EsjmrGOz2q8Pdh1bn4&usqp=CAU"
                }
                alt="?"
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
            </button>
            <div class="dropdown-menu">
              <li class="dropdown-item">
                <i class="bi bi-person mx-2"></i>
                Tài khoản
              </li>
              <li class="dropdown-item">
                <i class="bi bi-gear mx-2"></i>
                Cài đặt
              </li>
              <li class="dropdown-item">
                <i class="bi bi-list mx-2"></i>
                Nhật ký
              </li>
              <div class="dropdown-divider"></div>
              <li class="dropdown-item">
                <i class="bi bi-arrow-left mx-2"></i>
                <Link to='/loginadmin'>Thoát</Link>
              </li>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
