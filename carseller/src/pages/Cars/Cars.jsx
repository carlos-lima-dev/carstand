import React, {useContext, useState, useEffect} from "react";
import styles from "./Cars.module.css";
import Card from "../../components/Card/Card";
import {CarsContext} from "../../context/carscontext";
import {motion} from "framer-motion";

const Cars = () => {
  const {carData, scrollToTopAuto} = useContext(CarsContext);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [displayedCars, setDisplayedCars] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateDisplayedCars = () => {
      const container = document.getElementById("carsContainer");
      if (container) {
        const containerWidth = container.offsetWidth;
        const cardWidth = 300; // Width of each card in pixels
        const minNumCarsToShow = 8; // Minimum number of cars to show
        let numCarsToShow = Math.floor(containerWidth / cardWidth);
        if (numCarsToShow < minNumCarsToShow) {
          numCarsToShow = minNumCarsToShow;
        }
        setDisplayedCars(numCarsToShow);
        setContainerWidth(containerWidth);
      }
    };

    // Atualizar a quantidade de carros exibidos quando a janela for redimensionada
    window.addEventListener("resize", updateDisplayedCars);
    // Atualizar a quantidade de carros exibidos quando o componente montar
    updateDisplayedCars();

    return () => {
      window.removeEventListener("resize", updateDisplayedCars);
    };
  }, []);

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handleFuelChange = (e) => {
    setSelectedFuel(e.target.value);
  };

  const handleClearFilters = () => {
    setSelectedBrand("");
    setSelectedFuel("");
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleShowLess = () => {
    setShowMore(false);
    scrollToTop(); // Scroll to top when "Show Less" is clicked
  };

  const filteredCars = carData.filter((car) => {
    if (selectedBrand && selectedFuel) {
      return car.make === selectedBrand && car.fuelType === selectedFuel;
    } else if (selectedBrand) {
      return car.make === selectedBrand;
    } else if (selectedFuel) {
      return car.fuelType === selectedFuel;
    }
    return true; // If no filters selected, return all cars
  });

  const shouldDisplayClearFilters = selectedBrand !== "" || selectedFuel !== "";
  const noCarsFound =
    filteredCars.length === 0 && (selectedBrand || selectedFuel);

  return (
    <motion.div
      initial={{opacity: 0, x: "100%"}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: "-100%"}}
      transition={{duration: 1, ease: "easeInOut"}}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <h2>Viaturas em stock</h2>
        </div>
        <div className={styles.container_select}>
          <div className={styles.container_select_style}>
            <select
              id="marcaSelect"
              value={selectedBrand}
              onChange={handleBrandChange}>
              <option value="">Marca</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Nissan">Nissan</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Kia">Kia</option>
              <option value="Peugeot">Peugeot</option>
              <option value="Volvo">Volvo</option>
              <option value="Tesla">Tesla</option>
              <option value="Fiat">Fiat</option>
              <option value="Skoda">Skoda</option>
              <option value="Jaguar">Jaguar</option>
              <option value="Land Rover">Land Rover</option>
              <option value="Renault">Renault</option>
              <option value="Mini">Mini</option>
              <option value="Mazda">Mazda</option>
            </select>
          </div>
          <div className={styles.container_select_style}>
            <select
              id="combustivelSelect"
              value={selectedFuel}
              onChange={handleFuelChange}>
              <option value="">Combustível</option>
              <option value="Gasolina">Gasolina</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          {shouldDisplayClearFilters && (
            <div className={styles.svg_flex} onClick={handleClearFilters}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 24"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <p>Limpar Filtros</p>
            </div>
          )}
        </div>
        {noCarsFound ? (
          <div className={styles.no_cars_found}>
            <p>Nenhum carro encontrado.</p>
          </div>
        ) : (
          <>
            <div
              className={styles.container_grid}
              id="carsContainer"
              onClick={scrollToTopAuto}>
              {filteredCars
                .slice(0, showMore ? filteredCars.length : displayedCars)
                .map((car) => (
                  <Card key={car.id} car={car} />
                ))}
            </div>
            {filteredCars.length > displayedCars && (
              <div className={styles.show_more}>
                <button onClick={showMore ? handleShowLess : handleShowMore}>
                  {showMore ? "Ver Menos" : "Ver Mais"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Cars;
