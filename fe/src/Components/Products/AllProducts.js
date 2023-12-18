import React from 'react';
import ProductCard from './ProductCard';
// import AllProductsData from '../../ASSETS/products';
import "./style.scss";

const AllProducts = () => {
 
  return (
    <div>
        <div className='All__Products'>
            <div className='Products'>
                {/* {AllProductsData.map((item) =>  
                            <ProductCard data={item} key={item.id}/>
                        )
                    } */}
            </div>
        </div>

    </div>
    
    
    )}

export default AllProducts