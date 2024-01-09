import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Payment.scss';

const generateRandomCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const Confirm = ({ selectedPaymentMethod }) => {
  const initialCode = generateRandomCode();
  const [countdown, setCountdown] = useState(30);
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState(initialCode);
  const [isCodeValid, setIsCodeValid] = useState(false);

  useEffect(() => {
    let timer;

    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setCountdown(30);
      setGeneratedCode(generateRandomCode());
    }

    return () => clearTimeout(timer);
  }, [countdown]);

  const resetTimer = () => {
    setCountdown(30);
    setGeneratedCode(generateRandomCode());
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value) && value.length <= 1) {
      const newCode = verificationCode.split('');
      newCode[index] = value;
      setVerificationCode(newCode.join(''));

      if (newCode.join('').length === 6) {
        setIsCodeValid(newCode.join('') === generatedCode);
      } else {
        setIsCodeValid(false);
      }
    }
  };

  return (
    <div className='confirm'>
      <center>
        <h3>XÁC MINH THÔNG TIN</h3>
      </center>
      <h5>Xác thực</h5>
      <p>Nhập 6 số đã gửi về số điện thoại của bạn.</p>
      <div className='so'>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <input
            key={index}
            className='specint'
            type='text'
            maxLength='1'
            value={verificationCode[index] || ''}
            onChange={(e) => handleInputChange(e, index)}
          />
        ))}
      </div>
      <br />
      <center>
        <button onClick={resetTimer}>Gửi lại ({countdown}s)</button> <br />
        <Link to="/thanh-toan/xac-minh/thanh-toan-tien"className='speclink' disabled={!isCodeValid}>
          XÁC MINH
        </Link>
          <div className='special'></div>
        <Link to='/thanh-toan'>Trở lại</Link>
      </center>
     
    </div>
  );
};

export default Confirm;
