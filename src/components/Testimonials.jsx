import React, { useEffect, useRef, useState } from "react";
import styles from "../stylesheets/Testimonials.module.css";

const getRandomProfile = () =>
  `https://randomuser.me/api/portraits/men/${Math.floor(
    Math.random() * 100
  )}.jpg`;
const getRandomParagraph = () => {
  const sentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore ma",
    "Ut enim ad minim veniam, quis nostrud exercitation ulla.",
    "Duis aute irure dolor in reprehenderit in voluptate vel",
    "Excepteur sint occaecat cupidatat non proident, sunt in",
  ];
  return sentences[Math.floor(Math.random() * sentences.length)];
};
const getRandomRating = () => (Math.random() * 5).toFixed(1);
const getRandomRole = () => {
  const roles = [
    "Software Engineer",
    "Product Manager",
    "Designer",
    "Data Scientist",
    "Marketing Specialist",
    "Sales Representative",
    "Customer Support",
    "HR Manager",
    "Business Analyst",
    "Project Coordinator",
  ];
  return roles[Math.floor(Math.random() * roles.length)];
};

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const generateFakeData = () =>
    Array.from({ length: 10 }, () => ({
      profile: getRandomProfile(),
      paragraph: getRandomParagraph(),
      rating: getRandomRating(),
      role: getRandomRole(),
    }));

  const moveSlide = (step) => {
    const slider = sliderRef.current;
    if (slider) {
      const slides = slider.children;
      const totalSlides = slides.length;
      let newIndex = (slideIndex + step + totalSlides) % totalSlides;
      setSlideIndex(newIndex);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const slideWidth = slider.children[0]?.offsetWidth + 16;
      slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
  }, [slideIndex]);

  const handleRefresh = () => {
    setItems(generateFakeData());
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Clients Testimonials</h1>
      <div className={styles.sliderContainer}>
        <ul className={styles.slider} ref={sliderRef}>
          {items.map((item, index) => (
            <li key={index} className={styles.slide}>
              <img
                src={item.profile}
                alt="Profile"
                className={styles.profileImage}
              />
              <span className={styles.namebox}>Ravi Shashtri</span>
              <div className={styles.text}>
                <p>
                  <strong className={styles.role}>{item.role}</strong>
                </p>
                <p>
                  <strong className={styles.paragraph}>{item.paragraph}</strong>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.controls}>
        <button className={styles.prev} onClick={() => moveSlide(-1)}>
          ❮
        </button>
        <button className={styles.next} onClick={() => moveSlide(1)}>
          ❯
        </button>
      </div>
    </div>
  );
}
