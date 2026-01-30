import React from "react";
import styles from "../stylesheets/WhyMe.module.css";
import image1 from "../pictures/1.jpg";
import image2 from "../pictures/2.jpg";
import image3 from "../pictures/3.jpg";
import image4 from "../pictures/4.jpg";
const whymes = [
  {
    image: image1,
    heading: "Best Price",
    paragraph:
      "My goal is to secure the best possible deal for you. With a proven track record of successful negotiations, I work tirelessly to achieve outstanding results by expertly handling offers and counteroffers to maximize your return.",
  },
  {
    image: image3,
    heading: "Expert Fraud Protection",
    paragraph:
      "I implement rigorous due diligence and verification processes to safeguard your transactions from fraud. By carefully scrutinizing documents and using secure procedures, I ensure that every aspect of your deal is transparent and trustworthy.",
  },
  {
    image: image4,
    heading: "Exceptional Customer Experience",
    paragraph:
      "From our first meeting to closing day, I’m committed to providing a seamless and enjoyable experience. My attentive service means you’ll always have clear communication, prompt responses, and a dedicated partner throughout the process.",
  },
  {
    image: image2,
    heading: "Expert Knowledge of the Market",
    paragraph:
      "My expert knowledge encompasses neighborhood trends, property values, and upcoming developments. This comprehensive perspective allows me to offer strategic advice and identify the best opportunities, ensuring that you make informed and advantageous real estate decisions.",
  },
];

export default function WhyMe() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.points}>
        {whymes.map((whyme, index) => (
          <div key={index}>
            <div className={styles.image}>
              <img src={whyme.image} alt={whyme.heading} />
            </div>
            <div className={styles.text}>
              <h4>{whyme.heading}</h4>
              <p>{whyme.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
