import { React, useContext, useEffect } from "react";
import BackGround404 from "../../../Assets/background/404-BackGround.jpg";
import styles from "./PageNotFound.module.css";
import FormButton from "../../../Components/form-btn/FormButton";
import { Link } from "react-router-dom";
import { AppContext } from "../layout/Layout";
const PageNotFound = () => {
  const { setDisplayFooter } = useContext(AppContext);
  useEffect(() => {
    setDisplayFooter(true);
  }, []);
  return (
    <div className={styles.container}>
      <img
        src={BackGround404}
        alt="404 Error"
        className={styles.BackGround404}
      />
      <h1>PAGE NOT FOUND</h1>
      <h6>
        Sorry, the page you're looking for doesn't exist. If you think something
        is broken, report a problem.
      </h6>
      <Link to="/homepage" className={styles.navLink}>
        <FormButton text={"Back To Home Page"} />
      </Link>
    </div>
  );
};

export default PageNotFound;
