import React from 'react'
import "./CategorySitebar.scss"
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';


const CategorySidebar = ({data}) => {
    // Lọc các sub_cagory https://www.youtube.com/watch?v=c3WSziz_u_o&t=3246s//
  return (    
        <div className='Category__Sidebar'>
                    <ul> <h4>CATEGORY</h4>
                        <li>
                            <button>
                            <Link to='/cua-hang'>Cửa hàng</Link>
                            </button>
                             {/*Sub_Cate  */}
                        </li>

                        <li>
                            <button>

                            <Link to='/smartphones'>Bếp</Link>
                            </button>
                             {/*Sub_Cate  */}
                        </li>

                        <li>
                            <button>

                                <Link to='/laptops'>Dọn dẹp</Link>
                            </button>
                        </li>

                        <li>
                            <button>
                                <h4>Tiện ích</h4>
                            </button>
                        </li>
                    </ul>

                    <ul> <h4>PRICE</h4>
                        <li></li>
                    </ul>
                    
                    
                    
                    
                    </div>
  )
}

export default CategorySidebar
