import {Link} from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
        <img src="\assets\480363.png" alt="" />
      </div>
      <div className={styles.container_text}>
        <h2>HÁ 20 ANOS NO MERCADO AUTOMÓVEL</h2>
      </div>
    </div>
  );
};
export default Hero;
