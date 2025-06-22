import React from 'react'
import heroimg from "../../assets/hero/Aditi.png"

import styles from "./Hero.module.css"

 const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hii , I' am Aditi </h1>
        <p className={styles.description}>
        Full-Stack Developer with 1+ years of experience, proficient in React, Java, and .NET technologies. Focused on developing both frontend and backend solutions for web applications. </p>
        <a href="mailto:aditiverma9560@gmail.com" className={styles.contactBtn}>Contact me</a>
    </div>
    <img src={heroimg} alt="hero image of me" className={styles.heroImg}/>
    <div className={StyleSheet.topBlur}/>
    <div className={StyleSheet.bottomBlur}/>
  </section>
  );
};
export default Hero;
