import React,{useState} from "react";
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils";
export const Navbar =() =>{
    const [menuOpen, setMenuOpen]=useState(false);
    return (
        <nav className={styles.nabar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="MenuButton" onClick={()=> setMenuOpen(!menuOpen)}/>
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