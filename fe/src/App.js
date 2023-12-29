import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import CartPage from "./Pages/Users/CartPage/CartPage";
import DetailProductPage from "./Pages/Users/ProductPage/DetailProductPage";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6914a1284c24c7c7062cab78110cfe0c8d6c9600
import CategoryPage from "./Pages/Users/ProductPage/CategoryPage";
import SubcategotyPage from "./Pages/Users/ProductPage/SubcategoryPage"
import PaymentSuccess from "./Components/Payment/PaymentSuccess";
import PaymentMoney from "./Components/Payment/PaymentMoney";
<<<<<<< HEAD
import TrackingPage from "./Pages/Users/TrackingPage/TrackingPage";
=======
// import CatogoryPage from "./Pages/Users/ProductPage/CatogoryPage";
import PaymentSuccess from "./Components/Payment/PaymentSuccess";
import PaymentMoney from "./Components/Payment/PaymentMoney";
import Layout from "./Pages/Users/layout/Layout.jsx";
import Contact from "./Pages/Users/contact/Contact.jsx";
import BlogPage from "./Pages/Users/blog-page/BlogPage.jsx";

>>>>>>> d58fbbf4f030b560f9a6795b8e7cef808aaf1e7c
=======
import TrackingPage from "./Pages/Users/TrackingPage/TrackingPage"
import PaymentPage from "./Pages/Users/PaymentPage/PaymentPage";
import ConfirmPage from "./Pages/Users/PaymentPage/ConfirmPage";
import WhishlistPage from "./Pages/Users/WhishlistPage/WhishlistPage";
>>>>>>> 6914a1284c24c7c7062cab78110cfe0c8d6c9600
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
<<<<<<< HEAD
import PaymentPage from "./Pages/Users/PaymentPage/PaymentPage";
import ConfirmPage from "./Pages/Users/PaymentPage/ConfirmPage";
<<<<<<< HEAD
=======
import HomePage from "./Pages/Users/home-page/HomePage.jsx";
import PageNotFound from "./Pages/Users/page-not-found/PageNotFound.jsx";
import AboutUsPage from "./Pages/Users/about-us/AboutUsPage.jsx";
import LoginPage from "./Pages/Users/login-page/LoginPage";
import SignUpPage from "./Pages/Users/sign-up-page/SignUpPage";
import ForgetPasswordPage from "./Pages/Users/login-page/forget-password-page/ForgetPasswordPage.jsx";
import SendOtpForm from "./Components/form/send-otp-form/SendOtpForm.jsx";
import VertificationOtpForm from "./Components/form/verification-otp-form/VerificationOtpForm.jsx";
import PasswordRecoveryForm from "./Components/form/password-recovery-form/PasswordRecoveryForm.jsx";
>>>>>>> d58fbbf4f030b560f9a6795b8e7cef808aaf1e7c

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
=======
>>>>>>> 6914a1284c24c7c7062cab78110cfe0c8d6c9600
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
         
            {/* <Route path="/cua-hang" element={<ProductPage />} /> */}
            {/* <Route path="/cua-hang/:id" element={<DetailProductPage />} /> */}

            <Route path="/:categoryId" element={<CategoryPage/>} />
            <Route path="/:categoryId/:_id" element={<DetailProductPage />} />
            <Route path="/:categoryId/sub/:sub_categoryId" element={<SubcategotyPage/>} />
=======
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="forget-password" element={<ForgetPasswordPage />}>
              <Route index element={<SendOtpForm />} />
              <Route path="send-otp" element={<SendOtpForm />} />
              <Route
                path="vertify-otp"
                element={
                  <VertificationOtpForm
                    type="forgetPassword"
                    heading="Phục hồi mật khẩu"
                    btnText="Xác minh"
                    smsOTP={"123456"}
                    nextPage={"/forget-password/password-recovery"}
                  />
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
                <Route path="order-details" element={<OrderDetailsPage />} />
                <Route
                  path="order-details/rating-order"
                  element={<RatingOrderPage />}
                />
              </Route>
              <Route path="assits" element={<AssistsPage />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="/cua-hang" element={<ProductPage />} />
            <Route path="/cua-hang/:id" element={<DetailProductPage />} />
            <Route path="/blog-page" element={<BlogPage />} />

            {/* <Route path="/:category" element={<CatogoryPage />} /> */}
            <Route path="/:category/:id" element={<DetailProductPage />} />
            {/* <Route path="/:category/:subcategory" element={<CatogoryPage />} /> */}
>>>>>>> d58fbbf4f030b560f9a6795b8e7cef808aaf1e7c
=======
            <Route path="/:categoryId" element={<CategoryPage/>} />
            <Route path="/:categoryId/:_id" element={<DetailProductPage />} />
            <Route path="/:categoryId/sub/:sub_categoryId" element={<SubcategotyPage/>} />
>>>>>>> 6914a1284c24c7c7062cab78110cfe0c8d6c9600
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
