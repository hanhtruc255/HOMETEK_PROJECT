import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Users/HomePage/HomePage';
import ProductPage from './Pages/Users/ProductPage/ProductPage';

// import Whishlist from './PAGES/USERS/whishlist'
// import ProductPage from './PAGES/USERS/ProductPage/ProductPage'
// import ProductDetailPage from "./PAGES/USERS/ProductDetailPage/ProductDetailPage"
// import Cart from './PAGES/USERS/Cart/Cart'
// import CategoryPage from './PAGES/USERS/ProductPage/CategoryPage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
            <Route path="/" element ={<HomePage/>} />
            <Route path="*" element ={<div><h1>404 NOT FOUND</h1></div>} />
            {/* <Route path="/yeu-thich" element={<Whishlist/>}/>
            <Route path="/gio-hang" element={<Cart/>}/>
            <Route path="product/:prodid"
              element={<ProductDetailPage/>}/>  */}

            <Route path='/cua-hang' element ={<ProductPage/>}/>
            {/* <Route path='/bep' element ={<CategoryPage caterogy="Bếp"/>}/>
            <Route path='/don-dep' element ={<CategoryPage caterogy="Dọn dẹp"/>}/>
            <Route path='/tien-ich' element ={<CategoryPage caterogy="Tiện ích"/>}/> */}
            
        </Routes> 
   </BrowserRouter>
    </div>

  )
}

export default App