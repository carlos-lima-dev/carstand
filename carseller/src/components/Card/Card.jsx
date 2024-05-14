import styles from "./Card.module.css";
import {Link} from "react-router-dom";

const Card = ({car}) => {
  return (
    <Link to={`/car/${car.id}`}>
      <div className={styles.card}>
        <div className={styles.card_header}>
          <div className={styles.card_header_text}>
            <p>{car.make}</p>
            <p>{car.model}</p>
          </div>
          <div className={styles.card_header_text_price}>
            <p>{car.price}€</p>
          </div>
        </div>
        <div>
          <img src={car.url[0]} alt="" />
        </div>
        <div className={styles.card_footer}>
          <div className={styles.card_footer_svg}>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              {/* SVG paths */}
            </svg>
            <p>{car.year}</p>
          </div>

          <div className={styles.card_footer_svg}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              {/* SVG elements */}
            </svg>
            <p>{car.mileage}Km</p>
          </div>
          <div className={styles.card_footer_svg}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              {/* SVG elements */}
            </svg>
            <p>{car.fuelType}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
