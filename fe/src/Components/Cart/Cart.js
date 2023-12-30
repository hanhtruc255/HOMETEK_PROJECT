import React, { useEffect} from 'react';
import './Cart.scss';
import { BsTicketPerforatedFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { useState } from 'react';
import { BsTrash, BsHeart } from "react-icons/bs";

const Cart = ({ updateCartQuantity }) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [selectedItems, setSelectedItems] = useState([]); 
  const [cartItems, setCartItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();
  const [whishlistItems, setWhishlistItems] = useState([]);
  const [wishlistChanged, setWishlistChanged] = useState(false);

  const getCartItemsData = () => {
    return cartItems;
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);
     
    const removeItem = (itemId) => {
      const isConfirmed = window.confirm('Bạn có muốn xóa sản phẩm không?');
      if (isConfirmed) {
        const updatedCart = cartItems.filter(item => item._id !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
      updateCartQuantity();
    };
    
    const decrementQuantity = (itemId) => {
      const updatedCart = cartItems.map(item =>
        item._id === itemId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      updateCartQuantity();
    };
    
    const incrementQuantity = (itemId) => {
      const updatedCart = cartItems.map(item =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      updateCartQuantity();
    };
    useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
      const aggregatedCartItems = storedCartItems.reduce((accumulator, currentItem) => {
        const existingItem = accumulator.find(item => item._id === currentItem._id);
  
        if (existingItem) {
          existingItem.quantity += parseInt(currentItem.quantity, 10) || 1;
        } else {
          accumulator.push({
            ...currentItem,
            quantity: parseInt(currentItem.quantity, 10) || 1,
          });
        }
        return accumulator;
      }, []);
  
      setCartItems(aggregatedCartItems);
    }, []);
  
    const toggleItemSelection = (itemId) => {
      setSelectedItems((prevSelectedItems) => {
        const isSelected = prevSelectedItems.some((item) => item._id === itemId);
    
        if (isSelected) {
          return prevSelectedItems.filter((item) => item._id !== itemId);
        } else {
          const selectedItem = cartItems.find((item) => item._id === itemId);
          return [...prevSelectedItems, selectedItem];
        }
      });
    };
    
    const toggleSelectAll = () => {
      setSelectAll((prevSelectAll) => !prevSelectAll);
      setSelectedItems((prevSelectedItems) =>
        !selectAll ? cartItems.filter((item) => !item.selected) : []
      );
    };
    //add whishlist
     useEffect(() => {
    setWhishlistItems(JSON.parse(localStorage.getItem('Whishlist')) || []);
    setWishlistChanged(false);
  }, [wishlistChanged]); 

  const isItemInWishlist = (itemId) => {
    return whishlistItems.some((wishlistItem) => wishlistItem._id === itemId);
  };

  const addToWhishlist = (item) => {
    const isDuplicate = isItemInWishlist(item._id);
    if (isDuplicate) {
      const updatedWhishlist = whishlistItems.filter((wishlistItem) => wishlistItem._id !== item._id);
      setWhishlistItems(updatedWhishlist);
      localStorage.setItem('Whishlist', JSON.stringify(updatedWhishlist));
      setWishlistChanged(true);
      alert('Đã xóa khỏi sản phẩm yêu thích.');
    } else {
      const updatedWhishlist = [...whishlistItems, item];
      setWhishlistItems(updatedWhishlist);
      localStorage.setItem('Whishlist', JSON.stringify(updatedWhishlist));
      setWishlistChanged(true);
      alert('Đã thêm vào sản phẩm yêu thích.');
    }
  };

      ///format price
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
      ///total money
      const calculateTotal = () => {
        const total = selectedItems.reduce((accumulator, item) => {
          return accumulator + item.price * item.quantity;
        }, 0);
        return formatPrice(total);
      };

  return (
    <div className='cart'>
        <div className='Frame_cart'>
            <div className='Cart_1'>
                <table>
                  <thead>
                    <tr>
                      <th className='th1'>Tên sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>

                  <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id}>
                      <td className='spec'>
                      <div className='check1'>
                      <input
                          type='checkbox'
                          id={`checkbox-${item._id}`}
                          checked={item.selected}
                          onChange={() => toggleItemSelection(item._id)}/>
                          <img src={item.image} />
                         
                        </div>

                        <div>
                          <b>{item.name}</b> <br/>
                          <BsTrash className='icon_trash' onClick={() => removeItem(item._id)}/>
                          <BsHeart className='icon_heart' style={{ color: isItemInWishlist(item._id) ? 'rgb(170, 4, 4)' : 'inherit' }} onClick={() => addToWhishlist(item)}/>
                        </div>
                        
                      </td>
                      <td><b>{formatPrice(item.price)}đ</b>
                      </td>
                      <td>
                        <div className='qty'>
                          <button onClick={() => decrementQuantity(item._id)}>-</button>
                          <div><input type='text' value={Math.max(1, parseInt(item.quantity) || 1)} readOnly /></div>
                          <button  onClick={() => incrementQuantity(item._id)}>+</button>
                        </div>
                          
                      </td>
                      <td><b>{formatPrice(item.price*item.quantity)}đ</b></td>
                    </tr>
                  ))}
                  </tbody>
              </table>
           
             </div>
        </div>
       
        <div className='voucher'>
          <BsTicketPerforatedFill className='icon_voucher'/> <p>HomeTek Voucher</p>
          <button>Chọn Voucher</button>
        </div>

        <div className='buy'>
          <div className='buy_child'>
              <input type='checkbox' onChange={toggleSelectAll} checked={selectAll}/>
              <p> Chọn tất cả</p>
          </div>
          <div className='buy_child'> 
              <p>Tổng thanh toán</p>
              <div> {calculateTotal()}</div>
          </div>
          
          <Link to={{
    pathname: '/thanh-toan',
    search: `?selectedItems=${encodeURIComponent(JSON.stringify(selectedItems))}`,
  }}onClick={() => navigate('/thanh-toan')}>Đặt hàng</Link>
        </div>
    </div>
  )
}


export default Cart ;