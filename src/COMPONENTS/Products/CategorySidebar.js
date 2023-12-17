import React from 'react'
import "./CategorySitebar.scss"
import { BsList } from "react-icons/bs";
import HomePage from '../../PAGES/USERS/HomePage/HomePage';
import ProductPage from '../../PAGES/USERS/ProductPage/ProductPage';


const CategorySidebar = ({data}) => {
    // Lọc các sub_cagory https://www.youtube.com/watch?v=c3WSziz_u_o&t=3246s//
  return (    
        <div className='Category__Sidebar'>
                    <ul>
                        <li>
                            <button>
                            <BsList className='Icon_cate'/>
                            <h4>Cửa hàng</h4>
                            </button>
                             {/*Sub_Cate  */}
                        </li>

                        <li>
                            <button>
                            <BsList className='Icon_cate'/>
                            <h4>Bếp</h4>
                            </button>
                             {/*Sub_Cate  */}
                        </li>

                        <li>
                            <button>
                                <BsList className='Icon_cate'/>
                                <h4>Dọn dẹp</h4>
                            </button>
                        </li>

                        <li>
                            <button>
                                <BsList className='Icon_cate'/>
                                <h4>Tiện ích</h4>
                            </button>
                        </li>
                    </ul></div>
  )
}

export default CategorySidebar
