import React from "react";
import styles from "./Header.module.scss";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.title} ${styles.column}`}>
        <div className={styles.circle}></div>
        <span className={styles.name}>Kai Hsiang Fan</span>
      </div>
      <NavBar className={styles.column as string} />
    </div>
  );
};

export default Header;
