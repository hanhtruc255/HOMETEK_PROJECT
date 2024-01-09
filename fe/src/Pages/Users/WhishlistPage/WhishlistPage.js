import React, {useState} from 'react';
import Navbar from '../../../Components/Navbar/Navbar'
import Whishlist from '../../../Components/Whishlist/Whishlist';

const WhishlistPage = () => {
    const [whishlistItems, setWhishlistItems] = useState([]);
    const addToWhishlist = (item) => {
        alert('Đã thêm vào sản phẩm yêu thích thành công');
        const existingWhishlist = JSON.parse(localStorage.getItem('Whishlist')) || [];
        const newWhishlist = [...existingWhishlist, item];
        localStorage.setItem('Whishlist', JSON.stringify(newWhishlist));
        setWhishlistItems(newWhishlist);
      };
  return (
    <div>
        <Navbar/>
        <Whishlist addToWhishlist={addToWhishlist} />
    </div>
  )
}

export default WhishlistPage