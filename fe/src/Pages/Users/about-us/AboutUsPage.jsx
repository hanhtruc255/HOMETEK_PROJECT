import { React, useContext, useEffect } from "react";
import image1 from "../../../Assets/images/AboutUs1.png";
import image2 from "../../../Assets/images/AboutUs2.png";
import styles from "./AboutUsPage.module.scss";
import image3 from "../../../Assets/images/AboutUs3.png";
import vector from "../../../Assets/images/Vector.png";
import image4 from "../../../Assets/images/AboutUs4.png";
import image5 from "../../../Assets/images/AboutUs5.png";
import image6 from "../../../Assets/images/AboutUs6.png";

import { AppContext } from "../layout/Layout";

const AboutUsPage = () => {
  const { setDisplayFooter } = useContext(AppContext);
  useEffect(() => {
    setDisplayFooter(true);
  }, []);
  return (
    <>
      <div className={styles.content1}>
        <img src={image1} alt="" className={styles.img1} />
        <img src={image2} alt="" className={styles.img1} />
        <div className={styles.textContent1}>
          <h1 className={styles.heading1}>Về Chúng Tôi</h1>
          <p>
            HomeTek là một nền tảng trực tuyến cung cấp đồ gia dụng thông minh
            và tiện ích, chúng tôi cam kết mang đến cho khách hàng những sản
            phẩm chất lượng và dịch vụ tốt nhất.
          </p>
          <br />
          {/* <p>
            Chúng tôi luôn lắng nghe ý kiến của khách hàng và không ngừng nâng
            cao chất lượng sản phẩm cũng như dịch vụ để đáp ứng nhu cầu đa dạng
            của khách hàng.
          </p> */}
        </div>
      </div>

      <div className={styles.content2}>
        <div className={styles.box1}></div>
        <div>
          <img src={image3} alt="" className={styles.img2} />
          <div className={styles.textContent2}>
            <h1>Chúng tôi là ai</h1>
            <br />
            <p>
              Chúng tôi là một đội ngũ nhiệt huyết, đầy năng động, luôn lắng
              nghe và hỗ trợ khách hàng một cách tận tâm nhất. Với kiến thức
              chuyên sâu và niềm đam mê với công nghệ, chúng tôi luôn nỗ lực để
              mang đến cho bạn trải nghiệm mua sắm tốt nhất cũng như dịch vụ hậu
              mãi chu đáo.
            </p>
          </div>
        </div>
        <div className={styles.box2}></div>
      </div>
      <div className={styles.content3}>
        <div className={styles.heading}>
          <h2>Preparing Students to Achieve Success</h2>
          <img src={vector} alt="" />
        </div>

        <div className={styles.subContent}>
          <div className={styles.item}>
            <h3>Tầm nhìn</h3>
            <hr className={styles.line} />
            <p>
              Tạo không gian sống thông minh và tiện ích cho mọi gia đình, trở
              thành điểm đến hàng đầu cho đồ gia dụng thông minh.
            </p>
          </div>

          <div className={styles.itemImage}>
            <img src={image4} alt="" className={styles.img} />
            {/* <div className={styles.box3}></div> */}
          </div>
        </div>

        <div className={styles.subContent}>
          <div className={styles.itemImage}>
            <img src={image5} alt="" className={styles.img} />
          </div>
          <div className={styles.item}>
            <h3>Mục Tiêu</h3>
            <hr className={styles.line} />
            <p>
              Mục tiêu của chúng tôi là tạo ra một trải nghiệm mua sắm đa dạng
              và tiện lợi cho đồ gia dụng thông minh, hướng đến việc tiết kiệm
              năng lượng và xây dựng một cộng đồng sáng tạo và hỗ trợ cho mọi
              gia đình.
            </p>
          </div>
        </div>

        <div className={styles.subContent}>
          <div className={styles.item}>
            <h3>Sứ Mệnh</h3>
            <hr className={styles.line} />
            <p>
              Cung cấp giải pháp gia đình thông minh, tạo trải nghiệm mua sắm dễ
              dàng và tạo cộng đồng sáng tạo tiết kiệm năng lượng.
            </p>
          </div>

          <div className={styles.itemImage}>
            <img src={image6} alt="" className={styles.img} />
            {/* <div className={styles.box3}></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
