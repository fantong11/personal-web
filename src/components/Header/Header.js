import React from 'react'
import styles from './Header.module.scss'
import NavBar from './NavBar';

function Header() {
    return (
        <div className={styles.header}>
            <div className={`${styles.title} ${styles.column}`}>
                <div className={styles.circle} href={"#"}></div>
                <a className={styles.name}>Kai Hsiang Fan</a>
            </div>
            <NavBar className={styles.column} />
        </div>
    )
}

export default Header;