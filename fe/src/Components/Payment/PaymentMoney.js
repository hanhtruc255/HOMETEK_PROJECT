import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ipayment from "../../Assets/images/payment.png";

const PaymentMoney = () => {
  const [timeLeft, setTimeLeft] = useState(120);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          navigate("/thanh-toan/xac-minh/thanh-cong");
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <div>
      <center className="payment_money">
        <h3>THÔNG TIN THANH TOÁN</h3>
        <img src={ipayment} alt="Payment" />
        <p>
          Mã có hiệu lực trong
          <span> {timeLeft} giây</span>
        </p>
        <Link to="/thanh-toan/thanh-cong">Trở lại</Link>
      </center>
    </div>
  );
};

export default PaymentMoney;
