import React from "react";

import styles from "./AssistsPage.module.css";
// import AssistsField from '../../../components/assists-field/AssistsField';
import AssistsField from "../../../../Components/assists-field/AssistsField";
// import warrantyIcon from '../../../assets/icons/waranty.png';
import warrantyIcon from "../../../../Assets/icons/waranty.png";
// import emailIcon from '../../../assets/icons/email.png';
import emailIcon from "../../../../Assets/icons/email.png";
// import complainIcon from '../../../assets/icons/complain.png';
import complainIcon from "../../../../Assets/icons/complain.png";
// import CustomerCare from '../../../assets/icons/chamsockhachhang.png';
import CustomerCare from "../../../../Assets/icons/chamsockhachhang.png";

const AssistsPage = () => {
  return (
    <div className={styles.assistField}>
      <AssistsField
        icon={warrantyIcon}
        text="Bảo hành (8h00 - 21h00)"
        text2="0377363281"
        className={styles.singleAssist}
      />

      <AssistsField
        icon={emailIcon}
        text="Email"
        text2="cskh@hometek.com"
        className={styles.singleAssist}
      />

      <AssistsField
        icon={CustomerCare}
        text="Tư vấn mua hàng (8h00 - 22h00)"
        text2="0377363281"
        className={styles.singleAssist}
      />

      <AssistsField
        icon={complainIcon}
        text="Khiếu nại (8h00 - 21h30)"
        text2="0968408945"
        className={styles.singleAssist}
      />
    </div>
  );
};

export default AssistsPage;
