import React from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import HomePage from './Pages/Users/HomePage/HomePage';
import ProductPage from './Pages/Users/ProductPage/ProductPage';
import CartPage from './Pages/Users/CartPage/CartPage';
import DetailProductPage from './Pages/Users/ProductPage/DetailProductPage';
import CatogoryPage from './Pages/Users/ProductPage/CatogoryPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
            <Route path="/" element ={<HomePage/>} />
            <Route path="*" element ={<div><h1>404 NOT FOUND</h1></div>} />
            <Route path='/cua-hang' element ={<ProductPage/>}/>
            <Route path='/cua-hang/:id' element={<DetailProductPage/>}/>

            <Route path='/:category' element={<CatogoryPage/>}/>
            {/* <Route path='/cua-hang/don-dep' element={<CatogoryPage/>}/>
            <Route path='/cua-hang/tien-ich' element={<CatogoryPage/>}/> */}
            <Route path="/gio-hang" element={<CartPage/>}/>
        </Routes> 
   </BrowserRouter>
    </div>

  )
}

export default App