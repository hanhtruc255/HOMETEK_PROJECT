import auth from "../firebase-config/FirebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const onCaptchaVerify = async (callbackPhoneNumber) => {
  if (!window.recaptchaVerifier) {
    console.log("RUN RECAPTCHA!");
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: async (response) => {
          console.log("CALL BACK RECAPTCHA!");
          await SendOtp(callbackPhoneNumber);
        },
        "expired-callback": () => {},
      }
    );
  }
};

async function SendOtp(phoneNumber) {
  const realPhoneNumber = "+84" + phoneNumber.substring(1);
  // phoneNumber[0] === "+" ? phoneNumber : "+84" + phoneNumber.substring(1);
  console.log("RUN FIREBASE!");
  await onCaptchaVerify(realPhoneNumber);
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
