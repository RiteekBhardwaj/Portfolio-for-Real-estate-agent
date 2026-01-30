import React, { useState } from "react";
import styles from "../stylesheets/FAQ.module.css";

const faqs = [
  {
    question: "What sets you apart from other real estate agents?",
    answer:
      "My unique combination of in-depth local market knowledge, exceptional negotiation skills, and innovative marketing strategies sets me apart. I focus on providing personalized service tailored to your needs, ensuring a smooth and successful transaction every time.",
  },
  {
    question: "How do you determine the best price for a property?",
    answer:
      "I use a comprehensive approach that includes analyzing recent sales of comparable properties, evaluating current market conditions, and assessing the unique features of your property. This thorough analysis helps determine a competitive and accurate price to attract buyers while maximizing your return.",
  },
  {
    question: "What is your strategy for selling a property quickly?",
    answer:
      "My strategy involves a multi-faceted approach, including professional staging and high-quality photography to make your property look its best. I also employ targeted online advertising and leverage my extensive network to generate interest and attract potential buyers quickly.",
  },
  {
    question: "How do you assist buyers in finding the right property?",
    answer:
      "I begin by understanding your specific needs and preferences, including location, budget, and must-have features. Using this information, I provide a curated selection of properties that match your criteria, schedule viewings, and offer insights to help you make an informed decision.",
  },
  {
    question: "What can I expect during the buying or selling process?",
    answer:
      "Throughout the process, you can expect clear communication and dedicated support. For sellers, I handle everything from listing the property to negotiating offers and closing. For buyers, I guide you through property searches, offer advice on making competitive offers, and assist with every step until you successfully close on your new home.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h4>Frequently Asked Questions (FAQs)</h4>
      </div>
      <div className={styles.accordion}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.accordionItem} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <button
              className={styles.accordionButton}
              onClick={() => handleClick(index)}
            >
              Q. {faq.question}
            </button>
            <div className={styles.accordionContent}>
              <p>
                <b>Answer:</b> {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
