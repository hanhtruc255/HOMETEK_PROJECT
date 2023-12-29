import React from "react";
import { createContext, useState, useEffect } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
// import Footer from "../../components/footer/Footer";
import Footer from "../../../Components/footer/Footer";

export const AppContext = createContext();

const initalState = {
  signupStatus: "",
  notificationModalActive: false,
  otpFormModalActive: false,
  signupStatusModalVisible: false,
};

const Layout = () => {
  const [globalState, setGlobalState] = useState(initalState);
  const enableOtpFormModalActive = () => {
    setGlobalState({ ...globalState, otpFormModalActive: true });
  };

  const disableOtpFormModalActive = () => {
    setGlobalState({ ...globalState, otpFormModalActive: false });
  };

  const setSignupStatus = (status) => {
    setGlobalState({
      ...globalState,
      signupStatus: status,
    });
  };

  const enableSignupStatusModal = () => {
    setGlobalState({
      ...globalState,
      signupStatusModalVisible: true,
    });
  };

  const disableSignupStatusModal = () => {
    setGlobalState({
      ...globalState,
      signupStatusModalVisible: false,
    });
  };

  useEffect(() => {
    console.log("globalState:", globalState);
  }, [globalState]);
  return (
    <AppContext.Provider
      value={{
        globalState,
        setGlobalState,
        enableOtpFormModalActive,
        disableOtpFormModalActive,
        enableSignupStatusModal,
        disableSignupStatusModal,
        setSignupStatus,
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </AppContext.Provider>
  );
};

export default Layout;
