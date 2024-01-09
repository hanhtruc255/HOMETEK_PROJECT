import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

//This is account of anhntc21406@st.uel.edu.vn
// const firebaseConfig = {
//   apiKey: "AIzaSyD3gvOGatlRGSwb56IWNRLF756ceSiCyT0",
//   authDomain: "homtek-3adcf.firebaseapp.com",
//   projectId: "homtek-3adcf",
//   storageBucket: "homtek-3adcf.appspot.com",
//   messagingSenderId: "293007960608",
//   appId: "1:293007960608:web:e3f2157bec93f473c62a45",
//   measurementId: "G-DBS98C6B14",
// };

//This is account of chamanh0506@gmail.com
// const firebaseConfig = {
//   apiKey: "AIzaSyBDS5-Yb6BfuayfoP9zmRAxUjbJQbE82ZA",
//   authDomain: "homtek-ebe88.firebaseapp.com",
//   projectId: "homtek-ebe88",
//   storageBucket: "homtek-ebe88.appspot.com",
//   messagingSenderId: "643068957157",
//   appId: "1:643068957157:web:916682a43d57a18ad21f0c",
//   measurementId: "G-B21WGRVBXY",
// };

// this is account of chamanh050603@gmail.com
const firebaseConfig = {
  apiKey: "AIzaSyC3bO6m0XvnSEmv8W3LqR5NbGKzrwaWF_w",
  authDomain: "hometek-project.firebaseapp.com",
  projectId: "hometek-project",
  storageBucket: "hometek-project.appspot.com",
  messagingSenderId: "605878580706",
  appId: "1:605878580706:web:bf72c6fb0b08463d8d35bb",
  measurementId: "G-MRDRZXV6DY",
};

//This is account of thuongmt21406@st.uel.edu.vn
// const firebaseConfig = {
//   apiKey: "AIzaSyBe_ipYjNlrQl1358g28Zk5bTUyKL_PULA",
//   authDomain: "hometek-project-2f3cc.firebaseapp.com",
//   projectId: "hometek-project-2f3cc",
//   storageBucket: "hometek-project-2f3cc.appspot.com",
//   messagingSenderId: "352096727739",
//   appId: "1:352096727739:web:af581537e501868b252f9e",
//   measurementId: "G-9MS8S4RG88",
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
