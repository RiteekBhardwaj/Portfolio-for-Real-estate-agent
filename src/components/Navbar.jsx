import React, { useState } from "react";
import styles from "../stylesheets/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [close, setClose] = useState(false);

  const handleLinkClick = (event) => {
    setActiveLink(event.target.textContent);
    if (window.innerWidth <= 906) {
      setClose(true);
    }
  };

  return (
    <nav>
      <div className={styles["wrapper"]}>
        <div className={styles["logo"]}>
          <a href="#Home">Riteek</a>
        </div>
        <input type="radio" name="slider" id={styles["menubtn"]} />
        <input
          type="radio"
          name="slider"
          id={styles["closebtn"]}
          checked={close}
        />
        <ul className={styles["nav-links"]}>
          <label
            htmlFor={styles["closebtn"]}
            className={`${styles.btn} ${styles["close-btn"]}`}
          >
            <FontAwesomeIcon icon={faX} />
          </label>
          {["Home", "Buy", "Sell", "About", "Contact"].map((link) => (
            <li key={link}>
              <a
                className={
                  activeLink === link ? styles["active"] : styles["in-active"]
                }
                href={`#${link}`}
                onClick={handleLinkClick}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <label
          htmlFor={styles["menubtn"]}
          className={`${styles.btn} ${styles["menu-btn"]}`}
        >
          <span>Menu</span>
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </label>
      </div>
    </nav>
  );
}
