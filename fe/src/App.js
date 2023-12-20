import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Users/HomePage/HomePage';
import ProductPage from './Pages/Users/ProductPage/ProductPage';
import CategoryPage from './Pages/Users/ProductPage/CatogoryPage';
import ProductDetailPage from './Pages/Users/ProductPage/ProductDetailPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
            <Route path="/" element ={<HomePage/>} />
            <Route path="*" element ={<div><h1>404 NOT FOUND</h1></div>} />
            {/* <Route path="/yeu-thich" element={<Whishlist/>}/>
            <Route path="/gio-hang" element={<Cart/>}/> */}
            <Route path='/cua-hang' element ={<ProductPage/>}/>
                  <Route path="/cua-hang/:id" element={<ProductDetailPage/>}/>

            <Route path='/cua-hang/:cateid' element ={<CategoryPage/>}></Route> 
           
            
        </Routes> 
   </BrowserRouter>
    </div>

  )
}

export default App