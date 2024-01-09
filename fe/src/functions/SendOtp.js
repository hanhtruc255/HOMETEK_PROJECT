import auth from "../firebase-config/FirebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const onCaptchaVerify = (callbackPhoneNumber) => {
  if (!window.recaptchaVerifier) {
    console.log("RUN RECAPTCHA!");
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("CALL BACK RECAPTCHA!");
          SendOtp(callbackPhoneNumber);
        },
        "expired-callback": () => {},
      }
    );
  }
};

function SendOtp(phoneNumber) {
  const realPhoneNumber = "+84" + phoneNumber.substring(1);
  console.log("RUN FIREBASE!");
  onCaptchaVerify(realPhoneNumber);
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, realPhoneNumber, appVerifier)
    .then((confirmationResult) => {
      //Handle when sms sent
      window.confirmationResult = confirmationResult;
      console.log("SMS OTP SENT!");
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      //Handle when sms not sent
      console.log("SMS OTP NOT SENT!");
      console.log("ERROR: ", error);
    });
}

export default SendOtp;
