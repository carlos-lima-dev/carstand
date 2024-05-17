import styles from "./About.module.css";
import {motion} from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0, x: "100%"}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: "-100%"}}
      transition={{duration: 1, ease: "easeInOut"}}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <h2>Sobre nós</h2>
        </div>
        <div className={styles.container_grid}>
          <div className={styles.container_grid_left}>
            <p>Empresa</p>
            <p>
              A empresa CARSELLER, LDA foi constituída no dia 05 de Fevereiro de
              2000. Trabalhamos sempre com base nos mesmos princípios, confiança
              e profissionalismo e, ao longo dos anos adquirimos um novo, a
              experiência. O stand dispõe de um espaço físico, aberto ao
              público, com um grande stock de viaturas, que variam nas suas
              características e preço, tendo por objetivo conseguir servir os
              nossos clientes, independentemente daquilo que procurem
            </p>
          </div>
          <div className={styles.container_grid_right}>
            <img
              src="https://www.sofit4.com.br/wp-content/uploads/renovacao-da-frota.jpg"
              alt="stand parking"
            />
          </div>
        </div>
        <div className={styles.container_grid_mission}>
          <p>Missão</p>
          <p>
            A nossa missão consiste em servir os nossos clientes, de maneira a
            que se tornem clientes para sempre e não para uma vez só.
            Acreditamos que quando o serviço é bem prestado, outros clientes
            irão aparecer através de recomendações. É sobre este fundamento que
            trabalhamos com gosto e vontade há 20 anos.
          </p>
        </div>
        <div className={styles.container_team}>
          <h2>Equipa</h2>
          <div className={styles.container_grid_team}>
            <div className={styles.container_grid_team_img}>
              <p>Luis Castro</p>
              <p>Diretor Executivo</p>
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                alt=""
              />
            </div>
            <div className={styles.container_grid_team_img}>
              <p>Vitor Lima</p>
              <p>Financiamento</p>
              <img
                src="https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
                alt=""
              />
            </div>
            <div className={styles.container_grid_team_img}>
              <p>Jose Sousa</p>
              <p>Design & Marketing</p>
              <img
                src="https://st4.depositphotos.com/12982378/22072/i/450/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
