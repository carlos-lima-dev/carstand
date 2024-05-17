import styles from "./Contact.module.css";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      initial={{opacity: 0, x: "100%"}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: "-100%"}}
      transition={{duration: 1, ease: "easeInOut"}} // Tempo da transição em segundos
    >
      <div className={styles.container}>
        <div className={styles.container_grid}>
          <div className={styles.container_grid_text}>
            <p>Horário</p>
            <p>Segunda: 09:30–18:30</p>
            <p>Terça: 09:30–18:30</p>
            <p>Quarta: 09:30–18:30</p>
            <p>Quinta: 09:30–18:30</p>
            <p>Sexta: 09:30–18:30</p>
            <p>Sábado: 09:30–18:30</p>
            <p>Domingo: Encerrado</p>
          </div>
          <div className={styles.container_grid_text}>
            <p>Contactos</p>
            <p>Email: geral@carseller.com</p>
            <p>Telemóvel: 91*******</p>
          </div>
          <div className={styles.container_grid_text}>
            <p>Localização</p>
            <p>Rua São João Batista, nº2860 Ponte, 4805-319 Guimarães</p>
          </div>
        </div>
        <div className={styles.whatsapp}>
          <Link to="https://wa.me/916910***" className={styles.whatsapp_button}>
            <p>Contate-nos pelo WhatsApp.</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;
