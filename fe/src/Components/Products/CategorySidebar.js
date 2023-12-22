import React, {useState, useEffect  } from 'react';
import "./CategorySitebar.scss";
import { BsList } from "react-icons/bs";
import axios from 'axios';
import { Link} from 'react-router-dom';

const CategorySidebar = () => {
//   category
  const [showBepSubcategories, setShowBepSubcategories] = useState(false);
  const [showDonDepSubcategories, setShowDonDepSubcategories] = useState(false);
  const [showTienIchSubcategories, setShowTienIchSubcategories] = useState(false);

  // Function to toggle the visibility of subcategories for "Bếp"
  const toggleBepSubcategories = () => {
    setShowBepSubcategories(!showBepSubcategories);
    setShowDonDepSubcategories(false);
    setShowTienIchSubcategories(false);
  };

  //  "Dọn dẹp"
  const toggleDonDepSubcategories = () => {
    setShowDonDepSubcategories(!showDonDepSubcategories);
    setShowBepSubcategories(false);
    setShowTienIchSubcategories(false);
  };

  //"Tiện ích"
  const toggleTienIchSubcategories = () => {
    setShowTienIchSubcategories(!showTienIchSubcategories);
    setShowBepSubcategories(false);
    setShowDonDepSubcategories(false);
  };

///brand

  return (
    <div className='Category__Sidebar'>
      {/* CATEGORY */}
      <ul className='category'>
        <h4>CATEGORY</h4>
        <li>
          <Link to={"/cua-hang"}>Cửa hàng</Link>
        </li>
                
          {/*Bếp */}
        <li>
            <div>
                 <Link to='/smartphones' onClick={toggleBepSubcategories}>Bếp</Link>
            </div>
          {showBepSubcategories && (
            <ul className="dropdown">
              <li><Link to="/smartphones/noichien">Nồi cơm thông minh</Link></li>
              <li><Link to="/">Nồi chiên không dầu</Link></li>
              <li><Link to="/">Máy rửa thực phẩm</Link></li>
              <li><Link to="/">Máy khử trùng đồ dùng bếp</Link></li>
            </ul>
          )}
        </li>

        {/* Dọn dẹp*/}
        <li>
          <div onClick={toggleDonDepSubcategories}>
                <Link to ='/laptops'>Dọn dẹp</Link>
          </div>
          {showDonDepSubcategories && (
            <ul className="dropdown">
              <li><Link to="/">Robot hút bụi lau nhà</Link></li>
              <li><Link to="/">Máy lọc không khí thông minh</Link></li>
              <li><Link to="/">Bàn chảy đa năng</Link></li>
            </ul>
          )}
        </li>

        {/* Tiện ích */}
        <li>
          <div onClick={toggleTienIchSubcategories}>Tiện ích</div>
          {showTienIchSubcategories && (
            <ul className="dropdown">
              <li><Link to="/">Máy tạo bọt rửa tay</Link></li>
              <li><Link to="/">Loa trợ lý ảo thông minh</Link></li>
              <li><Link to="/">Công tắc thông minh</Link></li>
            </ul>
          )}
        </li>
      </ul>

      {/* BRAND */}
      <ul>
        <h4>BRAND</h4>
        <div>
            <label> <input type='checkbox'className='input_soft'/><p> Apple</p>  </label>
            <label> <input type='checkbox'className='input_soft'/><p> Samsung</p> </label>
            <label> <input type='checkbox'className='input_soft'/><p>  OPPO</p> </label>
            <label> <input type='checkbox'className='input_soft'/><p> HP</p> </label>
        </div>
        
      </ul>

      {/* PRICE */}
      <ul>
        <h4>PRICE</h4>
            <div>
                <label> <input type='radio' name='price'className='input_soft'/> <p>$0 - $50</p></label>
                <label> <input type='radio' name='price'className='input_soft'/><p>100-1000</p> </label>
                <label> <input type='radio' name='price'className='input_soft'/> <p>over 1000 </p> </label>
            </div>

        </ul>
      <div> <button>LỌC</button> </div>
    </div>
  );
}

export default CategorySidebar;
