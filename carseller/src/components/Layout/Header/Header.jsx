// Header.js
import React, {useState, useEffect} from "react";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import Logo from "../../Logo/Logo";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsSidebarOpen(false); // Close the sidebar when scrolled down 300px
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container_back}>
    <div className={styles.container}>
      <Logo onClose={toggleSidebar} />
      <div className={styles.nav_display}>
        <Link to="/cars">
          <p>Viaturas</p>
        </Link>
        <Link to="/about">
          <p>Sobre Nós</p>
        </Link>
        <Link to="/contact">Contactos</Link>
      </div>
      <div className={styles.nav_display_burger} onClick={toggleSidebar}>
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
          <path d="M2 12h20M2 6h20M2 18h20" />
        </svg>
      </div>
      {/* Renderizar o Sidebar condicionalmente */}
      {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
    </div>
       </div>
  );
};

export default Header;
