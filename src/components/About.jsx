import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import twitter from "../pictures/twitter.png";
import facebook from "../pictures/facebook.png";
import instagram from "../pictures/instagram.png";
import styles from "../stylesheets/About.module.css";
import profile2 from "../pictures/profile2.jpg";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={profile2} alt="rajan" />
      </div>
      <div>
        <div>
          <strong>Agent</strong>
          <span> : 256997458</span>
        </div>
        <div>
          <div>
            <strong className={styles.name}>Riteek Bhardwaj</strong>
          </div>
          <div>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <strong>
              <span>Licensed Real Estate Broker</span> /{" "}
              <span>Senior Manager</span>
            </strong>
          </div>
          <div>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <strong>Gurugram - Haryana - India</strong>
          </div>
          <div>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <a href="abc@gmail.com">abc@gmail.com</a>
          </div>
        </div>

        <div>
          <button>Contact Me</button>
        </div>
        <div>
          <a href="#">
            <img
              src={twitter}
              style={{ width: "30px", height: "30px" }}
              alt=""
            />
          </a>
          <a href="#">
            <img
              src={facebook}
              style={{ width: "30px", height: "30px" }}
              alt=""
            />
          </a>
          <a href="#">
            <img
              src={instagram}
              style={{ width: "30px", height: "30px" }}
              alt=""
            />
          </a>
        </div>
        <div>
          <p>
            Hello! I’m Riteek Bhardwaj, a licensed real estate broker and senior
            manager at MJBuildVest Pvt Ltd, a leading real estate company. With
            over 20 years of experience in the industry and having successfully
            guided over 200 families and individuals in buying and selling their
            homes, I bring a wealth of knowledge and expertise to the table. My
            dual role as a senior manager and real estate professional allows me
            to offer exceptional service and strategic insights. If you’re
            looking for a seasoned expert to assist with your real estate needs,
            I’m here to help.
          </p>
        </div>
      </div>
    </div>
  );
}
