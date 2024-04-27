import React from 'react'
import { getImageUrl } from '../../../utils'
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ada</h1>
            <p className={styles.description}>I'm a full stack developer with 5 yearsof experience using React and Node.js .Reach out if you'd like to learn more!</p>
        <a href="mailto:myemail@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
