import React, { useState } from "react";
import "./Navbar.scss";
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsTruck } from "react-icons/bs";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);

<<<<<<< HEAD
const Navbar= () =>{
    return (
        <div>
            <div className="Nav__top">
                    <div className="header__top__left">
                        <Link to={"/"}>HOMETEK</Link>
                    </div>

                    <div className="header__top__midle">
                        <input type="text" placeholder="Bạn muốn tìm gì..."/>
                            <Link to={""} ><BsSearch className='iconSearch'/></Link>
                    </div>
 
                    <div className="header__top__right">
                        <ul>
                            <li>
                                <Link to ={"/yeu-thich"}><BsHeart />
                                </Link>
                                </li>
                            <li> <Link to = {"/gio-hang"} ><BsCart3 />
                                </Link> 
                                </li>
                            <li> <Link to ={"/dang-nhap"}><BsPerson />
                            </Link>
                            </li>
                            <li>
                               <Link to ={"/tra-ma-van-don"}><BsTruck /></Link>
                            </li>
                        </ul>
                    </div>
            </div>

            <div>
                <nav className="Menu">
                    <ul>
                        <li> <Link to="/about-us"> Về chúng tôi</Link> </li>
                        <li><Link to ={'/01'}>Bếp</Link> 
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
                        
                        <li><Link to ="/02">Dọn dẹp</Link>
                            <ul className="header__menu__dropdown">
                                <li><Link to="/02/sub/D1">Bàn chảy đa năng</Link></li>    
                                <li><Link to="/02/sub/D2">Máy lọc không khí thông minh</Link></li>
                                <li><Link to="/02/sub/D3">Robot hút bụi lau nhà</Link></li>     
                            </ul>
                        </li>

                        <li><Link to ="/03">Tiện ích</Link>
                            <ul className="header__menu__dropdown">
                                <li><Link to="/03/sub/T1">Máy tạo bọt rửa tay</Link></li>
                                <li><Link to="/02/sub/T2">Loa trợ lý ảo thông minh</Link></li>
                                <li><Link to="/02/sub/T3">Công tắc thông minh</Link></li>
                            </ul>
                        </li> 

                        <li> <Link to="/hometek/blog">Blog</Link> </li>
                        <li> <Link to="/hometek/lien-he">Liên hệ</Link> </li>
                        <li> <Link to="/hometek/chinh-sach">Chính sách</Link> </li>
                    </ul>
                </nav>
            </div>
=======
  const handleTruckButtonClick = () => {
    setShowInput(!showInput);
  };
>>>>>>> d58fbbf4f030b560f9a6795b8e7cef808aaf1e7c

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
            <li>
              <Link to={"/yeu-thich"}>
                <BsHeart />
              </Link>
            </li>
            <li>
              {" "}
              <Link to={"/gio-hang"}>
                <BsCart3 />
              </Link>
            </li>
            <li>
              {" "}
              <Link to={"/dang-nhap"}>
                <BsPerson />
              </Link>
            </li>
            <li>
              <button onClick={handleTruckButtonClick}>
                <BsTruck />
              </button>
              {showInput && (
                <div className="mvd">
                  <input type="text" placeholder="Enter code..." />
                </div>
              )}
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
              <Link to={"/cua-hang"}>Cửa hàng</Link>{" "}
            </li>
            <li>
              <Link to={"/smartphones"}>Bếp</Link>
              <ul className="header__menu__dropdown">
                <li>
                  <Link to="/smartphones/noichien">Nồi cơm thông minh</Link>
                </li>
                <li>
                  <Link to="/">Nồi chiên không dầu</Link>
                </li>
                <li>
                  <Link to="/">Máy rửa thực phẩm</Link>
                </li>
                <li>
                  <Link to="/">Máy khử trùng đồ dùng bếp</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/laptops">Dọn dẹp</Link>
              <ul className="header__menu__dropdown">
                <li>
                  <Link to="/">Robot hút bụi lau nhà</Link>
                </li>

                <li>
                  <Link to="/">Máy lọc không khí thông minh</Link>
                </li>

                <li>
                  <Link to="/">Bàn chảy đa năng</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/skincare">Tiện ích</Link>
              <ul className="header__menu__dropdown">
                <li>
                  <Link to="/">Máy tạo bọt rửa tay</Link>
                </li>
                <li>
                  <Link to="/">Loa trợ lý ảo thông minh</Link>
                </li>
                <li>
                  <Link to="/">Công tắc thông minh</Link>
                </li>
              </ul>
            </li>

            <li>
              {" "}
              <Link to="/hometek/blog">Blog</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="contact"> Liên hệ</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/hometek/chinh-sach">Chính sách</Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
