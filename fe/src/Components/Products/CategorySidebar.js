import React, {useState, useEffect  } from 'react';
import "./styleproduct.scss";
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
      <div className='category'>
        <h4>CATEGORY</h4>
        <Link to={"/cua-hang"}>Cửa hàng</Link>
          {/*Bếp */}
        <div>
            <div>
                 <Link to='/smartphones' onClick={toggleBepSubcategories}>Bếp</Link>
            </div>
          {showBepSubcategories && (
            <div className="dropdown">
              <Link to="/smartphones/noichien">Nồi cơm thông minh</Link> <br/>
              <Link to="/">Nồi chiên không dầu</Link> <br/>
              <Link to="/">Máy rửa thực phẩm</Link>  <br/>
              <Link to="/">Máy khử trùng đồ dùng bếp</Link> <br/>
            </div>
          )}
        </div>

        {/* Dọn dẹp*/}
        <div>
          <div onClick={toggleDonDepSubcategories}>
                <Link to ='/laptops'>Dọn dẹp</Link>
          </div>
          {showDonDepSubcategories && (
            <div className="dropdown">
              <Link to="/">Robot hút bụi lau nhà</Link> <br/>
              <Link to="/">Máy lọc không khí thông minh</Link> <br/>
              <Link to="/">Bàn chảy đa năng</Link> <br/>
            </div>
          )}
        </div>

        {/* Tiện ích */}
        <div>
          <div onClick={toggleTienIchSubcategories}><Link to ='/skincare'>Tiện ích</Link></div>
          {showTienIchSubcategories && (
            <div className="dropdown">
              <Link to="/">Máy tạo bọt rửa tay</Link> <br/>
              <Link to="/">Loa trợ lý ảo thông minh</Link> <br/>
              <Link to="/">Công tắc thông minh</Link> <br/>
            </div>
          )}
        </div>
      </div>
        <hr></hr>
      {/* BRAND */}
      <div className='brandandprice'>
        <h4>BRAND</h4>
        <div className='b1'>
            <label> <input type='checkbox'className='input_soft'/><p> Apple</p>  </label> 
            <label> <input type='checkbox'className='input_soft'/><p> Samsung</p> </label>
            <label> <input type='checkbox'className='input_soft'/><p>  OPPO</p> </label>
            <label> <input type='checkbox'className='input_soft'/><p> HP</p> </label>
        </div>
        
      </div>
          <hr></hr>
      {/* PRICE */}
      <div className='brandandprice'>
        <h4>PRICE</h4>
            <div className='b1'>
                <label> <input type='radio' name='price'className='input_soft'/> <p>$0 - $50</p></label>
                <label> <input type='radio' name='price'className='input_soft'/><p>100-1000</p> </label>
                <label> <input type='radio' name='price'className='input_soft'/> <p>over 1000 </p> </label>
            </div>

        </div>
      <div> <button>LỌC</button> </div>
    </div>
  );
}

export default CategorySidebar;
