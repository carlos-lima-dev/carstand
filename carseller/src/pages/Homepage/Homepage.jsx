import Hero from "./Hero/Hero";
import News from "./News/News";
import {motion} from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{opacity: 0, x: "100%"}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: "-100%"}}
      transition={{duration: 0.5, ease: "easeInOut"}}>
      <Hero />
      <News />
    </motion.div>
  );
};

export default HomePage;
