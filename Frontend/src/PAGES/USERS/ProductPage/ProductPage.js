import React from 'react'
// import { useParams } from 'react-router-dom'

import CategorySidebar from '../../../COMPONENTS/Products/CategorySidebar';
import './ProductPage.scss';
import AllProducts from '../../../COMPONENTS/Products/AllProducts';
import Navbar from '../../../COMPONENTS/Navbar/Navbar';
import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";

const ProductPage = () => {
  //show all products
  return (
    <div>
        <Navbar/>
        <div className='Frame__filter'>
              <div className='Frame__filter__lefft'>
                <h3>Sắp xếp theo: </h3>
              </div>

              <div className='Frame__filter__right'>
                <button>
                    <BsSortDown className='Icon'/>
                    <p>Giá Thấp - Cao</p>
                </button>

                <button>
                    <BsSortUpAlt className='Icon'/>
                    <p>Giá Cao - Thấp</p>
                </button>

                <button>
                    <p>Cũ nhất</p>
                </button>

                <button>
                      <p>Mới nhất</p>
                </button>
              </div>
          </div>

        <div  className="Frame__Product_Page">
          <CategorySidebar className="s1"/>
          <AllProducts/>
        </div>
        
       
    </div>
  )
                }

export default ProductPage