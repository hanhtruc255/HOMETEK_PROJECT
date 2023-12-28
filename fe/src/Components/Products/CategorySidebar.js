import React, { useState, useEffect } from 'react';
import "./styleproduct.scss";
import { BsList } from "react-icons/bs";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const CategorySidebar = () => {
  //category
  const [showBepSubcategories, setShowBepSubcategories] = useState(false);
  const [showDonDepSubcategories, setShowDonDepSubcategories] = useState(false);
  const [showTienIchSubcategories, setShowTienIchSubcategories] = useState(false);

  const toggleBepSubcategories = () => {
    setShowBepSubcategories(!showBepSubcategories);
    setShowDonDepSubcategories(false); 
    setShowTienIchSubcategories(false);
  };

  const toggleDonDepSubcategories = () => {
    setShowBepSubcategories(false)
    setShowDonDepSubcategories(!showDonDepSubcategories);
    setShowTienIchSubcategories(false);
  };

  const toggleTienIchSubcategories = () => {
    setShowBepSubcategories(false)
    setShowDonDepSubcategories(false);
    setShowTienIchSubcategories(!showTienIchSubcategories);
  };

  // brand
  const {categoryId} = useParams()
  console.log (">>", categoryId)

  const [product, setProduct] = useState(null);
  const [uniqueBrands, setUniqueBrands] = useState(new Set());
  const [selectedBrands, setSelectedBrands] = useState(new Set());

  const handleBrandChange = (brand) => {
    const updatedBrands = new Set(selectedBrands);
    if (updatedBrands.has(brand)) {
      updatedBrands.delete(brand);
    } else {
      updatedBrands.add(brand);
    }
    setSelectedBrands(updatedBrands);
  };
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = (selectedBrands) => {
    if (product) {
      const filtered = product.filter(item => selectedBrands.has(item.brand_name));
      setFilteredProducts(filtered);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/categories/${categoryId}`);
        console.log("truc", response)
        if (response.data && response.data && Array.isArray(response.data)) {
          setProduct(response.data);
          const brands = response.data.map(item => item.brand_name);
          setUniqueBrands(new Set(brands));
          
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchData();
  }, [categoryId]);



  return (
    <div className='Category__Sidebar'>
      {/* CATEGORY */}
      <div className='category'>
        <b>CATEGORY</b>  <br/>
        <Link to={"/cua-hang"}>Cửa hàng</Link>
        <div>
          <div>
            <Link to='/01' onClick={toggleBepSubcategories}>Bếp</Link>
          </div>
          {showBepSubcategories && (
            <div className="dropdown">
              <Link to="/01/sub/B1">Nồi chiên không dầu</Link> <br />
              <Link to="/01/sub/B2">Nồi cơm thông minh</Link> <br />
              <Link to="/01/sub/B3">Máy rửa thực phẩm</Link> <br />
              <Link to="/01/sub/B4">Máy khử trùng đồ dùng bếp</Link> <br />
            </div>
          )}
        </div>

        <div>
          <div onClick={toggleDonDepSubcategories}>
            <Link to='/02'>Dọn dẹp</Link>
          </div>
          {showDonDepSubcategories && (
            <div className="dropdown">
              <Link to="/02/sub/D1">Bàn chảy đa năng</Link> <br />
              <Link to="/02/sub/D2">Máy lọc không khí thông minh</Link> <br />
              <Link to="/02/sub/D3">Robot hút bụi lau nhà</Link> <br />
              
             
            </div>
          )}
        </div>

        <div>
          <div onClick={toggleTienIchSubcategories}><Link to='/03'>Tiện ích</Link></div>
          {showTienIchSubcategories && (
            <div className="dropdown">
              <Link to="/03/sub/T1">Máy tạo bọt rửa tay</Link> <br />
              <Link to="/03/sub/T2">Loa trợ lý ảo thông minh</Link> <br />
              <Link to="/03/sub/T3">Công tắc thông minh</Link> <br />
            </div>
          )}
        </div>
      </div>
      <hr></hr>
      {/* BRAND */}
      <div className='brandandprice'>
        <b>BRAND</b>  <br/>
        {uniqueBrands.size > 0 && Array.from(uniqueBrands).map((brand, index) => (
          <div key={index} className='b1'>
            <label>
              <input
                type='checkbox'
                className='input_soft'
                checked={selectedBrands.has(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <p> {brand} </p>
            </label>
          </div>
        ))}

      </div>
      <hr></hr>
      {/* PRICE */}
      <div className='brandandprice'>
        <b>PRICE</b> <br/>
        <div className='b1'>
          <label> <input type='radio' name='price' className='input_soft' /> <p>0đ - 2.000.000đ</p></label>
          <label> <input type='radio' name='price' className='input_soft' /><p>2.000.000đ - 5.000.000đ</p> </label>
          <label> <input type='radio' name='price' className='input_soft' /> <p> {'>'}= 5.000.000đ </p> </label>
        </div>
      </div>
      <div> <button onClick={() => filterProducts(selectedBrands)}>LỌC</button> </div>
    </div>
  );
}

export default CategorySidebar;
