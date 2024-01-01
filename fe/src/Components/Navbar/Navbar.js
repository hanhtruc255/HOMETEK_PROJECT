import React, { useContext, useState } from "react";
import { useEffect } from "react";
import "./Navbar.scss";
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link, useLocation  } from "react-router-dom";
import { BsTruck } from "react-icons/bs";
import "./Responsive.scss";
import { BsChevronDown } from "react-icons/bs";
import "./UserDropdownMenu.css";
import { AppContext } from "../../Pages/Users/layout/Layout";
const Navbar = () => {
  const { setDisplayNotifyPopup } = useContext(AppContext);

  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  return (
    <div>
      <div className="Nav__top">
        <div className="header__top__left">
          <Link to={"/"}>HOMETEK</Link>
        </div>

        <div className="header__top__midle">
          <input type="text" placeholder="Bạn muốn tìm gì..." />
          <Link to={""}>
            <BsSearch className="iconSearch" />
          </Link>
        </div>

        <div className="header__top__right">
          <ul>
            <li className={activeLink === '/yeu-thich' ? 'active' : ''}>
              <Link to={"/yeu-thich"}>
                <BsHeart />
              </Link>
            </li>
            <li className={activeLink === '/gio-hang' ? 'active' : ''}>
              {" "}
              <Link to={"/gio-hang"}>
                <BsCart3 />
              </Link>
            </li>
            <li className="wrap-user-dropdown" >
              {" "}
              <Link
                to={
                  window.localStorage.getItem("isLoggedIn")
                    ? "/account/account-profile"
                    : "/login"
                }
              >
                <BsPerson />
              </Link>
              {window.localStorage.getItem("isLoggedIn") && (
                <ul className="acc-dropdown in-acc-dropdown">
                  <li>
                    <Link
                      to={"/account/account-profile"}
                      className="dropdown-link"
                    >
                      Tài khoản của tôi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/account/orders-management/list-orders"}
                      className="dropdown-link"
                    >
                      Quản lý đơn hàng
                    </Link>
                  </li>
                  <li>
                    <Link to={"/account/assist"} className="dropdown-link">
                      Hỗ trợ
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-link"
                      onClick={() => {
                        setDisplayNotifyPopup(true);
                      }}
                    >
                      Đăng xuất
                    </Link>
                  </li>
                </ul>
              )}
              {!window.localStorage.getItem("isLoggedIn") && (
                <ul className="acc-dropdown out-acc-dropdown">
                  <li>
                    <Link to={"/login"} className="dropdown-link">
                      Đăng nhập
                    </Link>
                  </li>
                  <li>
                    <Link to={"/signup"} className="dropdown-link">
                      Đăng ký
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li  className={activeLink === '/tra-ma-van-don' ? 'active' : ''}>
              <Link to={"/tra-ma-van-don"}>
                <BsTruck />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <nav className="Menu">
          <ul>
            <li>
              {" "}
              <Link to="/about-us"> Về chúng tôi</Link>{" "}
            </li>
            <li>
              <Link to={"/01"}>
                Bếp
                <BsChevronDown />
              </Link>
              <ul className="header__menu__dropdown">
                <li>
                  <Link to="/01/sub/B1">Nồi chiên không dầu</Link>
                </li>
                <li>
                  <Link to="/01/sub/B2">Nồi cơm thông minh</Link>
                </li>

                <li>
                  <Link to="/01/sub/B3">Máy rửa thực phẩm</Link>
                </li>
                <li>
                  <Link to="/01/sub/B4">Máy khử trùng đồ dùng bếp</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/02">
                Dọn dẹp
                <BsChevronDown />
              </Link>
              <ul className="header__menu__dropdown">
                <li>
                  <Link to="/02/sub/D1">Bàn chảy đa năng</Link>
                </li>
                <li>
                  <Link to="/02/sub/D2">Máy lọc không khí thông minh</Link>
                </li>
                <li>
                  <Link to="/02/sub/D3">Robot hút bụi lau nhà</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/03">
                Tiện ích <BsChevronDown />{" "}
              </Link>
              <ul className="header__menu__dropdown">
                <li>
                  <Link to="/03/sub/T1">Máy tạo bọt rửa tay</Link>
                </li>
                <li>
                  <Link to="/02/sub/T2">Loa trợ lý ảo thông minh</Link>
                </li>
                <li>
                  <Link to="/02/sub/T3">Công tắc thông minh</Link>
                </li>
              </ul>
            </li>

            <li>
              {" "}
              <Link to="/blog-page">Blog</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact">Liên hệ</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/chinh-sach">Chính sách</Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
