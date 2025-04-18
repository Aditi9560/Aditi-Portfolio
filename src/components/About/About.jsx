import React from 'react'
import styles from "./About.module.css"
import aboutImage from "../../assets/about/aboutImage.png"
import cursorIcon from "../../assets/about/cursorIcon.png"
import serverIcon from "../../assets/about/serverIcon.png"

const About = () => {
  return (
   <section className={styles.container}>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}> 
        <img src={aboutImage} alt='my img'
        className={styles.aboutImage}/>

    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="cursor" />
            <div className={styles.aboutItemText}>
                <h3> Frontend developer</h3>
                <p>Frontend Developer with expertise in React, HTML, CSS, and JavaScript</p>
            </div>
        </li>

        <li className={styles.aboutItem}>
            <img src={serverIcon} alt="server" />
            <div  className={styles.aboutItemText}>
                <h3> Backend developer</h3>
                <p>Backend Developer with knowledge of Java, .NET, and Spring Boot </p>
            </div>
        </li>
    </ul>
    </div>
   </section>
  )
}

export default About