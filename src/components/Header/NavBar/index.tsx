import React from 'react';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <div className={className ? `${styles.navbar} ${className}` : styles.navbar}>
      <div>
        <a className={styles.title} href="#Resume">Resume</a>
      </div>
      <div>
        <a className={styles.title} href="#Projects">Projects</a>
      </div>
      <div>
        <a className={styles.title} href="#Contact">Contact</a>
      </div>
    </div>
  );
};

export default NavBar;
