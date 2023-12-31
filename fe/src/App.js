import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductPage from "./Pages/Users/ProductPage/ProductPage.js";
import CartPage from "./Pages/Users/CartPage/CartPage";
import DetailProductPage from "./Pages/Users/ProductPage/DetailProductPage";
import CatogoryPage from "./Pages/Users/ProductPage/CategoryPage.js";
import PaymentSuccess from "./Components/Payment/PaymentSuccess";
import PaymentMoney from "./Components/Payment/PaymentMoney";
import Layout from "./Pages/Users/layout/Layout.jsx";
import Contact from "./Pages/Users/contact/Contact.jsx";
import BlogPage from "./Pages/Users/blog-page/BlogPage.jsx";
import BlogDetailPage from "./Pages/Users/blog-page/BlogDetailPage.jsx"

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
import LoginPage from "./Pages/Users/login-page/LoginPage";
import SignUpPage from "./Pages/Users/sign-up-page/SignUpPage";
import ForgetPasswordPage from "./Pages/Users/login-page/forget-password-page/ForgetPasswordPage.jsx";
import SendOtpForm from "./Components/form/send-otp-form/SendOtpForm.jsx";
import VerificationOtpForm from "./Components/form/verification-otp-form/VerificationOtpForm.jsx";
import PasswordRecoveryForm from "./Components/form/password-recovery-form/PasswordRecoveryForm.jsx";

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
import ForgetPassOtpForm from "./Components/form/forget-password-otp-form/ForgetPassOtpForm.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="forget-password" element={<ForgetPasswordPage />}>
              <Route index element={<SendOtpForm />} />
              <Route path="send-otp" element={<SendOtpForm />} />
              <Route
                path="verify-otp"
                element={
                  <ForgetPassOtpForm heading={"Nhập OTP"} btnText="Xác minh" />
                }
              />
              <Route
                path="password-recovery"
                element={<PasswordRecoveryForm />}
              />
              {/* <Route path='send-otp' element{<SendOtpForm />} /> */}
            </Route>
            <Route path="account" element={<AccountPage />}>
              <Route index element={<AccountProfilePage />} />
              <Route path="account-profile" element={<AccountProfilePage />}>
                <Route index element={<AccountProfile />} />
                <Route
                  path="change-password"
                  element={<ChangePasswordPage />}
                />
                <Route path="new-address" element={<NewAddressPage />} />
              </Route>

              <Route path="orders-management" element={<ManageOrdersPage />}>
                <Route index element={<ManageOrdersTable />} />
                <Route path="list-orders" element={<ManageOrdersTable />} />
                <Route
                  path="order-details/:id"
                  element={<OrderDetailsPage />}
                />
                <Route
                  path="order-details/:id/rating-order"
                  element={<RatingOrderPage />}
                />
              </Route>
              <Route path="assist" element={<AssistsPage />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="/cua-hang" element={<ProductPage />} />
            <Route path="/cua-hang/:id" element={<DetailProductPage />} />
            {/* <Route path="/blog-page" element={<BlogPage />} /> */}
            <Route path="/blog-page" element={<BlogPage />} />
            <Route path="/blog-page/:blogId" element={<BlogDetailPage />} />

            {/* <Route path="/:category" element={<CatogoryPage />} /> */}
            <Route path="/:category/:id" element={<DetailProductPage />} />
            {/* <Route path="/:category/:subcategory" element={<CatogoryPage />} /> */}
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
