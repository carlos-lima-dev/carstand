import {motion} from "framer-motion";

const Missing = () => {
  return (
    <motion.div
      initial={{opacity: 0, x: "100%"}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: "-100%"}}
      transition={{duration: 0.5, ease: "easeInOut"}} // Tempo da transição em segundos
    >
      {" "}
      <div>Page not Found 404</div>
    </motion.div>
  );
};
export default Missing;
