import styles from "./Logo.module.css";
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <div className={styles.container_logo}>
      <Link to="/">
        <span>CAR</span>
        <span>SELLER</span>
      </Link>
    </div>
  );
};
export default Logo;
