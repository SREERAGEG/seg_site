import React from "react";
import styles from "./Navbar.module.css"
export const Navbar =() =>{
    return (
        <nav className={styles.nabar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
        <ul className={styles.menuItems}>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#Experience'>Experience</a>
            </li>
            <li>
                <a href='#Project'>Project</a>
            </li>
            <li>
                <a href='#Contact'>Contact</a>
            </li>
        </ul>
    </div>
        </nav>
    )
}