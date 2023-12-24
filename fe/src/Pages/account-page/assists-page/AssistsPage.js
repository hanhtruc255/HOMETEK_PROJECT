import React from 'react';
import styles from './AssistsPage.module.css';
import AssistsField from '../../../components/assists-field/AssistsField';
import warrantyIcon from '../../../assets/icons/waranty.png';
import emailIcon from '../../../assets/icons/email.png';
import complainIcon from '../../../assets/icons/complain.png';
import CustomerCare from '../../../assets/icons/chamsockhachhang.png';

const AssistsPage = () => {
  return (
    <div className={styles.assistField}>
      <div>
        <AssistsField
          icon={warrantyIcon}
          text="Bảo hành (8h00 - 21h00)"
          text2="0377363281"
        />
      </div>

      <div>
        <AssistsField icon={emailIcon} text="Email" text2="cskh@hometek.com" />
      </div>

      <div>
        <AssistsField
          icon={CustomerCare}
          text="Tư vấn mua hàng (8h00 - 22h00)"
          text2="0377363281"
        />
      </div>

      <div>
        <AssistsField
          icon={complainIcon}
          text="Khiếu nại (8h00 - 21h30)"
          text2="0968408945"
        />
      </div>
    </div>
  );
};

export default AssistsPage;
