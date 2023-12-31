const Logout = () => {
  window.location.assign("/");
  window.localStorage.removeItem("isLoggedIn");
};

export default Logout;
