import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductPage from "./Pages/Users/ProductPage/ProductPage";
import CartPage from "./Pages/Users/CartPage/CartPage";
import DetailProductPage from "./Pages/Users/ProductPage/DetailProductPage";
import CatogoryPage from "./Pages/Users/ProductPage/CatogoryPage";
import PaymentSuccess from "./Components/Payment/PaymentSuccess";
import PaymentMoney from "./Components/Payment/PaymentMoney";
import Layout from "./Pages/Users/layout/Layout.jsx";

// admin
import DashBoard from "./Pages/Admin/Dashboard";
import Product from "./Pages/Admin/Products/Product";
import Customer from "./Pages/Admin/Customers/Customer";
import ProductCreate from "./Pages/Admin/Products/ProductCreate";
import Blog from "./Pages/Admin/Blog/Blog";
import BlogCreate from "./Pages/Admin/Blog/BlogCreate";
import BlogUpdate from "./Pages/Admin/Blog/BlogUpdate";
import Rate from "./Pages/Admin/Rating/Rate";
import RateUpdate from "./Pages/Admin/Rating/RateUpdate";
import Order from "./Pages/Admin/Order/Order";
import OrderUpdate from "./Pages/Admin/Order/OrderUpdate";
import Voucher from "./Pages/Admin/Voucher/Voucher";
import VoucherCreate from "./Pages/Admin/Voucher/VoucherCreate";
import VoucherUpdate from "./Pages/Admin/Voucher/VoucherUpdate";
import PaymentPage from "./Pages/Users/PaymentPage/PaymentPage";
import ConfirmPage from "./Pages/Users/PaymentPage/ConfirmPage";
import HomePage from "./Pages/Users/home-page/HomePage.jsx";
import PageNotFound from "./Pages/Users/page-not-found/PageNotFound.jsx";
import AboutUsPage from "./Pages/Users/about-us/AboutUsPage.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="/cua-hang" element={<ProductPage />} />
            <Route path="/cua-hang/:id" element={<DetailProductPage />} />

            <Route path="/:category" element={<CatogoryPage />} />
            <Route path="/:category/:id" element={<DetailProductPage />} />
            <Route path="/:category/:subcategory" element={<CatogoryPage />} />
            <Route
              path="/:category/:subcategory/:id"
              element={<DetailProductPage />}
            />
            <Route path="/gio-hang" element={<CartPage />} />
            <Route path="/thanh-toan" element={<PaymentPage />} />
            <Route path="/thanh-toan/xac-minh" element={<ConfirmPage />} />
            <Route path="/thanh-toan/thanh-cong" element={<PaymentSuccess />} />
            <Route
              path="/thanh-toan/xac-minh/thanh-toan-tien"
              element={<PaymentMoney />}
            />
          </Route>

          <Route path="/admin" element={<DashBoard />}>
            <Route path="san-pham" element={<Product />}></Route>
            <Route path="san-pham/them" element={<ProductCreate />}></Route>

            <Route path="khach-hang" element={<Customer />}></Route>

            <Route path="blog" element={<Blog />}></Route>
            <Route path="blog/them" element={<BlogCreate />}></Route>
            <Route path="blog/cap-nhat" element={<BlogUpdate />}></Route>
            <Route path="danh-gia" element={<Rate />}></Route>
            <Route path="danh-gia/cap-nhat" element={<RateUpdate />}></Route>

            <Route path="don-hang" element={<Order />}></Route>
            <Route path="don-hang/cap-nhat" element={<OrderUpdate />}></Route>

            <Route path="khuyen-mai" element={<Voucher />}></Route>
            <Route path="khuyen-mai/them" element={<VoucherCreate />}></Route>
            <Route
              path="khuyen-mai/cap-nhat"
              element={<VoucherUpdate />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;