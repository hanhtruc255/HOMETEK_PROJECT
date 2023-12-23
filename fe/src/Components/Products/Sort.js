import React from 'react'
import { BsSortDown } from "react-icons/bs";
import { BsSortUpAlt } from "react-icons/bs";
import './styleproduct.scss'

const Sort = () => {
  return (
        <div>
            
            <div className='Frame_filter'>
                <div className='Frame__filter__lefft'>
                    <h5>Sắp xếp theo: </h5>
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
        </div>

  )
}

export default Sort