import React, {useContext, useState, useRef, useEffect} from "react";
import {CarsContext} from "../../../context/carscontext";
import Card from "../../../components/Card/Card";
import Vantagens from "../../../components/Vantagens/Vantagens";
import styles from "./News.module.css";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const News = () => {
  const {carData, scrollToTopAuto} = useContext(CarsContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const cardContainerRef = useRef(null);
  const [shuffledCarData, setShuffledCarData] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const shuffledData = shuffleArray([...carData]).slice(0, 8);
    setShuffledCarData(shuffledData);
  }, [carData]);

  useEffect(() => {
    const handleScroll = () => {
      setShowPrevArrow(cardContainerRef.current.scrollLeft > 0);
      setShowNextArrow(
        cardContainerRef.current.scrollLeft +
          cardContainerRef.current.clientWidth <
          cardContainerRef.current.scrollWidth
      );
    };

    if (cardContainerRef.current) {
      cardContainerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (cardContainerRef.current) {
        cardContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === shuffledCarData.length - 1 ? 0 : prevIndex + 1
    );
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 330;
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shuffledCarData.length - 1 : prevIndex - 1
    );
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 330;
    }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({triggerOnce: true});

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: {duration: 1, ease: "easeInOut"},
      });
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{opacity: 0, x: "100%"}}
        animate={controls}
        exit={{opacity: 0, x: "-100%"}}
        className={styles.container}>
        <div>
          <h3>Novidades</h3>
        </div>
        <div className={styles.allcars_container}>
          {showPrevArrow && (
            <div className={styles.arrow_left} onClick={handlePrevious}>
              <img src="assets/seta-esquerda.png" alt="Seta para a esquerda" />
            </div>
          )}
          <div
            ref={cardContainerRef}
            className={styles.card_container}
            onClick={scrollToTopAuto}>
            {shuffledCarData.map((car, index) => (
              <div
                key={car.id}
                className={
                  index === currentIndex ? styles.active : styles.hidden
                }>
                <Card car={car} />
              </div>
            ))}
          </div>
          {showNextArrow && (
            <div className={styles.arrow_right} onClick={handleNext}>
              <img src="assets/seta-direita.png" alt="Seta para a direita" />
            </div>
          )}
        </div>
        <div className={styles.vantagens}>
          <span>Vantagens </span>
          <span>CAR</span>
          <span>SELLER</span>
        </div>
        <div className={styles.card_vantagens_container}>
          <Vantagens
            title={"20 Anos"}
            text={
              "Há 20 anos que o stand Carseller está presente no mercado automóvel. Experiência, confiança e profissionalismo são os nossos valores."
            }
          />
          <Vantagens
            title={"Financiamento"}
            text={
              "O stand Carseller é Intermediário de crédito a Título Acessório registrado no Banco de Portugal sob o Nº 00002***. Tratamos de todo o processo de financiamento do seu automóvel."
            }
          />
          <Vantagens
            title={"Retomas"}
            text={
              "Aceitamos retoma. Depois de uma avaliação geral ao seu carro atual iremos atribuir-lhe um valor. Caso aceite o valor, este pode ser deduzido na compra do novo carro."
            }
          />
        </div>
      </motion.div>
    </>
  );
};

export default News;
