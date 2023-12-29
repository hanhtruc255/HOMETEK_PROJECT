import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./AccountModal.module.css";
// import FormButton from '../../form-btn/FormButton';
import FormButton from "../../form-btn/FormButton";
// import { AccountContext } from '../../../pages/account-page/AccountPage';
import { AccountContext } from "../../../Pages/Users/account-page/AccountPage";
const AccountModal = ({ headingText }) => {
  const history = useNavigate();
  const { setIsAccountNotifyModalVisible } = useContext(AccountContext);
  return (
    <div className={styles.wrapperAccountModal}>
      <div className={styles.heading}>
        <p className={styles.headingText}>{headingText}</p>
      </div>
      <div className={styles.wrapperBtn}>
        <FormButton
          text="Trang chủ"
          className={styles.btn}
          onClick={() => {
            history("/");
            setIsAccountNotifyModalVisible(false);
          }}
        />
        <FormButton
          text="Hủy"
          className={classNames(styles.btn, styles.cancelBtn)}
          onClick={() => {
            setIsAccountNotifyModalVisible(false);
          }}
        />
      </div>
    </div>
  );
};

export default AccountModal;
