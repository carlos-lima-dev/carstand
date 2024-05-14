import styles from "./Vantagens.module.css";

const Vantagens = ({title, text}) => {
  return (
    <div className={styles.card_vantagens_container_style}>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
};
export default Vantagens;
