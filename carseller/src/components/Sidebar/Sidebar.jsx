// Sidebar.js
import React from "react";
import {Link} from "react-router-dom";
import styles from "./Sidebar.module.css";
import Logo from "../Logo/Logo";

const Sidebar = ({onClose}) => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      {/* Adiciona o ícone de fechar */}
      <div className={styles.closeIcon} onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <div className={styles.sidebarlinks}>
        {" "}
        <Link to="/cars" onClick={onClose}>
          Viaturas
        </Link>
        <Link to="/about" onClick={onClose}>
          Sobre Nós
        </Link>
        <Link to="/contact" onClick={onClose}>
          Contactos
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
