import React from 'react';
import "./ListProduct.scss"
import axios from "axios";
import { Link } from 'react-router-dom';
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";


class ListProducts extends React.Component{
    state = {ListProducts:[]}
    
    async componentDidMount(){
        let res = await axios.get('https://dummyjson.com/products');
        // console.log (">>>", res)
        this.setState({
            ListProducts: res && res.data.products? res.data.products
            : []})
    }
    render(){
        let {ListProducts} = this.state;
        return (
                <div>
                    <div className="item" >
                    {ListProducts && ListProducts.length > 0 &&
                        ListProducts.map((item, index) => {
                            return(
                                <div className='child' key={item.id}>
                                    <Link to={`/cua-hang/${item.id}`}>
                                        <div>
                                            <img src={'https://i.ibb.co/dbnMxGQ/img1.jpg'} alt="hinh"/>
                                        </div>
                                        <div className='child_inf'>
                                            <h4>{item.name}</h4>
                                            <b>{item.price}</b>
                                        </div >
                                        
                                    </Link>

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
                                                    
                                                    <button><BsCart3 />
                                                    </button> 
                                                    </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>    
                            )})}
                    </div> 
                </div>
                )}}
export default ListProducts;


// onClick={() => {
//     setshow (false)
//     alert('Thêm vào giỏ hàng thành công')
// }}