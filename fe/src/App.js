import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import CartPage from "./Pages/Users/CartPage/CartPage";
import DetailProductPage from "./Pages/Users/ProductPage/DetailProductPage";
import CategoryPage from "./Pages/Users/ProductPage/CategoryPage";
import SubcategotyPage from "./Pages/Users/ProductPage/SubcategoryPage"
import PaymentSuccess from "./Components/Payment/PaymentSuccess";
import PaymentMoney from "./Components/Payment/PaymentMoney";
import TrackingPage from "./Pages/Users/TrackingPage/TrackingPage"
import PaymentPage from "./Pages/Users/PaymentPage/PaymentPage";
import ConfirmPage from "./Pages/Users/PaymentPage/ConfirmPage";
import WhishlistPage from "./Pages/Users/WhishlistPage/WhishlistPage";

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

import AccountPage from "./Pages/Users/account-page/AccountPage.jsx";
import AccountProfilePage from "./Pages/Users/account-page/account-profile-page/AccountProfilePage.jsx";
import AccountProfile from "./Pages/Users/account-page/account-profile-page/account-profile/AccountProfile.jsx";
import ChangePasswordPage from "./Pages/Users/account-page/account-profile-page/change-password-page/ChangePasswordPage.jsx";
import NewAddressPage from "./Pages/Users/account-page/account-profile-page/new-address-page/NewAddressPage.jsx";
import ManageOrdersPage from "./Pages/Users/account-page/manage-orders-page/ManageOrdersPage.jsx";
import ManageOrdersTable from "./Pages/Users/account-page/manage-orders-page/manage-orders-table/ManageOrdersTable.jsx";
import OrderDetailsPage from "./Pages/Users/account-page/manage-orders-page/order-details-page/OrderDetailsPage.jsx";
import RatingOrderPage from "./Pages/Users/account-page/manage-orders-page/order-details-page/rating-order-page/RatingOrderPage.jsx";
import AssistsPage from "./Pages/Users/account-page/assists-page/AssistsPage.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/:categoryId" element={<CategoryPage/>} />
            <Route path="/:categoryId/:_id" element={<DetailProductPage />} />
            <Route path="/:categoryId/sub/:sub_categoryId" element={<SubcategotyPage/>} />
            <Route
              path="/:categoryId/sub/:sub_categoryId/:_id"
              element={<DetailProductPage />}
            />
            <Route path="/gio-hang" element={<CartPage />} />
            <Route path="/yeu-thich" element={<WhishlistPage/>}/>
            <Route path="/thanh-toan" element={<PaymentPage />} />
            <Route path="/thanh-toan/xac-minh" element={<ConfirmPage />} />
            <Route path="/thanh-toan/thanh-cong" element={<PaymentSuccess />} />
            <Route path="/thanh-toan/xac-minh/thanh-toan-tien" element={<PaymentMoney />}/>
            <Route path="/tra-ma-van-don" element={<TrackingPage/>}/>
    

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
