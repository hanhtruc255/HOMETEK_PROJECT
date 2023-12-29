import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { BsFillHeartFill } from "react-icons/bs";
import './Whishlist.scss';

const Whishlist = (updatedWhishlist) => {
    const [whishlistItems, setWhishlistItems] = useState(() => {
        const storedWhishlistItems = JSON.parse(localStorage.getItem('Whishlist')) || [];
        return storedWhishlistItems;
      });
    
      const removeItem = (itemId) => {
        const isConfirmed = window.confirm('Bạn có muốn xóa sản phẩm không?');
        if (isConfirmed) {
          const updatedWhishlist = whishlistItems.filter((item) => item._id !== itemId);
          setWhishlistItems(updatedWhishlist);
          localStorage.setItem('Whishlist', JSON.stringify(updatedWhishlist));
        }
      };
  return (
    <div>
        <p className='title'>SẢN PHẨM YÊU THÍCH</p>

        <div className='item'>
            {whishlistItems.map((item) =>(
                <div key={item._id} className='child'>
                <Link to={`/${item.categoryId}/${item._id}`}>
                  <div>
                    <img src={'https://i.ibb.co/dbnMxGQ/img1.jpg'} alt="hinh"/>
                  </div>
                  <div className='child_inf'>
                    <h4>{item.name}</h4>
                    <b>{item.price}đ</b>
                  </div>
                </Link>
      
                <div className="item__buy">
                  <div>
                    <Link to="/gio-hang">Mua ngay</Link>
                  </div>
      
                  <div className="item__buy__icon">
                    <button className='icon_heart' onClick={() => removeItem(item._id)}><BsFillHeartFill /></button>
                    <button ><BsCart3 /></button>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Whishlist