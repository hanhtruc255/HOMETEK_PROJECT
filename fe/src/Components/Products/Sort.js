import React from 'react'
import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";
import './styleproduct.scss'

const Sort = ({ onSortChange }) => {
    const handleSortClick = (criteria) => {
        onSortChange(criteria);
      };
  return (
        <div>
            
            <div className='Frame_filter'>
                <div className='Frame__filter__lefft'>
                    <h5>Sắp xếp theo: </h5>
                </div>

                <div className='Frame__filter__right'>
                    <button onClick={() => handleSortClick("price-asc")}>
                        <BsSortDown className='Icon'/>
                        <p>Giá Thấp - Cao</p>
                    </button>

                    <button  onClick={() => handleSortClick("price-desc")}>
                        <BsSortUpAlt className='Icon'/>
                        <p>Giá Cao - Thấp</p>
                    </button>

                    <button  onClick={() => handleSortClick("oldest")}>
                        <p>Cũ nhất</p>
                    </button>

                    <button onClick={() => handleSortClick("newest")}>
                        <p>Mới nhất</p>
                    </button>
                </div>
            </div>
        </div>

  )
}

export default Sort