import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Missing = () => {
  return (
    <motion.div
      initial={{opacity: 0, x: "100%"}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: "-100%"}}
      transition={{duration: 1, ease: "easeInOut"}}>
      {" "}
      <div
        style={{
          display: "flex",

          justifyContent: "center",
          minHeight: "100vh",
          alignItems: "center",
          backgroundColor: "black",
          color: "#fff",
          letterSpacing: "3px",
        }}>
        <p style={{color: "#fff"}}>Page not Found 404 / </p>
        <Link to="/">
          <p style={{color: "red"}}>Go Back Home</p>
        </Link>
      </div>
    </motion.div>
  );
};
export default Missing;
