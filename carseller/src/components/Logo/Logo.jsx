import styles from "./Logo.module.css";
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <div className={styles.container_logo}>
      <Link to="/">
        <img src="\assets\32px-Eo_circle_red_white_letter-c.svg.png" alt="" />
        <span>CAR</span>
        <span>SELLER</span>
      </Link>
    </div>
  );
};
export default Logo;
