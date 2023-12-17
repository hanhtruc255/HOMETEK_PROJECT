import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import HomePage from './pages/home-page/HomePage';
import SignUpPage from './pages/sign-up-page/SignUpPage';
import LoginPage from './pages/login-page/LoginPage';
import PageNotFound from './pages/page-not-found/PageNotFound';
import AppBar from '../src/components/app-bar/AppBar';
import PasswordRecoveryPage from './pages/login-page/password-recovery-page/PasswordRecoveryPage';
import SendOtpForm from './components/form/send-otp-form/SendOtpForm';
import ChangePasswordForm from './components/form/change-password-form/ChangePasswordForm';
import Layout from './pages/layout/Layout';
import AccountPage from './pages/account-page/AccountPage';
import NewAddressPage from './pages/account-page/account-profile-page/new-address-page/NewAddressPage';
export const AppContext = createContext();
function App() {
  const [notificationModalActive, setNotificationModalActive] = useState(false);
  const [otpFormModalActive, setOtpFormModalActive] = useState(false);

  const toggleOtpFormModalActive = () => {
    setOtpFormModalActive(!otpFormModalActive);
  };

  const toggleNotificationModalActive = () => {
    setNotificationModalActive(!notificationModalActive);
  };
  return (
    <>
      <BrowserRouter>
        <AppContext.Provider
          value={{
            notificationModalActive,
            toggleNotificationModalActive,
            otpFormModalActive,
            toggleOtpFormModalActive,
          }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="login" element={<AccountPage />} />
              <Route
                path="change-password"
                element={<PasswordRecoveryPage />}
              />
              <Route path="new-address" element={<NewAddressPage />} />
              {/* <Route path="account">
                <Route index element={<AccountPage />} />
                <Route path="new-address" element={<NewAddressPage />} />
              </Route> */}
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
