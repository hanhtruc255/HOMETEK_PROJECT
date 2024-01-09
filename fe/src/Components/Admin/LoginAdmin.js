import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.scss";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "admin123" && password === "123456") {
      setLoggedIn(true);
    } else {
      setError("Đăng nhập không thành công. Vui lòng nhập lại.");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="loginadmin">
      <h2>Đăng nhập</h2>
      <div>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Tên đăng nhập"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Đăng nhập</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LoginAdmin;
