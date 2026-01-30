import React from "react";
import styles from "../stylesheets/PropCard.module.css";

export default function PropCard({ image, bedrooms, bathrooms, address }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={image} alt="Property" />
      </div>
      <div className={styles.bedbath}>
        <span>{bedrooms} Bedroom</span>
        <span>-</span>
        <span>{bathrooms} Bathroom</span>
      </div>
      <div className={styles.address}>
        <span>{address}</span>
      </div>
      <div>
        <button>Explore</button>
      </div>
    </div>
  );
}
