import React, {useState} from 'react';
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import "./ProductCard.scss"
import { Link } from 'react-router-dom';


const ProductCard = ({data}) => {
    const [show, setshow] = useState (false);
    
  return (
    <div className="item" >
            <div>
                <Link to={`/product/${data.id}`} >
                    <div>
                        <img src={data.image} alt="hinh"/>
                    </div>
                    <div>
                        <h4><span>{data.name}</span></h4>
                    </div >
                    <div><b><span>{data.price}</span></b></div>
                </Link>
            </div>
         
            <div className="item__buy">
                <div >
                    <Link to="/gio-hang">Mua ngay</Link>
                </div>

                <div className="item__buy__icon">
              

                    <ul>
                        <li>
                            <button><BsHeart />
                            </button>
                            </li>
                        <li> 
                            
                            <button 
                        onClick={() => {
                            setshow (false)
                            alert('Thêm vào giỏ hàng thành công')
                        }}
                            ><BsCart3 />
                            </button> 
                            </li>
                    </ul>
                </div>
            </div>
            
        </div>
  )
}

export default ProductCard