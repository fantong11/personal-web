import React from 'react'
import styles from './NavBar.module.scss'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
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
    )
}
