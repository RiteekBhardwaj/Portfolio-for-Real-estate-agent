import React from "react";
import styles from "../stylesheets/ShortIntro.module.css";
import image1 from "../pictures/profile2.jpg";

export default function ShortIntro({ firstName, lastName, introText }) {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["intro-text"]}>
        <div className={styles["name-box"]}>
          <div className={styles["first-name"]}>
            <strong className="field">{firstName}</strong>
          </div>
          <div className={styles["last-name"]}>
            <strong className={styles["field"]}>{lastName}</strong>
          </div>
        </div>
        <div className={styles.intro}>
          <p className={styles.field}>{introText}</p>
        </div>
        <div className={styles["contact-btns"]}>
          <div className={styles["new-to"]}>
            <button className={styles["new-to-rajan"]}>ABOUT ME</button>
          </div>
          <div className={styles.contact}>
            <button className={styles["contact-rajan"]}>CONTACT ME</button>
          </div>
        </div>
      </div>
      <div className={styles["intro-img"]}>
        <img src={image1} alt="rajan" />
      </div>
    </div>
  );
}
