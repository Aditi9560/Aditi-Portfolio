import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css"

const About = () => {
  return (
   <section className={styles.container}>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}> 
        <img src={getImageUrl("about/aboutImage.png")} alt='my img'
        className={styles.aboutImage}/>

    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
                <h3> Frontend developer</h3>
                <p>Frontend Developer with expertise in React, HTML, CSS, and JavaScript</p>
            </div>
        </li>

        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server" />
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