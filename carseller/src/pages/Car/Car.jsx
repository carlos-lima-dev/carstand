import React, {useState, useEffect} from "react";
import styles from "./Car.module.css";
import {useParams} from "react-router-dom";
import {useContext} from "react";
import {CarsContext} from "../../context/carscontext";
import {motion} from "framer-motion";

const Car = () => {
  const {id} = useParams();
  const {carData} = useContext(CarsContext);
  const [selectedImage, setSelectedImage] = useState("");
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (carData && carData.length > 0) {
      const car = carData.find((car) => car.id === parseInt(id));
      if (car && car.url && car.url.length > 0) {
        setSelectedImage(car.url[0]);
        setMainImage(car.url[0]);
      }
    }
  }, [carData, id]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleMainImageClick = () => {
    setSelectedImage(mainImage);
  };

  const car = carData.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div className={styles.container}>Carro não encontrado.</div>;
  }

  return (
    <motion.div
      initial={{opacity: 0, y: "100%"}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: "-100%"}}
      transition={{duration: 0.8, ease: "easeInOut"}}>
      <div className={styles.container}>
        <div className={styles.car_grid}>
          <div className={styles.car_left}>
            <h2>
              {car.make} {car.model}
            </h2>
            <img
              src={selectedImage}
              alt="Carro"
              onClick={handleMainImageClick}
            />
            {car.url && car.url.length > 1 && (
              <div className={styles.car_grid_images}>
                {car.url.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className={styles.car_grid_images_border}
                    onClick={() => handleImageClick(image)}>
                    <img src={image} alt="Carro" />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.car_right}>
            <h2>ESPECIFICAÇÕES TÉCNICAS</h2>
            <div className={styles.car_right_details}>
              <div>
                <p>MARCA & MODELO</p>
                <div>
                  <span>{car.make} </span>
                  <span>{car.model}</span>
                </div>
              </div>

              <div>
                <p>ANO / MÊS</p>
                <p>{car.year}</p>
              </div>
              <div>
                <p>QUILOMETROS</p>
                <p>{car.mileage}</p>
              </div>
              <div>
                <p>COMBUSÍVEL</p>
                <p>{car.fuelType}</p>
              </div>
              <div>
                <p>COR</p>
                <p>{car.color}</p>
              </div>
              <div>
                <p>TRANSMISÃO</p>
                <p>{car.transmission}</p>
              </div>
              <div>
                <p>PREÇO</p>
                <p>{car.price} €</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.faq_grid}>
          <h3>FAQs</h3>
          <details>
            <summary>Que documentos necessito para o crédito?</summary>
            <p className={styles.faq_p_size}>
              São precisos os seguintes documentos: 3 Últimos Recibos de
              Vencimento; Cartão de Cidadão; Comprovativo de NIB; Comprovativo
              de Morada; Folha do IRS;
            </p>
          </details>
          <details>
            <summary>Posso entregar a minha viatura como retoma?</summary>
            <p className={styles.faq_p_size}>
              Sim, aceitamos a retoma. Depois de uma avaliação geral ao seu
              carro atual iremos atribuir-lhe um valor. Caso aceite o valor,
              este pode ser deduzido na compra do novo carro.
            </p>
          </details>
          <details>
            <summary>É possivel realizar um test-drive à viatura?</summary>
            <p className={styles.faq_p_size}>
              Sim, com marcação prévia. Durante o test-drive irá ser
              acompanhado/a por um dos responsáveis por questões de segurança.
            </p>
          </details>
        </div>
      </div>
    </motion.div>
  );
};

export default Car;
