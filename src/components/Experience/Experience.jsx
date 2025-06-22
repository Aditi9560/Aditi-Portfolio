import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";


 const Experience = () => {

   const skillsdata=
    [
    {
      "title": "HTML",
      "imageSrc": "./skills/html.png"
    },
    {
      "title": "CSS",
      "imageSrc": "./skills/css.png"
    },
    {
      "title": "React",
       "imageSrc": "./skills/react.png"
    },
    {
      "title": "Javascript",
       "imageSrc": "./skills/javascript.png"
    },
    {
      "title": "Java",
       "imageSrc": "./skills/java.png"
    },
    {
      "title": "Springboot",
       "imageSrc": "./skills/spring-boot.png"
    },
    {
      "title": ".Net",
       "imageSrc": "./skills/.net.png"
    },
    {
      "title": "MySQL",
       "imageSrc": "./skills/mySql.png"
    }
  ]
   

   
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience